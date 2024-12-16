import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-10 text-center">Escolha seu plano</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Plano Mensal</CardTitle>
            <CardDescription>R$15,90 por mês</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Limpeza de X emails por mês</li>
              <li>Suporte básico</li>
              <li>Integração com Gmail e Outlook</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/checkout?plan=monthly">Escolher Plano</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Plano Anual</CardTitle>
            <CardDescription>R$190 por ano (R$15,83 por mês)</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Limpeza de X emails por mês</li>
              <li>Suporte premium</li>
              <li>Backups extras</li>
              <li>Relatórios detalhados de performance</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/checkout?plan=annual">Escolher Plano</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

