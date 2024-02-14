import { Link } from "react-router-dom";
import "./Navbar.css";
import NavDrop from "../NavDrop/NavDrop";



const Navbar = ({ showLogo, showCatagory }) => {


    return (
        <div className="Navbar">
            {showLogo && (
                <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                    <div className="NavLogo">
                        <img src="https://www.letzstepin.com/logo13.png" alt="kunalborkar2001" />
                    </div>
                </Link>
            )}
            <div className="NavMid">
                <div className="NavHome">
                    <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                        <button>
                            <span>Home</span>
                        </button>
                    </Link>
                </div>
                <div className="NavAbout">
                    <Link style={{ textDecoration: "none", color: "inherit" }} >
                        <button>
                            <span>About Us</span>
                        </button>
                    </Link>
                </div>
                <div className="NavContact">
                    <Link style={{ textDecoration: "none", color: "inherit" }} >
                        <button>
                            <span>Contact Us</span>
                        </button>
                    </Link>
                </div>
                {showCatagory && (
                    <NavDrop />
                )}
            </div>

        </div>
    );
};

export default Navbar;
