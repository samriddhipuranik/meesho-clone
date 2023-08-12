import React, { useEffect } from 'react'
import { FaStar } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import './productDetails.css'
import ProductData from '../../ProductData';
import Navs from '../Navbar/Navs';

const SearchProduct = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('term');
    const filteredData = ProductData.filter(
        (item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <>
            <Navs />
            {
                filteredData.length > 0 ? (
                    <div className="big-box2">
                        <div className="each-item-wrapper">
                            {
                                filteredData.map((item, id) => {
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
                ) : (
                    <div className="noResultFound">
                        <img src={"https://www.meesho.com/assets/Search/no_results.svg"} alt="" />
                        <h3>No matching products found.</h3>
                        <p>Try searching for something else.</p>
                    </div>
                )
            }

        </>
    )
}



export default SearchProduct
