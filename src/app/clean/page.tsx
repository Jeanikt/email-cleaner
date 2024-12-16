'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Checkbox } from '@/components/ui/checkbox'

export default function Clean() {
  const [progress, setProgress] = useState(0)

  const startCleaning = () => {
    // Simulate cleaning process
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 10
      setProgress(currentProgress)
      if (currentProgress >= 100) {
        clearInterval(interval)
      }
    }, 500)
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-10">Limpeza de Email</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conectar Conta de Email</h2>
        <Button>Conectar Gmail</Button>
        <Button className="ml-4">Conectar Outlook</Button>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Filtros de Limpeza</h2>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="emails-antigos" />
            <label htmlFor="emails-antigos">Emails antigos</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="emails-nao-lidos" />
            <label htmlFor="emails-nao-lidos">Emails não lidos</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="spam" />
            <label htmlFor="spam">Spam</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletters" />
            <label htmlFor="newsletters">Newsletters</label>
          </div>
        </div>
      </div>
      <Button onClick={startCleaning}>Iniciar Limpeza</Button>
      <div className="mt-8">
        <Progress value={progress} className="w-full" />
        <p className="mt-2">Progresso: {progress}%</p>
      </div>
    </div>
  )
}

