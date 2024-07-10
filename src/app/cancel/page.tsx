import Link from 'next/link'

export default function Cancel() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl text-gray-200">Sua compra foi cancela</h1>

      <Link
        href="/"
        className="mt-16 text-sm text-green-500 hover:text-green-500/90"
      >
        Voltar ao catálago
      </Link>
    </div>
  )
}
