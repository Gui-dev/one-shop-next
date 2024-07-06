interface IProduct {
  params: {
    id: string
  }
}

export default function Product({ params }: IProduct) {
  return (
    <article className="m-auto grid max-w-[1180px] grid-cols-2 items-stretch gap-8 pb-5">
      <div className="flex h-[656px] w-full max-w-[576px] items-center justify-center rounded-lg bg-[linear-gradient(180deg,_#1EA483_0%,_#7465D4_100%)] p-1">
        {/* <Image /> */}
      </div>

      <div className="flex flex-col">
        <h1 className="text-3xl text-gray-300">Camiseta 1</h1>
        <strong className="mt-4 text-3xl font-bold text-green-500">
          R$ 79,90
        </strong>

        <p className="mt-8 text-lg leading-4 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          quo, ad sequi iusto eius, unde nostrum praesentium cum error aliquam
          ipsum culpa laborum commodi itaque tempora explicabo, aliquid ipsa
          ratione!
        </p>

        <button className="mt-auto cursor-pointer rounded-md border-green-300 bg-green-500 p-5 font-bold text-gray-800 hover:border-green-300/90 hover:bg-green-500/95">
          Comprar agora
        </button>
      </div>
    </article>
  )
}
