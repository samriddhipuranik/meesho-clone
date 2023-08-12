import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const OrderHistoryButton = () => {
  const orderHistory = useSelector((state) => state.orderHistory);
  const [isOrderHistoryOpen, setIsOrderHistoryOpen] = useState(false);

  const openOrderHistory = () => {
    setIsOrderHistoryOpen(true);
  };

  const closeOrderHistory = () => {
    setIsOrderHistoryOpen(false);
  };

  return (
    <div>
      <button onClick={openOrderHistory}>
        View My Orders ({orderHistory.length})
      </button>
      {isOrderHistoryOpen && (
        <div className="order-history-list">
          <h3>Your Ordered Products:</h3>
          <ul>
            {orderHistory.map((order, index) => (
              <li key={index}>
                {order.products.map(product => product.name).join(', ')}
              </li>
            ))}
          </ul>
          <button onClick={closeOrderHistory}>Close</button>
        </div>
      )}
    </div>
  );
};

export default OrderHistoryButton;
