'use client'
import { useEffect, useState, createContext } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

const SushiContext = createContext()

const SushiProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [actualCategory, setActualCategory] = useState({})
  const [product, setProduct] = useState({})
  const [modal, setModal] = useState(false)
  const [order, setOrder] = useState([])

  const getCategories = async () => {
    const { data } = await axios('/api/categories')
    setCategories(data)

  }

  const handleClick = (id) => {
    const category = categories.filter((cat) => cat.id === id)
    setActualCategory(category[0])
  }

  const handleSetProduct = (product) => {
    setProduct(product)
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

  const handleAddOrder = ({ categoryId, image, ...product }) => {
    if (order.some(productState => productState.id === product.id)) {
      const updateOrder = order.map(productState => productState.id === product.id ? product : productState)
      setOrder(updateOrder)
      toast.success('Pedido actualizado')
    } else {
      setOrder([...order, product])
      toast.success('Pedido agregado')
    }
    setModal(false)
  }

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    setActualCategory(categories[0])
  }, [categories])

  return (
    <SushiContext.Provider
      value={{
        categories,
        actualCategory,
        handleClick,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        order,
        handleAddOrder

      }}
    >
      {children}
    </SushiContext.Provider>
  )
}
export { SushiProvider }

export default SushiContext