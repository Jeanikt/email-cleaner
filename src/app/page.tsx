"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            Transforme sua caixa de entrada em um espaço produtivo
          </h1>
          <p className=" text-xl mb-8 text-muted-foreground">
            Organize, limpe e mantenha sua caixa de entrada sob controle com nossa solução inteligente.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className=" group px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors inline-flex items-center"
            >
              Comece Agora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              href="/pricing"
              className="text-white px-6 py-3 rounded-full border border-primary hover:bg-primary/10 transition-colors"
            >
              Ver Planos
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 border-t border-border">
        <div className="text-white grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Limpeza Inteligente",
              description: "Algoritmos avançados que identificam e organizam seus emails automaticamente."
            },
            {
              title: "Segurança Garantida",
              description: "Criptografia de ponta a ponta e proteção total dos seus dados."
            },
            {
              title: "Integração Universal",
              description: "Compatível com Gmail, Outlook e outros serviços populares de email."
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 border-t border-border">
        <h2 className="text-white text-3xl font-bold mb-12 text-center">Como Funciona</h2>
        <div className="text-white max-w-3xl mx-auto">
          {[
            { year: '01', title: 'Conecte sua conta', description: 'Integre sua conta de email em segundos' },
            { year: '02', title: 'Personalize', description: 'Defina suas preferências de limpeza' },
            { year: '03', title: 'Automatize', description: 'Deixe nossa IA trabalhar por você' },
          ].map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-8 mb-12"
            >
              <div className="text-2xl font-bold text-primary/50">{item.year}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

