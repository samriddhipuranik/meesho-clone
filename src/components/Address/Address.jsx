import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Address.css';
import Navs from '../Navbar/Navs';
import { v4 as uuidv4 } from 'uuid'; 

const Address = () => {
    const navigate = useNavigate();
    const uniqueOrderId = uuidv4();
    const TotalCart = useSelector(state => state.cart.total);
    const handleContinue = () => {
        // Validate the form data before proceeding
        if (formData.name && formData.phoneNumber && formData.houseNo &&
            formData.roadName && formData.pincode && formData.city &&
            formData.state) {
            // Create an object representing the order
            const order = {
                name: formData.name,
                phoneNumber: formData.phoneNumber,
                address: {
                    houseNo: formData.houseNo,
                    roadName: formData.roadName,
                    pincode: formData.pincode,
                    city: formData.city,
                    state: formData.state,
                    nearByLocation: formData.nearByLocation,
                },
                total: TotalCart,
                orderId: uniqueOrderId,                
            };
            // Get existing orders from local storage
            const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];

            // Add the new order to the list
            const updatedOrders = [...existingOrders, order];

            // Store the updated list in local storage
            localStorage.setItem('orders', JSON.stringify(updatedOrders));

            navigate('/cart/address/checkout');
        } else {
            // Display an error message or highlight the missing fields
            alert('Please fill in all mandatory fields.');
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        houseNo: '',
        roadName: '',
        pincode: '',
        city: '',
        state: '',
        nearByLocation: '',
    });
// Add console logs to track the value of formData
console.log('formData:', formData);

// ...rest of your code

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({ ...prevData, [id]: value }));
    };

    // const handleContinue = () => {
    //     // Validate the form data before proceeding
    //     if (formData.name && formData.phoneNumber && formData.houseNo &&
    //         formData.roadName && formData.pincode && formData.city &&
    //         formData.state) {
    //         navigate('/cart/address/checkout');
    //     } else {
    //         // Display an error message or highlight the missing fields
    //         alert('Please fill in all mandatory fields.');
    //     }
    // };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navs />
            <section id="address-section">
                <form action="">
                    <h1>Select Delivery Address</h1>
                    <hr />
                    <div>
                        <h2>Contact Details</h2>
                    </div>
                    <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <div>
                        <h2>Address Details</h2>
                    </div>
                    <input
                        type="text"
                        placeholder="House no./ Building Name"
                        id="houseNo"
                        value={formData.houseNo}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Road Name/ Area/ Colony"
                        id="roadName"
                        value={formData.roadName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Pincode"
                        id="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="City"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="State"
                        id="state"
                        value={formData.state}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Near by Location"
                        id="nearByLocation"
                        value={formData.nearByLocation}
                        onChange={handleChange}
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
    );
};

export default Address;
