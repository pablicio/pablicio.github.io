/**
 * CUSTOM VOICES CONFIGURATION
 * 
 * Configure suas vozes personalizadas aqui!
 * Cada voz é um preset de configurações (rate, pitch, volume)
 * aplicado sobre a voz padrão do sistema.
 * 
 * No futuro, você pode expandir para carregar arquivos de áudio locais.
 */

const CUSTOM_VOICES = [
    // ========== VOZES PORTUGUESAS ==========
    {
        name: "📦 Narrador Profissional BR",
        lang: "pt-BR",
        type: "custom",
        description: "Voz calma e profissional para narração",
        config: {
            rate: 0.9,      // Velocidade (0.5 a 2.0)
            pitch: 0.95,    // Tom (0.5 a 2.0)
            volume: 0.95    // Volume (0 a 1.0)
        }
    },
    {
        name: "📦 Leitura Rápida BR",
        lang: "pt-BR",
        type: "custom",
        description: "Velocidade aumentada, ótima para revisão",
        config: {
            rate: 1.4,
            pitch: 1.0,
            volume: 1.0
        }
    },
    {
        name: "📦 Voz Feminina Suave BR",
        lang: "pt-BR",
        type: "custom",
        description: "Tom mais alto e suave",
        config: {
            rate: 0.95,
            pitch: 1.2,
            volume: 0.9
        }
    },
    {
        name: "📦 Voz Masculina Grave BR",
        lang: "pt-BR",
        type: "custom",
        description: "Tom mais baixo e pausado",
        config: {
            rate: 0.85,
            pitch: 0.75,
            volume: 1.0
        }
    },
    {
        name: "📦 Audiobook BR",
        lang: "pt-BR",
        type: "custom",
        description: "Otimizada para longas leituras",
        config: {
            rate: 0.88,
            pitch: 0.92,
            volume: 0.85
        }
    },

    // ========== VOZES INGLESAS ==========
    {
        name: "📦 English Professional",
        lang: "en-US",
        type: "custom",
        description: "Professional narration for English content",
        config: {
            rate: 0.9,
            pitch: 0.95,
            volume: 0.95
        }
    },
    {
        name: "📦 English Fast Reader",
        lang: "en-US",
        type: "custom",
        description: "Speed reading optimized",
        config: {
            rate: 1.5,
            pitch: 1.0,
            volume: 1.0
        }
    },

    // ========== VOZES EXPERIMENTAIS ==========
    {
        name: "🎭 Robot Voice",
        lang: "pt-BR",
        type: "custom",
        description: "Efeito de voz robótica",
        config: {
            rate: 1.0,
            pitch: 0.5,
            volume: 1.0
        }
    },
    {
        name: "🎭 Chipmunk",
        lang: "pt-BR",
        type: "custom",
        description: "Voz acelerada e aguda (divertida!)",
        config: {
            rate: 1.5,
            pitch: 2.0,
            volume: 0.8
        }
    },

    // ========== ADICIONE SUAS VOZES AQUI ==========
    // {
    //     name: "📦 Minha Voz Customizada",
    //     lang: "pt-BR",
    //     type: "custom",
    //     description: "Descrição da sua voz",
    //     config: {
    //         rate: 1.0,
    //         pitch: 1.0,
    //         volume: 1.0
    //     }
    // },
];

/**
 * FUTURAS EXPANSÕES POSSÍVEIS:
 * 
 * 1. Carregar arquivos de áudio locais:
 *    - Adicionar campo 'audioFile' com path do arquivo
 *    - Implementar player de áudio ao invés de SpeechSynthesis
 * 
 * 2. Efeitos de áudio:
 *    - Adicionar reverb, echo, filtros
 *    - Usar Web Audio API para processamento
 * 
 * 3. Vozes de IA (APIs externas):
 *    - ElevenLabs, Google Cloud TTS, Amazon Polly
 *    - Adicionar campo 'apiConfig' com credenciais
 * 
 * 4. Salvamento de presets do usuário:
 *    - Permitir criar e salvar vozes personalizadas
 *    - Usar localStorage para persistir
 */