import useSushi from "@/hooks/useSushi"

export default function Modal({ children }) {
  const { modal } = useSushi()
  return (
    <>{modal &&
      <div className="modal fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className=" bg-white w-8/12 h-auto mx-auto rounded shadow-lg z-50 overflow-y-auto">
          {children}
        </div>
      </div>

    }
    </>
  )
}