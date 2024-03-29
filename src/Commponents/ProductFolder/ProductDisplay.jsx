import React from "react";
import './ProductDisplay.css'
import start_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) =>{
    const {product} = props;
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                    <div className="productdisplay-img-list">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                    <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />

                    </div>
            </div>
            <div className="productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="productdisplay-right-star">
                        <img src={start_icon} alt="" />
                        <img src={start_icon} alt="" />
                        <img src={start_icon} alt="" />
                        <img src={start_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">${product.old_price}</div>
                        <div className="productdisplay-right-price-new">${product.new_price}</div>
                    </div>
                    <div className="prouductdisplay-right-description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat a at ut ad, quo officiis neque maxime accusamus quaerat
                        et impedit ea numquam doloremque eius, sequi facere fuga corrupti tenetur!
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-size">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button>ADD TO CART</button>
                    <p className="productdisplay-right-category"><span>Category : </span>Women, Tshirt, Crop Top</p>
                    <p className="productdisplay-right-category"><span>Tags : </span>Mordern , Latest</p>
                </div>
        </div>
    )
}
export default ProductDisplay