"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Zap, Clock, Users, CheckCircle } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/images/automatizacom-logo.png" alt="AutomatizacomAI Logo" className="h-10 w-auto" />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#solucoes" className="text-gray-300 hover:text-white transition-colors">
                Soluções
              </a>
              <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-gray-300 hover:text-white transition-colors">
                Contato
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="pt-24 pb-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Animated Neural Network Background */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 800 600">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  <g className="animate-pulse">
                    <circle cx="100" cy="150" r="3" fill="url(#gradient1)" />
                    <circle cx="200" cy="100" r="2" fill="url(#gradient1)" />
                    <circle cx="300" cy="200" r="3" fill="url(#gradient1)" />
                    <circle cx="150" cy="250" r="2" fill="url(#gradient1)" />
                    <line x1="100" y1="150" x2="200" y2="100" stroke="url(#gradient1)" strokeWidth="1" opacity="0.6" />
                    <line x1="200" y1="100" x2="300" y2="200" stroke="url(#gradient1)" strokeWidth="1" opacity="0.6" />
                    <line x1="100" y1="150" x2="150" y2="250" stroke="url(#gradient1)" strokeWidth="1" opacity="0.6" />
                  </g>
                </svg>
              </div>

              <div className="relative z-10">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Sua Equipe de{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Vendas e Atendimento
                  </span>{" "}
                  Agora é Autônoma e Inteligente
                </h1>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Descubra como nossos Agentes de I.A. podem transformar seu negócio, 24/7.
                </p>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Agende uma Demonstração Gratuita
                </Button>

                <div className="flex items-center space-x-8 mt-8 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Sem compromisso</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Resultados em 30 dias</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Founder Image */}
            <motion.div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent z-10 rounded-sm opacity-100"></div>
                <img
                  src="/images/ai-concept.jpg"
                  alt="Conceito de Inteligência Artificial - AutomatizacomAI"
                  className="w-full h-[600px] object-cover rounded-lg opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What is an AI Agent Section */}
      <motion.section
        id="solucoes"
        className="py-20 bg-gray-800/50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">O que é um Agente de I.A.?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nossos agentes inteligentes trabalham 24/7 para automatizar vendas e atendimento com precisão humana
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">Resposta Instantânea</h3>
                  <p className="text-gray-300">Atende clientes imediatamente, sem tempo de espera</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">Disponível 24/7</h3>
                  <p className="text-gray-300">Nunca para de trabalhar, mesmo nos finais de semana</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">Atendimento Personalizado</h3>
                  <p className="text-gray-300">Conversa natural e adaptada para cada cliente</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* WhatsApp Mockup */}
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800 rounded-3xl p-4 shadow-2xl">
              <div className="rounded-t-2xl p-4 flex space-x-3 items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Atendimento | minhaempresa.ai </h4>
                  <p className="text-xs text-green-100">online</p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 space-y-3 h-80 overflow-y-auto">
                <TypeAnimation
                  sequence={[
                    // Primeira mensagem do bot
                    () => {
                      // Limpa o container antes de começar
                      const container = document.querySelector(".chat-container")
                      if (container) container.innerHTML = ""

                      const botMessage = document.createElement("div")
                      botMessage.className = "flex justify-start"
                      botMessage.innerHTML = `
                        <div class="bg-white rounded-lg p-3 max-w-xs shadow">
                          <p class="text-gray-800 text-sm">Olá! Como posso ajudá-lo hoje?</p>
                        </div>
                      `
                      document.querySelector(".chat-container")?.appendChild(botMessage)
                    },
                    2000, // Pausa de 2 segundos

                    // Mensagem do usuário
                    () => {
                      const userMessage = document.createElement("div")
                      userMessage.className = "flex justify-end"
                      userMessage.innerHTML = `
                        <div class="bg-green-500 rounded-lg p-3 max-w-xs">
                          <p class="text-white text-sm">Gostaria de saber sobre seus serviços</p>
                        </div>
                      `
                      document.querySelector(".chat-container")?.appendChild(userMessage)
                    },
                    1500, // Pausa de 1.5 segundos

                    // Segunda mensagem do bot
                    () => {
                      const botMessage = document.createElement("div")
                      botMessage.className = "flex justify-start"
                      botMessage.innerHTML = `
                        <div class="bg-white rounded-lg p-3 max-w-xs shadow">
                          <p class="text-gray-800 text-sm">Perfeito! Oferecemos soluções de automação com IA para vendas e atendimento. Posso agendar uma demonstração gratuita para você?</p>
                        </div>
                      `
                      document.querySelector(".chat-container")?.appendChild(botMessage)
                    },
                    2500, // Pausa de 2.5 segundos

                    // Resposta do usuário
                    () => {
                      const userMessage = document.createElement("div")
                      userMessage.className = "flex justify-end"
                      userMessage.innerHTML = `
                        <div class="bg-green-500 rounded-lg p-3 max-w-xs">
                          <p class="text-white text-sm">Sim, tenho interesse!</p>
                        </div>
                      `
                      document.querySelector(".chat-container")?.appendChild(userMessage)
                    },
                    1500, // Pausa de 1.5 segundos

                    // Mensagem final do bot sobre disponibilidade
                    () => {
                      const botMessage = document.createElement("div")
                      botMessage.className = "flex justify-start"
                      botMessage.innerHTML = `
                        <div class="bg-white rounded-lg p-3 max-w-xs shadow">
                          <p class="text-gray-800 text-sm">Ótimo! Qual o melhor horário para você? Temos disponibilidade hoje às 14h ou amanhã às 10h.</p>
                        </div>
                      `
                      document.querySelector(".chat-container")?.appendChild(botMessage)
                    },
                    4000, // Pausa de 4 segundos antes de reiniciar
                  ]}
                  wrapper="div"
                  className="chat-container space-y-3"
                  repeat={Number.POSITIVE_INFINITY}
                  style={{ minHeight: "100%" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 border-t border-gray-800 py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/images/automatizacom-logo.png" alt="AutomatizacomAI Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 AutomatizacomAI. Transformando negócios com inteligência artificial.
            </p>
          </div>
        </div>
      </motion.footer>
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/554388637416?text=Desejo%20saber%20mais%20como%20utilizo%20um%20agente%20de%20ia%20no%20meu%20negócio"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Falar no WhatsApp"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  )
}
