export const fetchOrders = async () => {
  const response = await fetch('http://127.0.0.1:8080/api/order')
  return response.json()
}

export const fetchFilteredOrders = async value => {
  const response = await fetch(`http://127.0.0.1:8080/api/order?filter=${value}`)
  return response.json()
}

export const fetchProducts = async id => {
  const response = await fetch(`http://127.0.0.1:8080/api/order/${id}`)
  return response.json()
}