import React from 'react';
import { Coffee } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FacebookRounded } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { YouTube } from '@mui/icons-material';
import "./Footer.css";
import { useNavigate } from 'react-router-dom';

//Lottie animation
import Lottie from "lottie-react";
import ScrollUp from "../images/scroll-up.json";

const Footer = ({homeSection}) => {
  const handleCoffeeClick = () => {
    window.location.href = "https://www.buymeacoffee.com/aishwaryaparab";
  }

  const scrollUp = (ref) => {
    window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth"
    })
  }

  return (
    <div className="footer">
        <div className="professional-info">
            <div onClick={handleCoffeeClick} className="coffee-section">
                <p>Buy Me a Coffee</p>
                <Coffee />
            </div>
            
            <div className="info">
                <div className="info-item">
                    <LocationOnIcon className="info-icon" />
                    <p>Goa, India</p>
                </div>

                <div className="info-item">
                    <EmailIcon className="info-icon" />
                    <p>aishwaryaparab1@gmail.com</p>
                </div>

                <div className="info-item">
                    <GitHubIcon className="info-icon" />
                    <p>GitHub Profile</p>
                </div>
            </div>
        </div>

        <div className="useful-links">
            <span className="footer-heading">Useful Links</span>
            
            <p>About Me</p>
            <p>Contact Me</p>
            <p>Download CV</p>
            <p>View Projects</p>
            <p>Testimonials</p>
            <p>Buy Me a Coffee</p>
        </div>

        <div className="follow-up">
            <div className="newsletter">
                <span className="footer-heading">Newsletter</span>

                <div className="newsletter-input">
                    <EmailIcon className="email-icon" />
                    <input type="text" />
                    <ArrowForwardIcon className="arrow-icon" />
                </div>
            </div>

            <div className="socials">
                <span className="footer-heading">Let's catch up on</span>
                <div className="social-icons">
                    <FacebookRounded className="social-icon" />
                    <LinkedIn className="social-icon" />
                    <Twitter className="social-icon" />
                    <YouTube className="social-icon" />
                </div>
            </div>

            <div className="scroll-up">
                <Lottie onClick={() => scrollUp(homeSection)} animationData={ScrollUp} loop={true} />
            </div>

        </div>
         
    </div>
  )
}

export default Footer