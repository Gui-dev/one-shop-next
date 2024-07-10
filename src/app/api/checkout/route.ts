import { NextRequest } from 'next/server'

import { stripe } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  const { price_id } = await request.json()

  if (!price_id) {
    return Response.json({
      status: 400,
      error: 'Price not found',
    })
  }

  const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancel_url = `${process.env.NEXT_URL}/cancel`
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: price_id,
        quantity: 1,
      },
    ],
    cancel_url,
    success_url,
  })

  return Response.json({ checkout_url: checkoutSession.url })
}
