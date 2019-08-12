import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Filter from './Filter'

const HeadBlock = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-bottom: 15px;
  text-align: center;
  background-color: #3399FF;
  border-radius: 20px;
`

function OrdersHead({ filter }) {
  return (
    <HeadBlock>
      <Title />
      <Filter filter={filter} />
    </HeadBlock>
  );
}

export default OrdersHead;
