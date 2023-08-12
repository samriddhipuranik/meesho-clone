import React, { useEffect } from 'react'

import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './Checkout.css'
import { remove } from '../../Redux/Reducers/cartSlice';
import Navs from '../Navbar/Navs';



const Checkout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const TotalCart = useSelector(state => state.cart.total);

    const handleCheckout = () => {
        dispatch(remove());
        toast.success("Order has been placed");
        setTimeout(() => {
            navigate('/');
        }, 3000);

    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Navs />
            <section id="address-section">

                <form action="">
                    <h1>Payment Method</h1>
                    <hr />
                    <div className='cod'>
                        <div>
                            <LocalAtmIcon sx={{ color: "rgb(3, 141, 99);", marginRight: "10px" }} />
                            <h2>Cash on Delivery</h2>
                        </div>

                        <DoneIcon sx={{ color: "#fff;", marginRight: "10px", backgroundColor: "rgb(3, 141, 99);", height: "20px", width: "20px", borderRadius: "50%", }} />
                    </div>

                </form>
                <div>
                    <h1>Price Details</h1>
                    <p>
                        Total Product Price<span>₹{TotalCart}</span>
                    </p>
                    <hr />
                    <h2>
                        Order Total <span>₹{TotalCart}</span>
                    </h2>
                    <hr />
                    <button onClick={handleCheckout}>Continue</button>
                </div>

            </section>

            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </>
    )

}

export default Checkout;
