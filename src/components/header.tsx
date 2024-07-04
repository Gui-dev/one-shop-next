import Link from 'next/link'

export const Header = () => {
  return (
    <header className="m-auto w-full max-w-[1180px] py-8">
      <Link href="/">
        <h1 className="text-3xl font-bold text-green-500">One Shop</h1>
      </Link>
    </header>
  )
}
