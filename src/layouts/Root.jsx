import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <main className="max-w-7xl min-h-screen lg:p-0 p-6 mx-auto">
                <Outlet></Outlet>
                <ToastContainer />
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;