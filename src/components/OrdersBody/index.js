import React from 'react'
import styled from 'styled-components'
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Order from './Order'

const OrdersBlock = styled(TreeView)`
  padding: 15px !important;
  background-color: #ccc;
`

function OrdersBody({ orders }) {
  return (
    <OrdersBlock
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {orders.map(order => (
        <Order key={order.id} order={order} />
      ))}
    </OrdersBlock>
  );
}

export default OrdersBody;
