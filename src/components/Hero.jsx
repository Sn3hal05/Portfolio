import {
    HiOutlineLocationMarker,
    HiOutlineStatusOnline,
    HiOutlineDownload,
    HiOutlineArrowNarrowRight
} from "react-icons/hi"
import {
    FaGithub,
    FaDiscord,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa"


import { RiBarChartGroupedFill } from "react-icons/ri";
RiBarChartGroupedFill
function Hero(){
    return(
        <div className="hero-container">
            <section className="text-container">
                <p className="available-tag">.Available for freelance work</p>
                <h1 >Hi, I'm Snehal Mohite</h1>
                <h2>Frontend Developer</h2>
                <p>I create beautiful, functional and user-centered digital experiences.With 2+ years of experience in web Development. I bring ideas to life through clean code and thoughtful design
                </p>
                <ul>
                    <li><HiOutlineLocationMarker className="hero-icons"/>Based in Agra</li>
                    <li><HiOutlineStatusOnline className="hero-icons"/>Availabel Now</li>
                </ul>
                <div className="buttons">
                <button><HiOutlineArrowNarrowRight className="hero-icons"/>Hire Me</button>
                <button><HiOutlineDownload className="hero-icons"/>Download CV</button>
                </div>
                <br/>
                <hr/>
                <p className="follow-icons">Follow me: 
                    <FaGithub className="hero-icons"/>
                    <FaDiscord className="hero-icons"/>
                    <FaInstagram className="hero-icons"/>
                    <FaLinkedin className="hero-icons"/>
                 </p>
            </section>
            <section className="image-sec">
                <img src="https://tse4.mm.bing.net/th/id/OIP.KPRI_sr0VrfBx-9C-3xDGgHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"/>
            </section>

        </div>

    );
}
export default Hero;