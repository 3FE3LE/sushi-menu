import { amountFormat } from "@/helpers";
import useSushi from "@/hooks/useSushi";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ModalProduct() {

  const { product, handleChangeModal, handleAddOrder, order } = useSushi()
  const [amount, setAmount] = useState(1)
  const [edition, setEdition] = useState(false)

  useEffect(() => {
    if (order.some(productState => productState.id === product.id)) {
      const editedProduct = order.find(productState => productState.id === product.id)
      setEdition(true)
      setAmount(editedProduct.amount)
    }
  }, [order, product])

  return (
    <div className="md:flex gap-10">
      <div className="md:w-4/6">
        <Image width={600} height={600} alt={product?.name} src={`/assets/img/Firefly_${product?.image}`} />
      </div>
      <div className="md:w-2/6">
        <div className="flex justify-end mt-5 mr-5">
          <button
            onClick={handleChangeModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{product?.name}</h1>
        <p className="text-4xl font-bold text-amber-500"> {amountFormat(product?.price)}</p>
        <div className="flex gap-4 mt-5">
          <button type="button" onClick={() => setAmount(amount > 0 ? amount - 1 : amount)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
          </button>
          <p>{amount}</p>
          <button type="button" onClick={() => setAmount(amount < 5 ? amount + 1 : amount)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
        <button onClick={() => handleAddOrder({ ...product, amount })} type="button" className="bg-indigo-600 hover:bg-indigo-800 text-white px-6 py-2 mt-5 uppercase font-bold">{edition ? "Guardar Cambios" : "Agregar al pedido"}</button>
      </div>
    </div>
  )
}