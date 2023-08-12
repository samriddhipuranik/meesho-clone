import React, { useEffect } from 'react'
import Navs from '../../components/Navbar/Navs'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
import { addToCart, removeFromCart, updateOrderTotal } from '../../Redux/Reducers/cartSlice'
import { useNavigate } from 'react-router-dom'
import blankcart from "../../components/Images/blankcart.jpg"
import { Helmet } from 'react-helmet'
import meesho from '../../components/Images/meesho logo.png'


const Cart = () => {


    const cart = useSelector(state => state.cart.list);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const increaseQuantity = (itemId) => {
        dispatch(addToCart({ id: itemId, quantity: 1 }));
    };

    const decreaseQuantity = (itemId) => {
        const item = cart.find((item) => item.id === itemId);
        if (item && item.quantity > 1) {
            dispatch(addToCart({ id: itemId, quantity: -1 }));
        } else {
            dispatch(removeFromCart(itemId));
        }
    };

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    // Calculate the total price for all cart items
    const calculateCartTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    };

    // Calculate the total discount for all cart items
    const calculateCartTotalDiscount = () => {
        let totalDiscount = 0;
        cart.forEach((item) => {
            const discount = item.prevPrice - item.price;
            totalDiscount += discount * item.quantity;
        });
        return totalDiscount;
    };

    const handleContinue = () => {
        const orderTotal = calculateCartTotalPrice();
        dispatch(updateOrderTotal(orderTotal))
        navigate('/cart/address');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Helmet>
                <title>Meesho Cart</title>
                <link rel="icon" type="image/png" href={meesho} />
            </Helmet>
            <Navs />
            {
                cart.length > 0 ? (
                    <main id="cart-main">
                        <section>
                            <h2>
                                Cart <span id="cart-line"> | </span>
                                <span id="total-items">{cart.length} Items</span>
                            </h2>
                            {cart.map((item) => (
                                <div key={item.id} >
                                    <img src={item.thumbnail} alt="" />
                                    <h3>{item.title}</h3>
                                    {/* <p>Only Left In Stock</p> */}
                                    <h4>Sold By: {item.brand}</h4>
                                    <h5>
                                        <span>₹{item.price}</span> <span> ₹{item.prevPrice}</span> <span> {item.discountPercentage}% Off</span>
                                    </h5>
                                    <p>Delivery between APRIL 13 - APRIL 15</p>
                                    <div>
                                        <p>Quantity: </p>
                                        <button className="dec-btn" onClick={() => decreaseQuantity(item.id)}>
                                            -
                                        </button>
                                        <p>{item.quantity}</p>
                                        <button className="inc-btn" onClick={() => increaseQuantity(item.id)}>
                                            +
                                        </button>
                                    </div>

                                    <button onClick={() => handleRemoveFromCart(item.id)}>
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </section>

                        <section>

                            <div id="payment-details">
                                <p>Price Details</p>
                                <p className='size'>
                                    Total Product Price{" "}

                                    <span>₹{calculateCartTotalPrice()}</span>

                                </p>

                                <p className='coloured'>
                                    Total Discounts{" "}
                                    <span> ₹{calculateCartTotalDiscount()}</span>
                                </p>
                                <hr />
                                <p className="sub-total">
                                    Order Total{" "}
                                    <span> ₹{calculateCartTotalPrice()} </span>
                                </p>
                                <div className="total-discount">
                                    <img src={"https://images.meesho.com/images/marketing/1657272960496_18.webp"} alt="" />
                                    <p>&nbsp;  Yay! Your total discount is ₹{calculateCartTotalDiscount()} </p>
                                </div>

                                <button className="Continue-btn" onClick={handleContinue}> Continue</button>
                            </div>
                            <div className='meesho-safe'>
                                <img src={"https://images.meesho.com/images/marketing/1588578650850.png"} alt="" />
                            </div>
                        </section>

                    </main>
                ) : (
                    <div className="empty-cart">
                        <img src={blankcart} alt="Empty Cart" />
                        <button className="empty-btn" onClick={() => navigate('/')}>Continue Shopping</button>
                    </div>
                )

            }

        </>
    )
}

export default Cart
