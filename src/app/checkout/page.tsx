'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export default function Checkout() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan') || 'monthly'
  const [paymentMethod, setPaymentMethod] = useState('credit-card')

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-10">Finalizar Compra</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Detalhes do Plano</h2>
          <p>Plano selecionado: {plan === 'monthly' ? 'Mensal' : 'Anual'}</p>
          <p>Valor: {plan === 'monthly' ? 'R$15,90 por mês' : 'R$190,00 por ano'}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Informações de Pagamento</h2>
          <form className="space-y-4">
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label htmlFor="credit-card">Cartão de Crédito</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal">PayPal</Label>
              </div>
            </RadioGroup>
            {paymentMethod === 'credit-card' && (
              <>
                <Input type="text" placeholder="Nome no Cartão" required />
                <Input type="text" placeholder="Número do Cartão" required />
                <div className="grid grid-cols-2 gap-4">
                  <Input type="text" placeholder="MM/AA" required />
                  <Input type="text" placeholder="CVV" required />
                </div>
              </>
            )}
            <Button type="submit" className="w-full">Confirmar Compra</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

