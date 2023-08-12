import React, {  useState } from 'react'
import meesho from "../Images/meesho.png";
import search from "../Images/search.png";
import mobile from "../Images/mobile.png";
import user from "../Images/user.png";
import Badge from '@mui/material/Badge';
import { GiShoppingCart } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import './Navbar.css'
import { logout } from '../../Redux/Reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    const authentication = JSON.parse(localStorage.getItem("user") || null);
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cart.list);


    // dropdown

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    // dropdown

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleUser = () => {
        if (authentication) {
            dispatch(logout());
            handleClose()

        }
        else {
            navigate("/register")
            handleClose()
        }

    }

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?term=${searchTerm}`);
        setSearchTerm('');
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div name="home" className="pos">
            <header className="headder">
                <div className="headerLeft">
                    <div className="logoContainer">
                        <img src={meesho} onClick={() => navigate("/")} alt="img" />
                    </div>
                    <div className="searchInputContainer">
                        <div className="searchIcon">
                            <img src={search} alt="img" />
                        </div>
                        <form onSubmit={handleSearch}>
                            <input
                                type="search"
                                placeholder="Try Saree, Kurti or Search by Product Code"
                                className="inputSearch"
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                        </form>
                        <div className="inputCloseSearch">
                        </div>
                    </div>
                </div>

                <div className="headerRight">
                    <div className="downloadContainer">
                        <div className="mobileIcon">
                            <img src={mobile} alt="img" />
                        </div>
                        <p >
                            Download App
                        </p>

                        {authentication && (
                            <div >
                                <div className="downloadHoverBtnContainer">
                                    <h3>Download From</h3>
                                    <Link to="#" className="downloadBtn">
                                        <img src="https://images.meesho.com/images/pow/playstore-icon-big.webp" alt="img" />
                                    </Link>
                                    <Link to="#" className="downloadBtn">
                                        <img src="https://images.meesho.com/images/pow/appstore-icon-big.webp" alt="img" />
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>


                    <div className="becomeSupplierContainer">
                        <p>Become a Supplier</p>
                    </div>

                    <div className="profileAndCart">
                        <div className="profileContainer" id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <div className="profileIcon">
                                <img src={user} alt="img" />
                            </div>
                            <p>Profile</p>
                        </div>
                        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >

                            <div className="profileCard">
                                <h3>Hello {authentication ? authentication.username : "user"}</h3>
                                <h5>  Welcome to Meesho</h5>
                                <button className="login_btn" onClick={handleUser}> Sign {authentication ? "out" : "up"}</button>
                            </div>

                        </Menu>
                        <div className="CartContainer" onClick={() =>
                            authentication ?
                                navigate("/cart") : navigate('/register')}>
                            <div className="CartIcon">
                            <Badge badgeContent={cartList ? cartList.length : 0} color="secondary">
                                    <GiShoppingCart size={28} />
                                </Badge>
                            </div>
                            <p>Cart</p>
                        </div>
                    </div>
                </div>

            </header >

        </div >
    );
}

export default Navbar