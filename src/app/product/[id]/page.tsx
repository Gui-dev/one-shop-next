import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'

interface IProduct {
  params: {
    id: string
  }
}

export default async function Product({ params }: IProduct) {
  const response = await stripe.products.retrieve(params.id, {
    expand: ['default_price'],
  })
  const default_price = response.default_price as Stripe.Price

  const product = {
    id: response.id,
    name: response.name,
    description: response.description,
    image_url: response.images[0],
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(default_price.unit_amount! / 100),
  }

  return (
    <article className="m-auto grid max-w-[1180px] grid-cols-2 items-stretch gap-8 pb-5">
      <div className="flex h-[656px] w-full max-w-[576px] items-center justify-center rounded-lg bg-[linear-gradient(180deg,_#1EA483_0%,_#7465D4_100%)] p-1">
        <Image
          src={product.image_url}
          alt={product.name}
          title={product.name}
          height={480}
          width={520}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-3xl text-gray-300">{product.name}</h1>
        <strong className="mt-4 text-3xl font-bold text-green-500">
          {product.price}
        </strong>

        <p className="mt-8 text-lg leading-6 text-gray-300">
          {product.description}
        </p>

        <button className="mt-auto cursor-pointer rounded-md border-green-300 bg-green-500 p-5 font-bold text-gray-800 hover:border-green-300/90 hover:bg-green-500/95">
          Comprar agora
        </button>
      </div>
    </article>
  )
}
