import React from 'react'
import freeDelivery from '../Images/freeDelivery.svg'
import cod from '../Images/cod.svg'
import Easyreturn from '../Images/easyReturns.svg'
import playstore from '../Images/playStore.png'
import homeBanner from '../Images/home-banner.jpg'
import topCatLeft from '../Images/topCatLeft.jpg'
import topCatRightOne from '../Images/topCatRightOne.jpg'
import topCatRightTwo from '../Images/topCatRightTwo.jpg'
import homeDecor from '../Images/essential/homeDecor.jpg'
import kitchenAppliances from '../Images/essential/kitchenAppliances.jpg'
import healthCare from '../Images/essential/healthCare.jpg'
import homeDecorButton from '../Images/essential/homeDecorButton.jpg'
import kitchenAppliancesButton from '../Images/essential/kitchenAppliancesButton.jpg'
import healthCareButton from '../Images/essential/healthCareButton.jpg'
import essentialButton from '../Images/essential/essentialButton.jpg'
import './HomeAds.css'

const HomeAds = () => {
    return (
        <div className='section'>
            <div className="container">
                {/* home container one  */}
                <div className="inner-content">
                    <div className="left-content">
                        <h1>Lowest Prices <br />
                            Best Quality Shopping</h1>
                        <div className="offer">
                            <div className="free-delivery">
                                <img src={freeDelivery} className='img-icon' alt='delivery' />
                                <span className='text'>Free Delivery</span>
                            </div>
                            <div className="cash-on-delivery">
                                <img src={cod} className='img-icon' alt='cod' />
                                <span className='text'>Cash on Delivery</span>
                            </div>
                            <div className="easy-return">
                                <img src={Easyreturn} className='img-icon' alt='return' />
                                <span className='text'>Easy Return</span>
                            </div>
                        </div>
                        <div className="button-top">
                            <img src={playstore} className='btn-img' alt='playstore' />
                            <span className='btn-text'>Download the Meesho App</span>
                        </div>
                    </div>
                    <div className="right-content">
                        <img src={homeBanner} className='' alt='banner' />

                    </div>
                </div>
                {/* home container one  */}

                {/* home container two  */}
                <div className="topCategoriesTitle">
                    <div className="lineLeft"></div>
                    <span>Top Categories to choose from</span>
                    <div className="lineRight"></div>
                </div>

                <div className="topCategoriesMain">
                    <div className="topCatLeft">
                        <img src={topCatLeft} alt="topcatleft" />
                    </div>
                    <div className="topCatRight">
                        <div className="topCatRightOne">
                            <img src={topCatRightOne} alt="topcatleft" />
                        </div>
                        <div className="topCatRightTwo">
                            <img src={topCatRightTwo} alt="topcatleft" />
                        </div>
                    </div>
                </div>
                {/* home container two  */}

                {/* home essestial  */}

                <div className="essentialMain">
                    <div className="essentialLeft">
                        <div className="viewButton">
                            <img src={essentialButton} alt="essential" />
                        </div>
                    </div>
                    <div className="essentialRight">
                        <div className="essentialRightImg">
                            <img src={homeDecor} alt="decor" className='one' />
                            <img src={homeDecorButton} alt="decorButton" className='two' />
                        </div>
                        <div className="essentialRightImg">
                            <img src={kitchenAppliances} alt="decor" className='one' />
                            <img src={kitchenAppliancesButton} alt="decorButton" className='two' />
                        </div>
                        <div className="essentialRightImg">
                            <img src={healthCare} alt="decor" className='one' />
                            <img src={healthCareButton} alt="decorButton" className='two' />
                        </div>
                    </div>
                </div>

                {/* home essestial  */}

                {/* new styles  */}

                <div className=" newStyleMain">
                    <div className="essentialLeft">
                        <div className="viewButton">
                            <img src={essentialButton} alt="essential" />
                        </div>
                    </div>
                    <div className="essentialRight">
                        <div className="essentialRightImg">
                            <img src={homeDecor} alt="decor" className='one' />
                            <img src={homeDecorButton} alt="decorButton" className='two' />
                        </div>
                        <div className="essentialRightImg">
                            <img src={kitchenAppliances} alt="decor" className='one' />
                            <img src={kitchenAppliancesButton} alt="decorButton" className='two' />
                        </div>
                        <div className="essentialRightImg">
                            <img src={healthCare} alt="decor" className='one' />
                            <img src={healthCareButton} alt="decorButton" className='two' />
                        </div>
                    </div>
                </div>


                {/* new styles  */}
            </div>
        </div>
    )
}

export default HomeAds
