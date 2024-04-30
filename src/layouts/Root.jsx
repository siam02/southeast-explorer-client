import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <main className="max-w-7xl min-h-screen xl:p-0 lg:p-6 p-4 mx-auto">
                <Outlet></Outlet>
                <ToastContainer />
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;