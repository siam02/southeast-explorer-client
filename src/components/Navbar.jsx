import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { FaRegCircleUser } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Logged out success!');
            })
            .catch(error => {
                toast.error(error.messagee);
            })
    }

    const navLinkClass = "hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium";

    const navLinks = <>
        <li><NavLink className={navLinkClass} to="/">Home</NavLink></li>
        <li><NavLink className={navLinkClass} to="/all-tourists-spot">All Tourists Spot</NavLink></li>
        <li><NavLink className={navLinkClass} to="/add-tourists-spot">Add Tourists Spot</NavLink></li>
        <li><NavLink className={navLinkClass} to="/my-list">My List</NavLink></li>
    </>

    return (
        <div className="bg-indigo-600 text-white">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black dark:text-gray-300 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-white font-bold text-lg">Southeast Explorer</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-10 text-white menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {
                        user ?
                            <div className="flex gap-2 items-center">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn rToolTip btn-ghost btn-circle avatar !flex">
                                        <div className="w-10">
                                            {
                                                user.photoURL ?
                                                    <img className="rounded-full" src={user.photoURL} />
                                                    :
                                                    <FaRegCircleUser className="w-10 text-blue-600 h-10" />
                                            }
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 text-black dark:text-gray-300 rounded-box w-52">
                                        <li>
                                            <Link to="/countries" className="">All Countries</Link>
                                        </li>
                                        <li>
                                            <button onClick={handleSignOut} className="">Sign Out</button>
                                        </li>
                                    </ul>
                                </div>
                                <Tooltip anchorSelect=".rToolTip" place="bottom">
                                    {user.displayName ?? 'User name not set'}
                                </Tooltip>
                            </div>
                            :
                            <div className="flex gap-3">
                                <Link to="/login" className="btn btn-primary ">Login</Link>
                                <Link to="/register" className="btn btn-secondary">Register</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;