'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true)

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-10">Configurações</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Dados Pessoais</h2>
          <form className="space-y-4">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Nova Senha" />
            <Input type="password" placeholder="Confirmar Nova Senha" />
            <Button type="submit">Atualizar Dados</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Preferências de Limpeza</h2>
          <form className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="frequency">Frequência de Limpeza</label>
              <select id="frequency" className="border rounded p-2">
                <option>Diária</option>
                <option>Semanal</option>
                <option>Mensal</option>
              </select>
            </div>
            <Button type="submit">Salvar Preferências</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Notificações</h2>
          <div className="flex items-center justify-between">
            <label htmlFor="email-notifications">Notificações por Email</label>
            <Switch
              id="email-notifications"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

