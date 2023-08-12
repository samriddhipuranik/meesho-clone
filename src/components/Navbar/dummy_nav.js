import React from 'react'
import { Link } from 'react-router-dom'
import { listItems, data } from "./data";
import { useState } from "react";
import './Navbar.css';
import './Nav_bottom.css';
// import { useDispatch } from 'react-redux'
// import { setCategory } from '../../Redux/Reducers/categorySlice'

const Navs = () => {

    let [index, setIndex] = useState(8);
    const mouseOver = (e) => {
        e.currentTarget.classList.add("height");
      };
    
      const mouseOut = (e) => {
        e.currentTarget.classList.remove("height");
      };
    // const dispatch = useDispatch();

    // const handleCategoryClick = (category) => {
        //     dispatch(setCategory(category))
    // }
    
    return (
        <div >
            <nav className="hide-on-small">
<section id="bottom" onMouseOver={mouseOver} onMouseOut={mouseOut}>
          <ul>
            {listItems.map((i, index) => (
              <Link to={`/products/${i}`} key={index}>
                <li key={index} id={index} onMouseOver={() => setIndex(index)}>
                  {i}
                </li>
              </Link>
            ))}
          </ul>
          <article onMouseOut={mouseOut}>
            {data[index].map((items, i) => (
              <div key={i}>
                {items.map((item, ind) => (
                  <Link to={`/products/${listItems[index]}`}>
                    <p key={ind} className={ind === 0 ? "pink-para" : ""}>
                      <Link to={`products/${listItems[index]}/${items[ind]}`}>
                        {item}
                      </Link>
                    </p>
                  </Link>
                ))}
              </div>
            ))}
          </article>
        </section>
        </nav>
        </div>

    )
                }
            {/* // <nav className="hide-on-small">
            //     <ul>
            //         <li><Link to="/product/category" onClick={() => handleCategoryClick('women-ethnic')}>Women Ethnics</Link></li>
            //         <li><Link to="/product/category" onClick={() => handleCategoryClick('women-western')}>Women Western</Link></li>
            //         <li><Link to="/product/category" onClick={() => handleCategoryClick('men')}>Men</Link></li>
            //         <li><Link to="/product/category" onClick={() => handleCategoryClick('kids')}>Kids</Link></li>
            //         <li><Link to="/product/category" onClick={() => handleCategoryClick('home')}>Home & Kitchen</Link></li>
            //         <li><Link to="/product/category" onClick={() => handleCategoryClick('beauty')}>Beauty & Health</Link></li>
            //         <li><Link to="/product/category" onClick={() => handleCategoryClick('jewellery')}>Jewellery & Accessories</Link></li>
            //         <li><Link to="/product/category" onClick={() => handleCategoryClick('bags')}>Bags & Footwear</Link></li>
            //         <li><Link to="/product/category" onClick={() => handleCategoryClick('electronics')}>Electronics</Link></li>
            //     </ul>
            // </nav> */}
    

export default Navs
