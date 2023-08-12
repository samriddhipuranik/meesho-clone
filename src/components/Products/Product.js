import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './productDetails.css'
import ProductData from '../../ProductData';


const Product = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setData(ProductData);
    }, [])

    return (
        <div className="big-box">
            {/* <div className="filter-area">
                <div className="select-container">
                    <select
                    // value={selectedPrice}
                    // onChange={handlePriceChange}
                    >
                        <option value="">All</option>
                        <option value="50">50+</option>
                        <option value="100">100+</option>
                        <option value="150">150+</option>
                        <option value="200">200+</option>
                    </select>
                </div>
                
            </div> */}
            <div className="each-item-wrapper">
                {
                    data.map((item, id) => {
                        return (
                            <div key={id} className="productMain-box">
                                <Link style={{ textDecoration: 'none' }} to={`/product/${item.id}`}>
                                    <div className="product-box">
                                        <div className="product-img-box">
                                            <img src={item.thumbnail} alt="img" />
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content-one">
                                                <span className="product-span">
                                                    <p className="product-title">{item.title}</p>
                                                    <div className="span-div">
                                                        <h5 className="pro-price">
                                                            ₹ {item.price}
                                                            <span className="onwards">&nbsp; Onwards</span>
                                                        </h5>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="delivery">
                                                <div className="delivery-box">
                                                    <span className="delivery-text">
                                                        free Delivery
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="rating-box">
                                                <div className="rating-content">
                                                    <span className="rating1" style={{ backgroundColor: item.rating >= 4.1 ? " #23bb75" : "rgb(244, 182, 25) " }}>{item.rating}<FaStar className="star" size={15} /></span>
                                                    <span className="review">{item.review} Reviews</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product;

