import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'

interface ISuccessParams {
  searchParams: {
    session_id: string
  }
}

export default async function Success({ searchParams }: ISuccessParams) {
  const { session_id } = searchParams

  if (!session_id) {
    return redirect('/')
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'line_items.data.price.product'],
  })
  const purchaseDetails = {
    customerName: session.customer_details?.name,
    product: session.line_items?.data[0].price!.product as Stripe.Product,
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 bg-gray-900">
      <h1 className="text-2xl text-gray-200">Compra efetuada com sucesso!</h1>

      <div className="flex h-[145px] w-full max-w-[130px] items-center justify-center rounded-lg bg-[linear-gradient(180deg,_#1EA483_0%,_#7465D4_100%)] p-1">
        <Image
          src={purchaseDetails.product.images[0]}
          alt={purchaseDetails.product.name}
          height={110}
          width={120}
          className="object-contain"
        />
      </div>

      <p className="max-w-[560px] text-center text-base leading-6 text-gray-300">
        Olá, <strong>{purchaseDetails.customerName}</strong>, sua{' '}
        <strong>{purchaseDetails.product.name}</strong> já está a caminho da sua
        casa
      </p>

      <Link
        href="/"
        className="mt-16 text-sm text-green-500 hover:text-green-500/90"
      >
        Voltar ao catálago
      </Link>
    </div>
  )
}
