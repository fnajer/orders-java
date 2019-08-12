import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import OrdersHead from 'components/OrdersHead'
import OrdersBody from 'components/OrdersBody'
import { fetchOrders, fetchFilteredOrders } from './requests'

const OrdersSection = styled.main`
  max-width: 600px;
  margin: 0 auto;
  padding: 15px;
`

function App() {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    getOrders()
  }, [])

  const getOrders = () => {
    fetchOrders()
      .then((response) => {
        setOrders(response)
      })
  }

  const filter = event => {
    const value = event.target.value
    if (!value) return getOrders()

    fetchFilteredOrders(value)
      .then((response) => {
        setOrders(response)
      })
  }

  return (
    <OrdersSection>
      <OrdersHead filter={filter}/>
      <OrdersBody orders={orders}/>
    </OrdersSection>
  );
}

export default App;
