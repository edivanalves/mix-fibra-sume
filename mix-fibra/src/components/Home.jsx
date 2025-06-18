// src/components/Home.jsx

export default function Home() {
  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h2 className="section-title text-4xl font-extrabold mb-8">
        Bem-vindo ao meu site
      </h2>

      <button className="btn-glow mt-6 font-semibold">
        Clique aqui
      </button>

      <div className="card max-w-md mx-auto mt-10">
        <p className="text-gray-700">
          Este é um cartão estilizado usando Tailwind e CSS customizado.
        </p>
      </div>
    </main>
  )
}
