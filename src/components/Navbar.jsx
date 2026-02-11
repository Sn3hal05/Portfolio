import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineMail,
  HiOutlineCode
} from "react-icons/hi";

function Navbar(){
    return(
        
            <nav>
                <div className="nav-container">
                <ul>
                    <li><a href="#home">
                        <HiOutlineHome className="nav-icon"/>Home</a></li>
                    <li><a href="#about"> <HiOutlineUser className="nav-icon"/>About</a></li>
                    <li><a href="#projects">
                        <HiOutlineBriefcase className="nav-icon"/>Projects</a></li>
                    <li><a href="#skills">
                        <HiOutlineCode className="nav-icon"/>Skills</a></li>
                    <li><a href="#contact">
                        <HiOutlineMail className="nav-icon"/>Contact</a></li>
                </ul>
                </div>
            </nav>
        
    );

}
export default Navbar;