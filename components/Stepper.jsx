import Link from "next/link"


const steps = [
  { step: 1, label: "Pedido", path: "/" },
  { step: 2, label: "Resumen", path: "/resume" },
  { step: 3, label: "Detalle y Total", path: "/total" }
]

export default function Stepper() {

  return (
    <>
      <div className="flex justify-between mb-5">
        {steps.map(step => (
          <Link
            href={step.path}
            key={step.step}
          >
            <button
              className="text-2xl font-bold"
              type="button"> {step.label}
            </button>
          </Link>
        ))}
      </div>
    </>
  )
}