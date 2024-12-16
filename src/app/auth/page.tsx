'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Auth() {
  const [activeTab, setActiveTab] = useState('login')

  return (
    <div className="container mx-auto px-4 py-20">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Cadastro</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <form className="space-y-4">
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Senha" required />
            <Button type="submit" className="w-full">Entrar</Button>
            <Button variant="link" className="w-full">Esqueci minha senha</Button>
          </form>
        </TabsContent>
        <TabsContent value="signup">
          <form className="space-y-4">
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Senha" required />
            <Input type="password" placeholder="Confirmar Senha" required />
            <Button type="submit" className="w-full">Cadastrar</Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}

