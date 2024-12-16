import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Support() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-10">Suporte</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <details>
              <summary className="font-medium cursor-pointer">Como funciona o Email Cleaner?</summary>
              <p className="mt-2">O Email Cleaner analisa sua caixa de entrada e remove emails indesejados com base nas suas preferências.</p>
            </details>
            <details>
              <summary className="font-medium cursor-pointer">É seguro usar o Email Cleaner?</summary>
              <p className="mt-2">Sim, utilizamos criptografia de ponta a ponta e não armazenamos o conteúdo dos seus emails.</p>
            </details>
            <details>
              <summary className="font-medium cursor-pointer">Posso recuperar emails excluídos?</summary>
              <p className="mt-2">Sim, mantemos os emails excluídos por 30 dias em uma pasta de lixeira antes de removê-los permanentemente.</p>
            </details>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Formulário de Suporte</h2>
          <form className="space-y-4">
            <Input type="email" placeholder="Seu Email" required />
            <Input type="text" placeholder="Assunto" required />
            <Textarea placeholder="Descreva seu problema ou dúvida" required />
            <Button type="submit">Enviar</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

