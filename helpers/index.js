export const amountFormat = (amount) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })
}