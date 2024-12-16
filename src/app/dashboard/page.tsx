'use client'

import { AnimatedCard } from '../components/AnimatedCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-10 text-green-500 ">Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedCard title="Visão Geral">
          <p>Emails limpos: 1000</p>
          <p>Percentual de inbox limpo: 80%</p>
          <Button asChild className="mt-4">
            <Link href="/clean">Iniciar Limpeza</Link>
          </Button>
        </AnimatedCard>
        <AnimatedCard title="Ações Rápidas">
          <Button asChild className="mr-4">
            <Link href="/clean">Limpar Caixa de Entrada</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/settings">Configurações de Filtros</Link>
          </Button>
        </AnimatedCard>
      </div>
    </div>
  )
}

