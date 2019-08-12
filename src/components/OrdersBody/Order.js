import React, { useState } from 'react'
import TreeItem from '@material-ui/lab/TreeItem';
import { fetchProducts } from 'components/App/requests'

function Order({ order }) {
  const [isOpen, setIsOpen] = useState(false)
  const [cacheProducts, setCacheProducts] = useState(null)

  const showProducts = () => {
    if (!cacheProducts) {
      fetchProducts(order.id)
        .then((response) => {
          setCacheProducts(response)
          setIsOpen(!isOpen)
        })
    } else {
      setIsOpen(!isOpen)
    }
  }

  return (
    <TreeItem 
      nodeId={`${order.id}`} 
      label={`${order.docNum}, 
        ${order.docDate.toLocaleString()}, 
        ${order.description}`}
      onClick={() => showProducts()}
    >
      {isOpen ? 
        cacheProducts.map(product => (
          <TreeItem 
            key={product.name}
            nodeId={product.name}
            label={`${product.name}, 
              ${product.qty}, 
              ${product.price}, 
              ${product.sum}`}
          />
        ))
      : <span></span>

      }
      
    </TreeItem>
  );
}

export default Order;
