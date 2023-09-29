import './Footer.css'
import instagram from '../../assets/image/instagram.png'
import youtube from '../../assets/image/youtube.png'
import twitter from '../../assets/image/twitter.png'
import facebook from '../../assets/image/facebook.png'

const Footer = () => {
    return (
        <div className="bg-zinc-900 w-full h-fit group">
            <div className='flex pl-20'>
                <a href="https://www.facebook.com" target="_blank">
                    <img className='footer-icons' src={facebook} alt="footer-icons" />
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
            </div>
            <ul className="grid grid-cols-2 h-fit md:grid-cols-4 w-3/4 py-5 ml-20">
                <li><a href="" className="link-text py-3 hover:underline">Audio Discription</a></li>
                <li><a href="" className="link-text py-3 hover:underline">Help Center</a></li>
                <li><a href="" className="link-text py-3 hover:underline">Gift Cards</a></li>
                <li><a href="" className="link-text py-3 hover:underline">Media Center</a></li>
                <li><a href="" className="link-text py-3 hover:underline">Investor Relations</a></li>
                <li><a href="" className="link-text py-3 hover:underline">Jobs</a></li>
                <li><a href="" className="link-text py-3 hover:underline">NetflixClone Shop</a></li>
                <li><a href="" className="link-text py-3 hover:underline">Terms of Use</a></li>
                <li><a href="" className="link-text py-3 hover:underline">Privacy</a></li>
                <li><a href="" className="link-text py-3 hover:underline">Legal Notices</a></li>
                <li><a href="" className="link-text py-3 hover:underline">Cookie Preferences</a></li>
                <li><a href="" className="link-text py-3 hover:underline">Impressum</a></li>
                <li><a href="" className="link-text py-3 hover:underline">Contact Us</a></li>
                <li><a href="" className="link-text py-3 hover:underline">Ad Choices</a></li>
            </ul>
            <button className="bg-zinc-900 cursor-pointer ml-20 w-26 h-8 border-solid border-2 border-zinc-400 text-zinc-400  rounded-sm p-1 ">Service Code</button>
            <div className="w-3/5 h-12 px-2">
                <p className='text-zinc-400 whitespace-nowrap ml-20 pt-2 text-xs'>2023 Netflix-Clone by M.Hossein Siahkamari</p>
                <a href="https://github.com/HosseinSiahkamari/netflix-clone" target="_blank" className='text-zinc-400 whitespace-nowrap ml-20 text-xs' id='end-text'>https://github.com/HosseinSiahkamari/netflix-clone</a>
            </div>
        </div>);
}

export default Footer;

