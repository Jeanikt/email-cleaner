'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Add login logic here
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="text-gray-300 container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Bem-vindo de volta</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-full bg-secondary"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Senha"
              className="w-full px-4 py-3 rounded-full bg-secondary"
              required
            />
          </div>
          <div className="flex items-center justify-end">
            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
              Esqueceu sua senha?
            </Link>
          </div>
          <Button
            type="submit"
            className="w-full rounded-full"
            disabled={isLoading}
          >
            {isLoading ? (
              "Entrando..."
            ) : (
              <span className="flex items-center justify-center">
                Entrar
                <ArrowRight className="ml-2" size={20} />
              </span>
            )}
          </Button>
        </form>
        <p className="mt-6 text-center text-muted-foreground">
          Não tem uma conta?{' '}
          <Link href="/signup" className="text-primary hover:underline">
            Cadastre-se
          </Link>
        </p>
      </motion.div>
    </div>
  )
}

