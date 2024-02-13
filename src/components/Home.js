// functional component
import React from "react"
import '../styles/comp1.css';
import Gridcomp from "./Gridcomp";
import Lowercomp from "./Lowercomp";
import Templates from "./Templates";
import Hometemp from "./Hometemp";
import About from "./About";
import Homeaabout from "./Homeaabout";

function ComponentOne() {
    return (
        <div>
            <div className="parant">

                <div className="comp1">
                    <h1 style={{ fontSize: "60px" }}>
                        Create stunning
                    </h1>
                    <h1 style={{ fontSize: "60px" }}>
                        webpage Template
                    </h1>
                    <Paracomp />
                    <div className="buttonclass">
                        <Button1 />
                    </div>

                </div>
                <div className="img1">
                    <Image />
                </div>
            </div>
            <div className="maincomp">
                <Gridcomp />
            </div>
            <div>
                <Hometemp/>
            </div>
            <Lowercomp/>
            

        </div>




    )
} 
export default ComponentOne;

{/*class component
class ComponentTwo extends React.Component{
    render(){
        return(
            <h2>
                Class component
            </h2>
        )
    }
}
//arrow function 
const ComponentThree =() => {
    return(
        <h1>
            Arrow function
        </h1>
    )
}*/}
function Paracomp() {
    return (
        <div className="paracomp">
            <p>
                Our loding page template works on all devices, so
            </p>
            <p>
                you only have to set it up once, and get beautiful
            </p>
            <p>
                results forever.
            </p>
        </div>
    )
}
function Button1() {
    return (
        <div className="SS flex items-center gap-2">
            <button className="bt1 p-2">Request Demo  +</button>
            <button className="bt2 p-2" >Explore Product</button>
        </div>
    )
}
function Image() {
    return (
        <div>
            <img src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGludGVydmlld3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' width="500" />
        </div>
    )
}