'use client'
import useSushi from "@/hooks/useSushi";
import Image from "next/image";
import Category from "./Category";

export default function Sidebar() {

  const {categories } = useSushi()

  return (
    <>
    <div className="flex justify-center">
      <Image width={300} height={300} src={'/assets/img/logo-img.jpg'} alt="sushi-minamdang-logo" />
    </div>
      <nav className="my-10">
        {categories.map((category)=> (
          <Category key={category.id} category={category}/>
        ))}
      </nav>
    </>
  )
}
