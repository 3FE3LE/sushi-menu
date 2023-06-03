import Image from "next/image";
import useSushi from "@/hooks/useSushi";

export default function Category({ category }) {

  const { actualCategory, handleClick} = useSushi()
  const { id, name, icon } = category

  return (
    <div className={`${actualCategory?.id === id? 'bg-amber-400': ''} flex items-center gap-4 w-full p-5 hover:bg-amber-400`}>
      <Image width={50} height={50} src={`/assets/img/${icon}`} alt={icon} />
      <button onClick={()=> handleClick(id)} type="button" className="text-2xl font-bold hover:cursor-pointer">{name}</button>
    </div>
  )
}