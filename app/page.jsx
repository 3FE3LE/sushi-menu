'use client'
import useSushi from "@/hooks/useSushi"
import Product from "@/components/Product"

export default function Home() {

  const { actualCategory } = useSushi()
  return (
      <>
        <h1 className="text-4xl my-10 mt-10 font-black">{actualCategory?.name}</h1>
        <p className="text-2xl my-10 ">Elige y personaliza tu pedido</p>
        <div className="grid gap-2 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {actualCategory?.products?.map((product)=>(
          <Product key={product?.id} product={product}/>
        ))}
        </div>
      </>
  )
}
