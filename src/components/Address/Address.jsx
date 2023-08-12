import React, { useEffect } from 'react'

// import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Address.css'
import Navs from '../Navbar/Navs';



const Address = () => {

    const navigate = useNavigate();

    const TotalCart = useSelector(state => state.cart.total);

    const handleContinue = () => {

        navigate('/cart/address/checkout');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navs/>
            <section id="address-section">
                <form action="">
                    <h1>Select Delivery Address</h1>
                    <hr />
                    <div>
                        {/* <PhoneOutlinedIcon /> */}
                        <h2>Contact Details</h2>
                    </div>
                    <input
                        type="text"
                        placeholder="Name"
                        id="0"
                    // value={inp[0]}
                    // onChange={changeHandler}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        id="1"
                    // value={inp[1]}
                    // onChange={changeHandler}
                    />
                    <div>

                        <h2>Address Details</h2>
                    </div>
                    <input
                        type="text"
                        placeholder="House no./ Building Name"
                        id="2"
                    // value={inp[2]}
                    // onChange={changeHandler}
                    />
                    <input
                        type="text"
                        placeholder="Road Name/ Area/ Colony"
                        id="3"
                    // value={inp[3]}
                    // onChange={changeHandler}
                    />
                    <input
                        type="text"
                        placeholder="Pincode"
                        id="4"
                    // value={inp[4]}
                    // onChange={changeHandler}
                    />
                    <input
                        type="text"
                        placeholder="City"
                        id="5"
                    // value={inp[5]}
                    // onChange={changeHandler}
                    />
                    <input
                        type="text"
                        placeholder="State"
                        id="6"
                    // value={inp[6]}
                    // onChange={changeHandler}
                    />
                    <input
                        type="text"
                        placeholder="Nearby Location (optional)"
                        id="7"
                    // value={inp[7]}
                    // onChange={changeHandler}
                    />
                    <button onClick={handleContinue}>Deliver to this Address</button>
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
                </div>
            </section>
        </>
    )
}

export default Address
