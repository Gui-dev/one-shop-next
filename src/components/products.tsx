'use client'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import Link from 'next/link'

interface IProducts {
  products: {
    id: string
    name: string
    image_url: string
    price: number
  }[]
}

export const Products = ({ products }: IProducts) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Link href={`/product/${product.id}`} key={product.id}>
            <article className="keen-slider__slide relative flex cursor-pointer items-center justify-center rounded-lg bg-[linear-gradient(180deg,_#1EA483_0%,_#7465D4_100%)]">
              <Image
                src={product.image_url}
                alt={product.name}
                height={380}
                width={420}
                className="object-cover"
              />

              <footer className="absolute bottom-1 left-1 right-1 flex items-center justify-between rounded-md bg-[rgba(0,0,0,0.6)] p-8">
                <h1 className="text-lg">{product.name}</h1>
                <span className="text-xl font-bold text-green-300">
                  R$ {product.price}
                </span>
              </footer>
            </article>
          </Link>
        )
      })}
    </div>
  )
}
