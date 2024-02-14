import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='Navbar'>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/" ><div className="NavLogo">
                <img src="https://www.letzstepin.com/logo13.png" alt="kunalborkar2001" />
            </div>
            </Link>
            <div className="NavMid">

                <Link style={{ textDecoration: "none", color: "inherit" }} to="/" >
                    <p>Home</p>
                </Link>
                
                <p>About Us</p>
                <p>Contact Us</p>

            </div>
            <div>

            </div>
        </div>
    )
}

export default Navbar
