import React from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../Redux/Reducers/orderHistorySlice';

const OrderPlacedComponent = ({ order }) => {
  const dispatch = useDispatch();

  // Dispatch the addOrder action
  dispatch(addOrder(order));

  // Update local storage with the ordered products
  const existingOrderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
  const updatedOrderHistory = [...existingOrderHistory, order];
  localStorage.setItem('orderHistory', JSON.stringify(updatedOrderHistory));

  console.log('OrderPlacedComponent executed with order:', order);
  console.log('Updated order history in local storage:', updatedOrderHistory);

  return (
    <div>
      Order Placed: {order.products.map(product => product.name).join(', ')}
    </div>
  );
};

export default OrderPlacedComponent;
