import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = ({ showLogo }) => {
    return (
        <div className='Navbar'>
            {showLogo && (
                <Link style={{ textDecoration: "none", color: "inherit" }} to="/" >
                    <div className="NavLogo">
                        <img src="https://www.letzstepin.com/logo13.png" alt="kunalborkar2001" />
                    </div>
                </Link>
            )}
            <div className="NavMid">

                <Link style={{ textDecoration: "none", color: "inherit" }} to="/" >
                    <button>
                        <span>Home</span>
                    </button>
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }}  >
                    <button>
                        <span>About Us</span>
                    </button>
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }}  >
                    <button>
                        <span>Contact Us</span>
                    </button>
                </Link>



            </div>
            <div>

            </div>
        </div>
    )
}

export default Navbar
