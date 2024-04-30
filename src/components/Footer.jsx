import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";


const Footer = () => {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://southest-explorer-server-opbmjysgv.vercel.app/country`)
            .then(res => res.json())
            .then(data => {
                setCountries(data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                toast.error(error);
            })
    }, [])


    return (
        <div>
            <footer className="bg-gray-800 dark:bg-slate-950 md:p-10 p-5 sm:mt-10">
                <div className="flex lg:flex-row flex-col  justify-between gap-12">
                    <div className="text-white">
                        <h2 className="text-3xl font-black">Southeast Explorer</h2>
                        <p className="max-w-xl mt-4 text-slate-300">Southeast Explorer is your gateway to discovering the wonders of Southeast Asia, offering curated guides and insights into the region&apos;s rich culture, stunning landscapes, and vibrant cities.</p>
                        <div className="mt-6">
                            <div className="flex mb-2 gap-2 items-center">
                                <IoMdMail />
                                <p>info@example.com</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <IoCall />
                                <p>+8801234567891</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-800 flex gap-4 flex-wrap md:justify-right justify-between">
                        <div className="">
                            <div className="text-xs uppercase text-gray-400 font-bold mb-6">
                                About
                            </div>
                            <a
                                href="#"
                                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
                            >
                                Services
                            </a>
                            <a
                                href="#"
                                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
                            >
                                Contact Us
                            </a>
                            <a
                                href="#"
                                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
                            >
                                Terms of Service
                            </a>
                        </div>

                        <div className="">
                            <div className="text-xs uppercase text-gray-400 font-bold mb-6">
                                Countries
                            </div>
                            {
                                loading ? <div className="flex justify-center my-10"><span className="loading loading-lg loading-spinner text-indigo-600"></span></div>

                                    :

                                    <div>
                                        {
                                            countries.map(country => <Link to={`/country/${country._id}`} key={country._id} className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"> {country.country_Name} </Link>)
                                        }
                                    </div>
                            }
                        </div>

                        <div className="md:w-auto gap-3 w-full flex items-center flex-col">
                            <div className="text-xs uppercase text-gray-400 font-bold mb-3">
                                Social Media
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="mb-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
                                >
                                    Facebook
                                </a>
                                <a
                                    href="#"
                                    className="mb-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
                                >
                                    Twitter
                                </a>
                                <a
                                    href="#"
                                    className="mb-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="px-3 mx-auto mt-5 text-sm text-gray-400 border-t border-gray-500">
                        <div className="mt-2 text-center py-5">
                            © {new Date().getFullYear()} Southeast Explorer - All rights
                            reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;