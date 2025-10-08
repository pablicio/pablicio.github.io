# 🎙️ Guia de Vozes Personalizadas

## ✨ O que são Vozes Personalizadas?

As vozes personalizadas são **presets de configuração** que combinam:
- **Rate** (velocidade): 0.5 = muito lento, 2.0 = muito rápido
- **Pitch** (tom): 0.5 = grave, 2.0 = agudo
- **Volume**: 0.0 = mudo, 1.0 = máximo

Elas aparecem no seletor de vozes junto com as vozes do sistema operacional!

---

## 🚀 Como Usar

### 1. **Selecione uma Voz Personalizada**
   - Abra as configurações (⚙️)
   - No dropdown de vozes, procure pelo grupo **"📦 Vozes Personalizadas"**
   - Escolha uma voz (ex: "Narrador Profissional BR")
   - Os sliders serão ajustados automaticamente!

### 2. **Ajuste Fino (Opcional)**
   - Após selecionar uma voz personalizada
   - Você ainda pode ajustar manualmente os sliders
   - As mudanças serão aplicadas imediatamente

---

## 🎨 Como Criar Suas Próprias Vozes

Edite o arquivo `custom-voices.js`:

```javascript
{
    name: "📦 Minha Voz Especial",
    lang: "pt-BR",
    type: "custom",
    description: "Descrição da minha voz",
    config: {
        rate: 1.0,    // Velocidade normal
        pitch: 1.0,   // Tom normal
        volume: 1.0   // Volume máximo
    }
}
```

### 📝 Dicas para Configuração

| Uso | Rate | Pitch | Volume |
|-----|------|-------|--------|
| **Narração profissional** | 0.85-0.95 | 0.9-1.0 | 0.9-0.95 |
| **Leitura rápida** | 1.3-1.6 | 1.0 | 1.0 |
| **Voz feminina** | 0.9-1.0 | 1.1-1.3 | 0.9 |
| **Voz masculina** | 0.85-0.95 | 0.7-0.9 | 1.0 |
| **Audiobook** | 0.85-0.9 | 0.9-0.95 | 0.8-0.9 |
| **Robô** | 1.0 | 0.5-0.6 | 1.0 |

---

## 🔮 Vozes Incluídas por Padrão

### 🇧🇷 Português
- **Narrador Profissional BR**: Calma e profissional
- **Leitura Rápida BR**: 40% mais rápido
- **Voz Feminina Suave BR**: Tom alto e suave
- **Voz Masculina Grave BR**: Tom baixo e pausado
- **Audiobook BR**: Otimizada para longas leituras

### 🇺🇸 Inglês
- **English Professional**: Professional narration
- **English Fast Reader**: Speed reading

### 🎭 Experimentais
- **Robot Voice**: Efeito robótico
- **Chipmunk**: Voz acelerada e aguda

---

## 🎯 Exemplos de Uso

### Criar voz para estudos
```javascript
{
    name: "📚 Modo Estudo",
    lang: "pt-BR",
    type: "custom",
    config: {
        rate: 0.8,     // Mais lento para absorver
        pitch: 1.0,    // Tom normal
        volume: 0.85   // Volume confortável
    }
}
```

### Criar voz para exercícios
```javascript
{
    name: "🏃 Modo Exercício",
    lang: "pt-BR",
    type: "custom",
    config: {
        rate: 1.2,     // Mais rápido
        pitch: 1.1,    // Tom animado
        volume: 1.0    // Volume alto
    }
}
```

### Criar voz para meditação
```javascript
{
    name: "🧘 Modo Zen",
    lang: "pt-BR",
    type: "custom",
    config: {
        rate: 0.7,     // Bem lento
        pitch: 0.85,   // Tom calmo
        volume: 0.7    // Volume baixo
    }
}
```

---

## 🔧 Estrutura Técnica

```
Seleção de Voz
    ├─ 🎭 Padrão do Sistema
    ├─ 📦 Vozes Personalizadas (custom-voices.js)
    │   └─ Presets com rate/pitch/volume
    └─ 💻 Vozes do Sistema (do SO)
        └─ Vozes nativas do navegador
```

---

## 🚀 Expansões Futuras Possíveis

1. **Arquivos de áudio locais**: Carregar MP3/WAV
2. **Efeitos de áudio**: Reverb, echo, filtros
3. **APIs de IA**: ElevenLabs, Google Cloud TTS
4. **Editor visual**: Interface para criar vozes
5. **Compartilhamento**: Exportar/importar presets
6. **Temas de voz**: Pacotes temáticos (terror, comédia, etc)

---

## 💡 Perguntas Frequentes

**P: As vozes personalizadas funcionam offline?**
R: Sim! Elas são apenas configurações aplicadas sobre a voz do sistema.

**P: Posso ter quantas vozes?**
R: Sem limite! Adicione quantas quiser no `custom-voices.js`

**P: As vozes são salvas?**
R: Atualmente não, mas é fácil adicionar localStorage para isso.

**P: Funciona em qualquer navegador?**
R: Sim, mas a qualidade depende do TTS do navegador.

---

## 📦 Arquivos do Sistema

- `custom-voices.js` - Configuração de vozes (edite este!)
- `app.js` - Lógica principal (não precisa editar)
- `index.html` - Interface (não precisa editar)
- `style.css` - Estilos (não precisa editar)

---

**Divirta-se criando suas vozes! 🎉**