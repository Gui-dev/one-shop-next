'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'

export interface ICheckoutComponentProps {
  price_id: string
}

export const CheckoutComponent = ({ price_id }: ICheckoutComponentProps) => {
  const router = useRouter()
  const handleBuyProduct = async () => {
    try {
      const { data } = await axios.post('/api/checkout', {
        price_id,
      })

      const { checkout_url } = data
      router.push(checkout_url)
    } catch (error) {
      console.log('ERROR: ', error)
      alert('Falha ao tentar fazer checkout')
    }
  }

  return (
    <button
      type="button"
      className="mt-auto cursor-pointer rounded-md border-green-300 bg-green-500 p-5 font-bold text-gray-800 hover:border-green-300/90 hover:bg-green-500/95"
      onClick={handleBuyProduct}
    >
      Comprar agora
    </button>
  )
}
