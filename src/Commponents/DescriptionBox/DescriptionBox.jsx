import React from "react";
import './DescriptionBox.css'
const DescriptionBox = () =>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="decriptionbox-nav-box">Description</div>
                <div className="decriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate pariatur, 
                    ratione fugiat ex accusamus veniam. A corporis ut recusandae reiciendis magni magnam, 
                    commodi nesciunt et maiores, nemo ipsum sint assumenda!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate pariatur, 
                    ratione fugiat ex accusamus veniam. A corporis ut recusandae reiciendis magni magnam, 
                    commodi nesciunt et maiores, nemo ipsum sint assumenda!</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet
                        nostrum ipsa voluptas dolorum asperiores natus voluptatem voluptate at, 
                        nemo tempore illum explicabo error, qui magni delectus!
                    </p>
            </div>
        </div>
    )
}

export default DescriptionBox