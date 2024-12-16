export default function Legal() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-10">Termos de Uso e Política de Privacidade</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Termos de Serviço</h2>
          <p>
            Ao usar o Email Cleaner, você concorda em cumprir estes termos de serviço. 
            Reservamo-nos o direito de modificar estes termos a qualquer momento.
          </p>
          {/* Add more terms of service content here */}
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Política de Privacidade</h2>
          <p>
            Sua privacidade é importante para nós. Esta política descreve quais informações 
            coletamos e como as usamos.
          </p>
          {/* Add more privacy policy content here */}
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contato</h2>
          <p>
            Para questões legais, entre em contato conosco em: legal@emailcleaner.com
          </p>
        </section>
      </div>
    </div>
  )
}

