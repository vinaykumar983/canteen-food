import React from 'react';
import './footer.css'
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";

function Footer(props) {
    return (
        <div className='f'>
            <div className='adc'>
            <div className='icon'>
                <IoLogoInstagram size={45}></IoLogoInstagram>
            </div>
            <div className='icon'>
                <IoLogoFacebook size={45} ></IoLogoFacebook>
            </div>
            <div className='icon'>
                <IoLogoTwitter size={45}></IoLogoTwitter>
            </div>
            </div>
            <h3>ⓒCopyrights.All rights reserved</h3>
        </div>
    );
}

export default Footer;