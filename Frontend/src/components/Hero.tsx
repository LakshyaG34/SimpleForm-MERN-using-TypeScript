import React from "react"
import "./demo.css"

const Hero = () =>
{
    return(
        <div className = "form-header">
            <div className="form-hero">
                <form className="form-data">
                        <input placeholder="Enter your Name"/>
                        <input placeholder="Enter your email"/>
                        <input placeholder="Enter your Password"/>
                        <input placeholder="Confirm Password"/>
                </form>
            </div>
        </div>
    )
}

export default Hero;