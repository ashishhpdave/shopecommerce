import React, { useContext } from "react";
import {ShopContext} from '../Context/ShopContext'
import { useParams } from "react-router-dom";
import Breadcrum from "../Commponents/Breadcrums/Breadcrum";
import ProductDisplay from "../Commponents/ProductFolder/ProductDisplay";
import DescriptionBox from "../Commponents/DescriptionBox/DescriptionBox";
const Product = () =>{
    const {all_product} = useContext(ShopContext)
    const {productID} = useParams()
    const product = all_product.find((e)=> e.id === Number(productID))
    return(
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox />
        </div>
    )
    
}

export default Product