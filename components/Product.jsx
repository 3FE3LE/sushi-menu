import { amountFormat } from "@/helpers";
import useSushi from "@/hooks/useSushi";
import Image from "next/image";

export default function Product({ product }) {

  const { handleSetProduct, handleChangeModal } = useSushi()

  const { name, price, image } = product
  return (
    <div>
      <Image width={400} height={500} alt={name} src={`/assets/img/Firefly_${image}`} />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-4xl font-bold text-amber-500">{amountFormat(price)}</p>
        <button
          onClick={() => {
            handleChangeModal()
            handleSetProduct(product)
          }}
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold" >Agregar</button>
      </div>
    </div>
  )
}