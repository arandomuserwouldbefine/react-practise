
import "./navbar.css"

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <a href="#">Logo</a>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>
                            <a href="#"> Home </a>
                        </li>
                        <li>
                            <a href="/services"> Services </a>
                        </li>
                        <li>
                            <a href="/about"> About </a>
                        </li>
                        <li>
                            <a href="/contact"> Contact </a>
                        </li>
                    </ul>
                </div>
                <div className="nav-button">
                    <div className="anim-layer" />
                    <a href="#">Sign Up</a>
                </div>
                <div id="hamburger-menu">☰</div>
            </div>
            <div id="mobile-menu">
                <div className="mobile-nav-items">
                    <ul>
                        <li>
                            <a href="#"> Home </a>
                        </li>
                        <li>
                            <a href="#"> Services </a>
                        </li>
                        <li>
                            <a href="#"> About </a>
                        </li>
                        <li>
                            <a href="#"> Contact </a>
                        </li>
                        <li>
                            <a href="#"> Home </a>
                        </li>
                    </ul>
                </div>
                <div className="mobile-nav-button">
                    <div className="anim-layer" />
                    <a href="#">Sign Up</a>
                </div>
                <div id="hamburger-cross">✖</div>
            </div>
        </>

    )
}