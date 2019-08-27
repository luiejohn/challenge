import React from 'react'
import { withRouter } from 'react-router-dom';
import './ItemPage.scss'

import { Carousel } from 'react-responsive-carousel';
import shirt1 from '../../../assets/images/images-shirt11.png';
import shirt2 from '../../../assets/images/images-shirt12.png';
import shirt3 from '../../../assets/images/images-shirt13.png';


const ItemPage = (props) => {
    // console.log(props);
    return (
        <div style={{backgroundColor:'#f7f7f7', padding: '2rem'}}>


            <div className="container-center" >
                <div className="item">
                    <div className="item__image">
                        {/* <Carousel autoPlay showArrows={false} showStatus={false} infiniteLoop showThumbs={true} interval={5000}>
                            <div >
                                <img src={shirt1} alt="banner1"/>
                                <p className="legend">Legend 1</p>
                            </div>
                            <div >
                                <img src={shirt2} alt="banner2"/>
                                <p className="legend">Legend 2</p>
                            </div>
                        </Carousel> */}
                    </div>

                    <div className="item__details">
                        <div className="item__details__location">
                            Home - All Categories - Men's Clothing &amp; Accessories
                        </div>
                        <div> Stars </div>

                        <div>
                            Super Oversized T-shirt With Raw Sleeves In Brown
                        </div>
                        <div>$13.99</div>
                        <div>
                            Color
                        </div>
                        <div>
                            Size
                        </div>
                        <div>
                            Quantity
                        </div>
                        <div>
                            <button className="btn-md btn-primary">Add to Cart</button>
                            <button className="btn-md btn-secondary">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
                <div className="prodrev">
                    <div className="prodrev__review">
                        <h2>Product reviews</h2>
                        <div className="prodrev__review__user">
                            <div>Stars</div>
                            <div>Name</div>
                            <div>hours ago</div>
                        </div>

                        <div className="prodrev__review__comment">
                            <div className="prodrev__review__comment-review">
                                asdasdsadas
                            </div>
                            <div className="prodrev__review__comment-react">
                                asdsa
                            </div>
                        </div>
                    </div>

                    <div className="addrev">
                        <h2>Add a Review</h2>
                    </div>

                </div>

            </div>

            <div className="itemsuggest">
                asds

            </div>

        </div>
    )
}

export default withRouter(ItemPage)
