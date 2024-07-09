import 'keen-slider/keen-slider.min.css'

import Stripe from 'stripe'

import { Products } from '@/components/products'
import { stripe } from '@/lib/stripe'

export default async function Home() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      image_url: product.images[0],
      default_price_id: price.id,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
    }
  })

  return (
    <div className="flex h-screen flex-col bg-gray-900 pb-6">
      <main className="ml-auto flex min-h-[656px] w-full max-w-[calc(100vw-((100vw-1180px)/2))]">
        <Products products={products} />
      </main>
    </div>
  )
}
