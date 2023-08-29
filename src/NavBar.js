// import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Abdo Blog</h1>
            <div className="links">
                {/* <Link>Hala</Link> */}
                <a href="/" >Home</a>
                <a href="/create" className= "Button">New Blog</a>
            </div>

        </nav>
     );
}
 
export default NavBar;