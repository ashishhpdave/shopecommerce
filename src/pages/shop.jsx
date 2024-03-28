import React from "react";
import Hero from "../Commponents/Assets/Hero/Hero";
import Popular from "../Commponents/Assets/Popular/Popular";
import Offers from "../Commponents/Offers/Offers";
import NewCollections from "../Commponents/NewCollections/NewCollections";
import NewsLetter from "../Commponents/NewsLetter/NewsLetter";

const Shop = () =>{
    return(
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}

export default Shop