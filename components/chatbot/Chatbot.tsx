'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Send, Theater } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

// Funzione per normalizzare il testo e rimuovere accenti
const normalizeText = (text: string): string => {
  return text.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Rimuove accenti
    .replace(/[^a-z0-9\s]/g, '') // Rimuove punteggiatura
    .trim();
};

// Algoritmo Levenshtein per calcolare la similarità tra stringhe
const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix: number[][] = [];

  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[str2.length][str1.length];
};

// Funzione per trovare la migliore corrispondenza
const findBestMatch = (input: string, keywords: string[]): boolean => {
  const normalizedInput = normalizeText(input);
  const words = normalizedInput.split(/\s+/);
  
  return keywords.some(keyword => {
    const normalizedKeyword = normalizeText(keyword);
    return words.some(word => 
      word.includes(normalizedKeyword) || 
      normalizedKeyword.includes(word) ||
      levenshteinDistance(word, normalizedKeyword) <= 2 // Tolleranza per errori di battitura
    );
  });
};

// Database risposte con keywords espanse
const responseDatabase = {
  chi_sei: {
    keywords: ['chi sei', 'chi e', 'che cosa sei', 'cosa sei', 'presentati', 'about', 'info', 'informazioni', 'your name', 'introduce'],
    responses: [
      "Ciao! Sono qui per darti informazioni su Elisa 🎭! Ti racconto il percorso e i progetti di Elisa Antoniello, studentessa di Allestimento Scenico presso l'Accademia Teatro alla Scala di Milano.",
      "Ciao! 🎭 Sono qui per aiutarti a conoscere il lavoro di Elisa nel mondo del teatro e dell'allestimento scenico!"
    ]
  },
  progetti: {
    keywords: ['progetti', 'lavori', 'ultimi progetti', 'portfolio', 'opere', 'realizzazioni', 'produzioni', 'spettacoli', 'allestimenti', 'project', 'work', 'show', 'recent', 'latest'],
    responses: [
      "Per gli ultimi progetti di Elisa:\n\n🎭  vai al Portfolio : link qui"
    ]
  },
  contatti: {
    keywords: ['contatti', 'contatto', 'contattare', 'email', 'telefono', 'whatsapp', 'instagram', 'social', 'scrivere', 'chiamare', 'contact', 'reach', 'message'],
    responses: [
      "Puoi contattare Elisa attraverso:\n\n📱 WhatsApp: +39 390 123 4567\n📧 Email: elisa.antoniello@example.com\n📷 Instagram: @elisaantoniello\n\n"
    ]
  },
  cv: {
    keywords: ['cv', 'curriculum', 'curricula', 'curriculum vitae', 'resume', 'scarica cv', 'download cv', 'esperienza', 'formazione', 'qualifications', 'download'],
    responses: [
      "Puoi scaricare il CV di Elisa dalla sezione dedicata!\n\n[Scarica CV](/cv) | [Download PDF diretto](/cv/elisa-antoniello-cv.pdf)"
    ]
  },
  galleria: {
    keywords: ['galleria', 'foto', 'immagini', 'gallery', 'fotografie', 'pictures', 'vedere foto', 'mostrami foto', 'photos', 'images', 'video'],
    responses: [
      "La galleria contiene foto dei progetti teatrali di Elisa - dai momenti di backstage alle produzioni finite!\n\n[Vai alla Gallery](/gallery)"
    ]
  },
  competenze: {
    keywords: ['competenze', 'skills', 'capacita', 'cosa sai fare', 'specializzazione', 'abilita', 'expertise', 'lighting', 'audio', 'scenic', 'photography', 'design'],
    responses: [
      "Elisa è specializzata in:\n\n✨ Allestimento Scenico - Set e progettazione spaziale\n💡 Illuminotecnica - Design luci professionale\n🎵 Sound Design - Progettazione audio\n📸 Fotografia - Documentazione teatrale\n⚙️ Macchinistica - Movimentazione scenica\n👥 Coordinamento - Gestione team\n\n[Scopri di più](/about)"
    ]
  },
  about: {
    keywords: ['about', 'chi e elisa', 'biografia', 'storia', 'percorso', 'accademia', 'scala', 'teatro alla scala', 'academy', 'school', 'milan', 'student', 'study'],
    responses: [
      "Elisa Antoniello è studentessa del corso di Allestimento Scenico presso la prestigiosa Accademia Teatro alla Scala di Milano. Si sta specializzando in scenografia, illuminotecnica, audio e fotografia teatrale.\n\n[Leggi la biografia completa](/about)"
    ]
  },
  help: {
    keywords: ['help', 'aiuto', 'assist', 'what can you', 'how can you', 'cosa puoi', 'come puoi'],
    responses: [
      "Posso aiutarti con:\n\n• Informazioni sui progetti di Elisa\n• Dettagli di contatto\n• Download del CV\n• Visualizzare la gallery\n• Scoprire le sue competenze\n• Conoscere il suo percorso\n\nChiedimi qualsiasi cosa! 😊"
    ]
  }
};

function matchKeywords(input: string): string {
  const normalizedInput = normalizeText(input);
  
  // Saluti
  if (findBestMatch(input, ['ciao', 'salve', 'buongiorno', 'buonasera', 'hey', 'hello', 'hi'])) {
    return "Ciao! 👋 Come posso aiutarti a conoscere meglio il lavoro di Elisa?";
  }
  
  // Ringraziamenti
  if (findBestMatch(input, ['grazie', 'gracias', 'thanks', 'thank you', 'ok grazie', 'ti ringrazio'])) {
    return "Prego! Se hai altre domande sono qui. 😊";
  }
  
  // Cerca corrispondenze nel database
  for (const [key, data] of Object.entries(responseDatabase)) {
    if (findBestMatch(input, data.keywords)) {
      return data.responses[Math.floor(Math.random() * data.responses.length)];
    }
  }
  
  // Risposta di default
  return "Mi dispiace, non ho capito bene la tua domanda. 🤔\n\nProva a chiedermi dei:\n• Progetti di Elisa\n• Contatti\n• CV e curriculum\n• Competenze e skills\n• Biografia e formazione\n• Gallery e foto";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      setTimeout(() => {
        addBotMessage("Ciao! 🎭\n\nCome posso aiutarti? Posso darti informazioni su:\n• Progetti e portfolio\n• Contatti\n• CV e formazione\n• Competenze\n• Biografia\n• Gallery");
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          text,
          isBot: true,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 800);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Get bot response
    const response = matchKeywords(inputValue);
    addBotMessage(response);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-accent text-white rounded-full shadow-2xl hover:bg-accent-dark transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group"
        aria-label="Apri chat"
      >
        {isOpen ? (
          <X size={28} className="group-hover:rotate-90 transition-transform" />
        ) : (
          <Theater size={28} className="animate-pulse" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col animate-slide-up">
          {/* Header */}
          <div className="bg-accent text-white p-4 rounded-t-2xl flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Theater size={24} />
            </div>
            <div>
              <h3 className="font-semibold">La Maschera di Scena</h3>
              <p className="text-xs text-white/80">Assistente Teatrale 🎭</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-white text-primary-900 shadow-sm'
                      : 'bg-accent text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-primary-900 p-3 rounded-lg shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-primary-200 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Scrivi un messaggio..."
                className="flex-1 px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Invia messaggio"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
