'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Add signup logic here
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-20 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto"
      >
        <h1 className="text-gray-300 text-4xl font-bold mb-8 text-center">Crie sua conta</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Nome completo"
              className="text-white w-full px-4 py-3 rounded-full bg-secondary"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              className="text-white w-full px-4 py-3 rounded-full bg-secondary"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Senha"
              className="text-white w-full px-4 py-3 rounded-full bg-secondary"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full rounded-full"
            disabled={isLoading}
          >
            {isLoading ? (
              "Criando conta..."
            ) : (
              <span className="flex items-center justify-center">
                Criar Conta
                <ArrowRight className="ml-2" size={20} />
              </span>
            )}
          </Button>
        </form>
        <p className="mt-6 text-center text-muted-foreground">
          Já tem uma conta?{' '}
          <Link href="/login" className="text-primary hover:underline">
            Faça login
          </Link>
        </p>
      </motion.div>
    </div>
  )
}

