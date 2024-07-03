interface IProduct {
  params: {
    id: string
  }
}

export default function Product({ params }: IProduct) {
  return (
    <>
      <h1>Product: {params.id}</h1>
    </>
  )
}
