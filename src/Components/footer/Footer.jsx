import './Footer.css'
import instagram from '../../assets/image/instagram.png'
import youtube from '../../assets/image/youtube.png'
import twitter from '../../assets/image/twitter.png'
import facebook from '../../assets/image/facebook.png'

const Footer = () => {
    return ( <div className="icon-footer-container">
    <a href="https://www.facebook.com" target="_blank">
    <img className='footer-icons' src={facebook} alt="footer-icons"  />
    </a>
    <a href="https://www.instagram.com" target="_blank">
    <img className='footer-icons' src={instagram} alt="footer-icons" />
    </a>
    <a href="https://www.twitter.com" target="_blank">
    <img className='footer-icons' src={twitter} alt="footer-icons" />
    </a>
    <a href="https://www.youtube.com" target="_blank">
    <img className='footer-icons' src={youtube} alt="footer-icons" />
    </a>
    <div className="link-container">
        <a href="" className="link-text">Audio Discription</a>
        <a href="" className="link-text">Help Center</a>
        <a href="" className="link-text">Gift Cards</a>
        <a href="" className="link-text">Media Center</a>
        <a href="" className="link-text">Investor Relations</a>
        <a href="" className="link-text">Jobs</a>
        <a href="" className="link-text">NetflixClone Shop</a>
        <a href="" className="link-text">Terms of Use</a>
        <a href="" className="link-text">Privacy</a>
        <a href="" className="link-text">Legal Notices</a>
        <a href="" className="link-text">Cookie Preferences</a>
        <a href="" className="link-text">Impressum</a>
        <a href="" className="link-text">Contact Us</a>
        <a href="" className="link-text">Ad Choices</a>
    </div>
    <button className="service-code-btn">Service Code</button>
    <div className="end-text-container">
    <p className='footer-end-text'>2023 Netflix-Clone by M.Hossein Siahkamari</p>
    <a href="https://github.com/HosseinSiahkamari/netflix-clone" target="_blank" className='footer-end-text' id='end-text'>https://github.com/HosseinSiahkamari/netflix-clone</a>
    </div>
    </div> );
}
 
export default Footer;

