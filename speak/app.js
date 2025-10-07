// --- 1. UTILS (Funções Auxiliares) ---
const el = sel => document.querySelector(sel);

// --- 2. MARKDOWN PROCESSOR (SRP: Processamento de Conteúdo) ---
class MarkdownProcessor {
    constructor(previewElement) {
        this.preview = previewElement;
        this.chunks = [];
        this.chunkHtml = [];
    }

    cleanMarkdown(t) {
        return t.replace(/```[\s\S]*?```/g, '')
            .replace(/`([^`]+)`/g, '$1')
            .replace(/!\[.*?\]\(.*?\)/g, '')
            .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
            .replace(/^\s*#{1,6}\s+/gm, '')
            .replace(/\*\*\*(.+?)\*\*\*/g, '$1')
            .replace(/\*\*(.+?)\*\*/g, '$1')
            .replace(/\*(.+?)\*/g, '$1')
            .replace(/__(.+?)__/g, '$1')
            .replace(/_(.+?)_/g,'$1')
            .replace(/~~(.+?)~~/g,'$1')
            .replace(/^\s*>+\s?/gm,'')
            .replace(/^\s*[-*+]\s+/gm,'')
            .replace(/^\s*\d+\.\s+/gm,'')
            .replace(/\s{2,}/g,' ').trim();
    }

    renderChunks(md) {
        this.chunks = md.split(/\n{2,}/).filter(Boolean);
        this.chunkHtml = this.chunks.map(p => marked.parse(p));
        this.preview.innerHTML = this.chunkHtml.map((html, i) =>
            `<div class="chunk" data-index="${i}">${html}</div>`
        ).join('');
        return this.chunks;
    }

    highlight(i) {
        this.preview.querySelectorAll('.chunk').forEach(c => c.classList.remove('current'));
        const element = this.preview.querySelector(`[data-index='${i}']`);
        if (element) {
            element.classList.add('current');
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    clearHighlight() {
        this.preview.querySelectorAll('.chunk').forEach(c => c.classList.remove('current'));
    }
}

// --- 3. TTS CONTROLLER (SRP: Controle de Voz e Configurações) ---
class TTSController {
    constructor(processor) {
        this.processor = processor;
        this.chunks = [];
        this.currentIndex = 0;
        this.utterance = null;
        this.settings = { rate: 1, pitch: 1, volume: 1, voice: null };
        this.allVoices = [];
        this.speakingCheckInterval = null;
        this.loadVoices();
        speechSynthesis.onvoiceschanged = this.loadVoices.bind(this);
    }

    loadVoices() {
        this.allVoices = speechSynthesis.getVoices();
    }

    setChunks(chunks) {
        this.chunks = chunks;
    }

    _startSpeakingCheck(nextIndex) {
        clearInterval(this.speakingCheckInterval);
        this.speakingCheckInterval = setInterval(() => {
            if (!speechSynthesis.speaking && !speechSynthesis.pending) {
                clearInterval(this.speakingCheckInterval);
                if (nextIndex < this.chunks.length) {
                    setTimeout(() => this.speakIndex(nextIndex), 500); 
                } else {
                    this.processor.clearHighlight();
                }
            }
        }, 800);
    }

    speakIndex(i) {
        if (i < 0 || i >= this.chunks.length) {
            this.stop();
            return;
        }

        speechSynthesis.cancel();
        clearInterval(this.speakingCheckInterval);
        
        const text = this.processor.cleanMarkdown(this.chunks[i]);
        if (!text.trim()) return this.speakIndex(i + 1);

        this.utterance = new SpeechSynthesisUtterance(text);
        Object.assign(this.utterance, this.settings);
        if (this.settings.voice) this.utterance.voice = this.settings.voice;

        const nextIndex = i + 1;

        this.utterance.onstart = () => this.processor.highlight(i);
        
        this.utterance.onend = () => {
            if (nextIndex < this.chunks.length) {
                clearInterval(this.speakingCheckInterval);
                setTimeout(() => this.speakIndex(nextIndex), 300);
            } else {
                this.stop();
            }
        };

        this.currentIndex = i;
        speechSynthesis.speak(this.utterance);
        this._startSpeakingCheck(nextIndex);
    }

    // MÉTODOS DE CONTROLE
    togglePlayPause() {
        if (speechSynthesis.speaking && !speechSynthesis.paused) {
            // Está tocando, então pausa
            clearInterval(this.speakingCheckInterval);
            speechSynthesis.pause();
            return 'paused';
        } else if (speechSynthesis.paused) {
            // Está pausado, então resume
            speechSynthesis.resume();
            this._startSpeakingCheck(this.currentIndex + 1);
            return 'playing';
        } else {
            // Não está tocando, então inicia
            this.speakIndex(this.currentIndex);
            return 'playing';
        }
    }

    stop() {
        clearInterval(this.speakingCheckInterval);
        speechSynthesis.cancel();
        this.processor.clearHighlight();
        this.currentIndex = 0;
    }

    next() {
        const nextIndex = Math.min(this.chunks.length - 1, this.currentIndex + 1);
        speechSynthesis.cancel();
        clearInterval(this.speakingCheckInterval);
        this.speakIndex(nextIndex);
    }

    prev() {
        const prevIndex = Math.max(0, this.currentIndex - 1);
        speechSynthesis.cancel();
        clearInterval(this.speakingCheckInterval);
        this.speakIndex(prevIndex);
    }

    updateSettings(newSettings) {
        const wasPlaying = speechSynthesis.speaking && !speechSynthesis.paused;
        const currentIdx = this.currentIndex;
        
        Object.assign(this.settings, newSettings);
        
        // Se estava tocando, para e recomeça com as novas configurações
        if (wasPlaying) {
            this.stop();
            setTimeout(() => this.speakIndex(currentIdx), 100);
        }
    }
}

// --- 4. SETTINGS MODAL (SRP: Gerenciamento do Modal de Configurações) ---
class SettingsModal {
    constructor(ttsController) {
        this.tts = ttsController;
        this.allVoices = [];
        this.createModalElement();
        this.attachEvents();
        this.loadVoices();
        speechSynthesis.onvoiceschanged = this.loadVoices.bind(this);
    }

    createModalElement() {
        this.modal = document.createElement('div');
        this.modal.id = 'settingsModal';
        this.modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:100;display:none;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px);';
        
        this.modal.innerHTML = `
        <div style="background:linear-gradient(180deg,#0f1728,#081427);border-radius:20px;padding:24px;max-width:420px;width:100%;box-shadow:0 20px 60px rgba(2,6,23,0.8);border:1px solid rgba(255,255,255,0.06);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
                <h2 style="font-size:20px;font-weight:700;">⚙️ Configurações</h2>
                <button id="closeModal" style="background:none;border:none;font-size:28px;cursor:pointer;color:#9aa4b2;">×</button>
            </div>
            <div style="display:flex;flex-direction:column;gap:20px;">
                <div><label>Velocidade: <span id="rateVal">1.0</span>x</label><input id="rateSlider" type="range" min="0.5" max="2" step="0.1" value="1" style="width:100%;accent-color:var(--accent);"></div>
                <div><label>Tom: <span id="pitchVal">1.0</span></label><input id="pitchSlider" type="range" min="0.5" max="2" step="0.1" value="1" style="width:100%;accent-color:var(--accent);"></div>
                <div><label>Volume: <span id="volumeVal">100</span>%</label><input id="volumeSlider" type="range" min="0" max="1" step="0.1" value="1" style="width:100%;accent-color:var(--accent);"></div>
                <div><label id="voiceLabel">Voz (carregando...)</label><select id="voiceSelect" style="width:100%;padding:10px;border-radius:8px;background:#081427;border:1px solid rgba(255,255,255,0.1);color:#e6eef8;font-size:14px;"></select></div>
            </div>
        </div>`;
        document.body.appendChild(this.modal);
    }

    loadVoices() {
        this.allVoices = speechSynthesis.getVoices();
        const voiceSelect = this.modal.querySelector('#voiceSelect');
        const voiceLabel = this.modal.querySelector('#voiceLabel');
        
        if (!this.allVoices.length) {
            voiceLabel.textContent = `Voz (carregando...)`;
            return setTimeout(this.loadVoices.bind(this), 100);
        }

        voiceLabel.textContent = `Voz (${this.allVoices.length} disponíveis)`;
        const opts = this.allVoices.map((v, i) => `<option value="${i}">${v.name} (${v.lang})</option>`).join('');
        voiceSelect.innerHTML = `<option value="">Padrão</option>${opts}`;
    }

    applySetting(key, value, displayEl, fmt = v => v) {
        const settingsUpdate = {};

        if (key === 'voice') {
            // Envia o objeto da voz ou null
            settingsUpdate.voice = value ? this.allVoices[+value] : null;
            displayEl.value = value;
        } else {
            // Outras configurações (rate, pitch, volume)
            settingsUpdate[key] = +value;
            displayEl.textContent = fmt(+value);
        }
        
        this.tts.updateSettings(settingsUpdate);
    }
    
    attachEvents() {
        const rateSlider = this.modal.querySelector('#rateSlider');
        const pitchSlider = this.modal.querySelector('#pitchSlider');
        const volumeSlider = this.modal.querySelector('#volumeSlider');
        const voiceSelect = this.modal.querySelector('#voiceSelect');
        const closeModalBtn = this.modal.querySelector('#closeModal');
        const rateVal = this.modal.querySelector('#rateVal');
        const pitchVal = this.modal.querySelector('#pitchVal');
        const volumeVal = this.modal.querySelector('#volumeVal');

        rateSlider.oninput = e => this.applySetting('rate', e.target.value, rateVal, v => v.toFixed(1));
        pitchSlider.oninput = e => this.applySetting('pitch', e.target.value, pitchVal, v => v.toFixed(1));
        volumeSlider.oninput = e => this.applySetting('volume', e.target.value, volumeVal, v => Math.round(v * 100));
        voiceSelect.onchange = e => this.applySetting('voice', e.target.value, voiceSelect);

        closeModalBtn.onclick = () => this.modal.style.display = 'none';
        this.modal.onclick = e => { if (e.target === this.modal) this.modal.style.display = 'none'; };
        el('#gearBtn').onclick = () => this.modal.style.display = 'flex';
    }
}

// --- 5. APP CONTROLLER (SRP: Orquestração e Binding de Eventos de UI) ---
class AppController {
    constructor() {
        this.fileIn = el('#fileIn');
        this.preview = el('#preview');
        this.fileNameEl = el('#fileName');
        
        this.processor = new MarkdownProcessor(this.preview);
        this.tts = new TTSController(this.processor);
        this.modal = new SettingsModal(this.tts);
        
        this.handleFileLoad = this.handleFileLoad.bind(this);
        this.handlePreviewClick = this.handlePreviewClick.bind(this);
        
        this.attachGlobalEvents();
    }

    async handleFileLoad(e) {
        const file = e.target.files[0];
        if (!file) return;

        const mdText = await file.text();
        const chunks = this.processor.renderChunks(mdText);
        this.tts.setChunks(chunks);

        this.fileNameEl.textContent = file.name;
        this.fileNameEl.classList.add('flash');
        setTimeout(() => this.fileNameEl.classList.remove('flash'), 700);
        
        this.tts.stop();
        this.tts.currentIndex = 0;
    }

    handlePreviewClick(e) {
        const chunk = e.target.closest('.chunk');
        if (chunk) {
            this.tts.stop();
            this.tts.speakIndex(+chunk.dataset.index);
            el('#playBtn').textContent = '⏸';
        }
    }

    attachGlobalEvents() {
        this.fileIn.addEventListener('change', this.handleFileLoad);
        this.preview.addEventListener('click', this.handlePreviewClick);

        const playBtn = el('#playBtn');
        playBtn.addEventListener('click', () => {
            const state = this.tts.togglePlayPause();
            playBtn.textContent = state === 'playing' ? '⏸' : '▶';
        });
        
        el('#prevBtn').addEventListener('click', () => {
            this.tts.prev();
            playBtn.textContent = '⏸';
        });
        
        el('#nextBtn').addEventListener('click', () => {
            this.tts.next();
            playBtn.textContent = '⏸';
        });
    }
}

// Inicia a aplicação
new AppController();