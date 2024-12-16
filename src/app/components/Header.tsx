'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="text-gray-300 fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            EmailCleaner
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="hover:text-primary/80 transition-colors">
              Funcionalidades
            </Link>
            <Link href="/pricing" className="hover:text-primary/80 transition-colors">
              Preços
            </Link>
            <Link href="/about" className="hover:text-primary/80 transition-colors">
              Sobre
            </Link>
            <Link 
              href="/login"
              className="px-4 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/signup"
              className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Cadastro
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link href="/features" className="hover:text-primary/80 transition-colors">
                Funcionalidades
              </Link>
              <Link href="/pricing" className="hover:text-primary/80 transition-colors">
                Preços
              </Link>
              <Link href="/about" className="hover:text-primary/80 transition-colors">
                Sobre
              </Link>
              <Link href="/login" className="hover:text-primary/80 transition-colors">
                Login
              </Link>
              <Link href="/signup" className="hover:text-primary/80 transition-colors">
                Cadastro
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

