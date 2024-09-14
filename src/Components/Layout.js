import { Outlet, Link } from "react-router-dom";

const Layout = ()=>{
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="blogs">Employee</Link>
                </li>
                <li>
                    <Link to="contacts">Department</Link>
                </li>
                <li>
                    <Link to="movies">Movie</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    );
}
export default Layout;