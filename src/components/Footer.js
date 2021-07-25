import React from 'react'
import "./CSS/Footer.css"
import facebookLogo from "./Images/facebook_white_24dp.svg"


function Footer() {
    return (
        <div className="footer">
            <div className="footer-text">
                <span>Home |</span>
                <span> Terms and Conditions |</span>
                <span> Collection Statement |</span>
                <span> Help |</span>
                <span> Manage Account</span>
                <div className="copyright">
                    <span>Copyright &#169; 2016 DEMO Streaming. All Rights Reserved.</span>
                </div>
            </div>
            <div className="footer-logo">
                <div className="left-logo">
                    <img src={facebookLogo} />
                    <img style={{ borderRadius: "50%", width:37, height:37 }} src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png" />
                    <img style={{ borderRadius: "20%", width:36, height:36 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fncVu5iQD163IL1n-RnytyIdqyxCQOccGQ&usqp=CAU" />
                </div>
                <div className="right-logo">
                    <img style={{width:140, height:140, marginTop:-40}} src="http://assets.stickpng.com/thumbs/5a902db97f96951c82922874.png" />
                    <img style={{width:150, height:70, marginTop:-5}} src="https://pocono967.com/wp-content/uploads/sites/7/2018/10/Google-Play-Store-Logo.png" />
                    <img style={{width:140, height:50, borderRadius:8, marginTop:5}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Get_it_from_Microsoft_Badge.svg/1280px-Get_it_from_Microsoft_Badge.svg.png" />
                </div>
            </div>
        </div>
    )
}

export default Footer
