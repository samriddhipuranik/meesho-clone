import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import ProductData from '../../ProductData';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../Redux/Reducers/productDetailSlice';
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { Section } from "./Styled-Product";
import Navs from '../Navbar/Navs';
import { addToCart, updateOrderTotal } from '../../Redux/Reducers/cartSlice';
// import meesho_logo from '../Images/meesho logo.png'


const ProductDetails = () => {

    const authentication = JSON.parse(localStorage.getItem("user") || null);

    const { id } = useParams();
    const product = useSelector(state => state.productDetails.product);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const [productDetails, setProductDetails] = useState(null);
    let [image, setImage] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductDetails = () => {
            const productDetails = ProductData.find(item => item.id === parseInt(id));
            dispatch(setProduct(productDetails));
            setImage(productDetails.images[0]);
            setProductDetails(productDetails);
        };
        window.scrollTo(0, 0);

        fetchProductDetails();
    }, [dispatch, id]);

    const handleAddCart = () => {
        if (productDetails) {
            dispatch(addToCart({
                ...productDetails,
                quantity: 1
            }));
        }
    };




    const handleBuyNow = () => {
        if (authentication) {
            const orderTotal = product.price;
            dispatch(updateOrderTotal(orderTotal))
            navigate('/cart/address');
        }
        else {
            navigate("/register")
        }
    }



    if (!product) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <Navs />
            <Section id="single-product">
                <article id="product-article-1">
                    {product.images.map((i) => (
                        <img key={i} src={i} alt="small-images" onClick={() => setImage(i)} />
                    ))}
                </article>
                <article id="product-article-2">
                    <img src={image} alt="" id="main-img" />
                    <hr />
                    <div>
                        <button id='cart-button' onClick={handleAddCart}>
                            <FaShoppingCart />
                            Add to Cart
                        </button>
                        <button id='buy-now-button' onClick={handleBuyNow}>
                            <FaShoppingCart />
                            Buy Now
                        </button>
                    </div>

                </article>
                <article id="product-article-3">
                    <div id="price">
                        <h2>{product.title}</h2>
                        <h3 className="price">
                            ₹{product.price} <span className="aprice">₹ {product.prevPrice}</span>{" "}
                            <span className="discount">
                                {product.discountPercentage} % off
                            </span>
                        </h3>
                        <h4 className="rating" >
                            <span >
                                {product.rating} <FaStar />
                            </span>{" "}
                            {product.review} Reviews
                        </h4>
                        <p><span>Free Delivery</span></p>
                    </div>
                    <div id="size">
                        <p>Select Size</p>

                        <button
                style={{ backgroundColor: selectedSize === 'S' ? '#e272bd' : '' }}
                onClick={() => handleSizeSelect('S')}
            >S</button>
                        <button
                style={{ backgroundColor: selectedSize === 'M' ? '#e272bd' : '' }}
                onClick={() => handleSizeSelect('M')}
            >M</button>
                        <button
                style={{ backgroundColor: selectedSize === 'L' ? '#e272bd' : '' }}
                onClick={() => handleSizeSelect('L')}
            >L</button>
                        <button
                style={{ backgroundColor: selectedSize === 'XL' ? '#e272bd' : '' }}
                onClick={() => handleSizeSelect('XL')}
            >XL</button>
                        <button
                style={{ backgroundColor: selectedSize === 'XXL' ? '#e272bd' : '' }}
                onClick={() => handleSizeSelect('XXL')}
            >XXL</button>
                    </div>
                    <div id="details">
                        <p>Product Details</p>

                        <p>Sizes: </p>
                        <p>S (Chest Size : 38 in, Length Size: 27 in)</p>{" "}
                        <p>M (Chest Size : 40 in, Length Size: 27.5 in) </p>
                        <p>L (Chest Size : 42 in, Length Size: 28 in)</p>
                        <p>XL (Chest Size : 44 in, Length Size: 28.5 in)</p>
                        <p>Description :{product.description}</p>
                        <p>More Information</p>
                    </div>


                </article>
            </Section>
        </>
    )

}
export default ProductDetails
