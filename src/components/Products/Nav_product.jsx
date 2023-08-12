import React, { useEffect } from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './productDetails.css'
import ProductData from '../../ProductData';
import { useSelector } from 'react-redux';
import Navs from '../Navbar/Navs';
import { Helmet } from 'react-helmet';
import meesho from '../Images/meesho logo.png'

const Nav_product = () => {

    // const [data, setData] = useState(ProductData);

    const selectedCategory = useSelector(state => state.category);
    const filteredData =
        selectedCategory === 'all'
            ? ProductData
            : ProductData.filter((item) => item.category === selectedCategory);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <>
            <Helmet>
                <title>{`Meesho ${filteredData.length > 0 ? filteredData[0].category : 'Not Found'}`}</title>
                <link rel="icon" type="image/png" href={meesho} />
            </Helmet>
            <Navs />
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
        </>
    )
}

export default Nav_product
