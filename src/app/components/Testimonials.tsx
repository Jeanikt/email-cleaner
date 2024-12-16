export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">O que nossos clientes dizem</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">"O Email Cleaner revolucionou minha produtividade. Minha caixa de entrada nunca esteve tão organizada!"</p>
          <p className="font-semibold">- Maria S., Gerente de Projetos</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">"Excelente ferramenta! Economizo pelo menos uma hora por dia desde que comecei a usar."</p>
          <p className="font-semibold">- João P., Empreendedor</p>
        </div>
      </div>
    </section>
  )
}

