'use client'
import { ToastContainer } from "react-toastify";
import { SushiProvider } from "@/context/SushiProvider";
import useSushi from "@/hooks/useSushi";
import Modal from "./Modal";
import ModalProduct from "./ModalProduct";
import Sidebar from "./Sidebar";
import Stepper from "./Stepper";

import "react-toastify/dist/ReactToastify.css"

export default function Layout({ children }) {

  return (
        <SushiProvider>
          <div className='md:flex'>
            <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
              <Sidebar />
            </aside>
            <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
              <Stepper />
              {children}
            </main>
          </div>
          <Modal >
            <ModalProduct />
          </Modal>
          <ToastContainer />
        </SushiProvider>
  )
}