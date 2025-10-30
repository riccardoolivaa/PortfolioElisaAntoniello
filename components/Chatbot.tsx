'use client'

import { useState, useEffect, useRef } from 'react'
import { X, Send } from 'lucide-react'

interface Message {
  id: number
  text: string
  isUser: boolean
}

const predefinedResponses = {
  'chi sei': 'Sono la Maschera di Scena, il tuo assistente teatrale! Ti racconto il percorso e i progetti di Elisa Antoniello.',
  'ultimi progetti': 'Ecco gli ultimi progetti di Elisa:\n• La Traviata (2024) - Allestimento completo\n• Illuminazione Aida (2024) - Design luci\n• Sound Design Otello (2023) - Audio e effetti',
  'contatti': 'Puoi contattare Elisa attraverso:\n📱 WhatsApp: +39 390 123 4567\n📧 Email: elisa.antoniello@example.com\n📷 Instagram: @elisaantoniello',
  'cv': 'Puoi scaricare il CV di Elisa dalla sezione dedicata. Clicca qui per andare alla pagina CV.',
  'galleria': 'La galleria contiene foto dei progetti teatrali di Elisa. Vuoi vedere le ultime foto?',
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Ciao! Sono la Maschera di Scena 🎭 Come posso aiutarti?', isUser: false }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Show notification on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasVisited = localStorage.getItem('hasVisitedBefore')
      if (!hasVisited) {
        setIsOpen(true)
        localStorage.setItem('hasVisitedBefore', 'true')
        setTimeout(() => setIsOpen(false), 5000)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const userMessage = { id: Date.now(), text: inputText, isUser: true }
    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const lowercaseInput = inputText.toLowerCase()
      let response = 'Non ho capito bene la tua domanda. Prova a chiedermi dei progetti, contatti o del CV di Elisa!'

      // Check for keywords in predefined responses
      Object.entries(predefinedResponses).forEach(([key, value]) => {
        if (lowercaseInput.includes(key)) {
          response = value
        }
      })

      const botMessage = { id: Date.now() + 1, text: response, isUser: false }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 bg-theater-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-theater-600 transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        aria-label="Apri chat"
      >
        {/* Theater Mask Icon */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse"
        >
          <path
            d="M14 2C14 2 6 3 6 14C6 20 8 24 14 26C20 24 22 20 22 14C22 3 14 2 14 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="11" r="1" fill="currentColor" />
          <circle cx="18" cy="11" r="1" fill="currentColor" />
          <path
            d="M10 17C10 17 12 19 14 19C16 19 18 17 18 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-theater-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2C14 2 6 3 6 14C6 20 8 24 14 26C20 24 22 20 22 14C22 3 14 2 14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="11" r="1" fill="currentColor" />
                <circle cx="18" cy="11" r="1" fill="currentColor" />
                <path
                  d="M10 17C10 17 12 19 14 19C16 19 18 17 18 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">La Maschera di Scena</h3>
              <p className="text-xs opacity-80">Assistente teatrale</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Chiudi chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-3">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  message.isUser
                    ? 'bg-theater-500 text-white rounded-br-sm'
                    : 'bg-neutral-100 text-neutral-900 rounded-bl-sm'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-neutral-100 p-3 rounded-2xl rounded-bl-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce animation-delay-200" />
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce animation-delay-400" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-neutral-200">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Scrivi un messaggio..."
              className="flex-1 px-4 py-2 border border-neutral-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-theater-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="p-2 bg-theater-500 text-white rounded-full hover:bg-theater-600 transition-colors"
              aria-label="Invia messaggio"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Chatbot
