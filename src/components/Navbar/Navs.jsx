import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useDispatch } from 'react-redux'
import { setCategory } from '../../Redux/Reducers/categorySlice'

const Navs = () => {

    const dispatch = useDispatch();

    const handleCategoryClick = (category) => {
        dispatch(setCategory(category))
    }
    return (
        <div>

            <nav className="hide-on-small">
                <ul>
                    <li><Link to="/product/category" onClick={() => handleCategoryClick('women-ethnic')}>Women Ethnics</Link></li>
                    <li><Link to="/product/category" onClick={() => handleCategoryClick('women-western')}>Women Western</Link></li>
                    <li><Link to="/product/category" onClick={() => handleCategoryClick('men')}>Men</Link></li>
                    <li><Link to="/product/category" onClick={() => handleCategoryClick('kids')}>Kids</Link></li>
                    <li><Link to="/product/category" onClick={() => handleCategoryClick('home')}>Home & Kitchen</Link></li>
                    <li><Link to="/product/category" onClick={() => handleCategoryClick('beauty')}>Beauty & Health</Link></li>
                    <li><Link to="/product/category" onClick={() => handleCategoryClick('jewellery')}>Jewellery & Accessories</Link></li>
                    <li><Link to="/product/category" onClick={() => handleCategoryClick('bags')}>Bags & Footwear</Link></li>
                    <li><Link to="/product/category" onClick={() => handleCategoryClick('electronics')}>Electronics</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navs