import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { SiteDetailsContext } from "../providers/SiteDetailsProvider";
import { FaClock, FaGlobe, FaLeaf, FaLocationDot, FaPeopleGroup } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";



const TouristsSpotDetails = () => {

    const { siteName } = useContext(SiteDetailsContext);

    const spot = useLoaderData();

    return (
        <div className="my-8">
            <Helmet>
                <title>{spot.tourists_spot_name} - {siteName}</title>
            </Helmet>
            <div className="overflow-hidden">
                <div className="flex gap-6 justify-between items-center flex-col md:flex-row mb-10">
                    <div className="md:text-left text-center">
                        <h2 className="text-2xl mb-2 font-semibold">{spot.tourists_spot_name}</h2>
                        <div className="flex flex-wrap md:justify-start justify-center items-center gap-2">
                            <FaLocationDot />
                            {spot.location}, {spot.country_Name},
                            <p>Added by <span className="text-blue-800 font-medium"><a href={`mailto:${spot.userEmail}`}>{spot.userName}</a></span></p>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-secondary bg-indigo-600 hover:bg-indigo-700 border-0 !text-base hover:border-0">Book Now</button>
                    </div>
                </div>
                <img src={spot.image} alt={spot.tourists_spot_name} className="mx-auto object-cover mb-10 rounded-xl" />
                <div className="flex md:flex-row flex-col flex-wrap text-center justify-center gap-6">
                    <div className="bg-white flex-1 rounded-md p-4 items-center justify-center flex flex-col gap-2">
                        <FaLocationDot className="w-6 h-6" />
                        {spot.location}
                    </div>
                    <div className="bg-white flex-1 rounded-md p-4 items-center justify-center flex flex-col gap-2">
                        <FaGlobe className="w-6 h-6" />
                        {spot.country_Name}
                    </div>
                    <div className="bg-white rounded-md p-4 flex-1 items-center justify-center flex flex-col gap-2">
                        <MdAttachMoney className="w-7 h-7" />
                        ${spot.average_cost}
                    </div>
                    <div className="bg-white rounded-md p-4 flex-1 items-center justify-center flex flex-col gap-2">
                        <FaPeopleGroup className="w-7 h-7" />
                        {spot.totalVisitorsPerYear}
                    </div>
                    <div className="bg-white rounded-md p-4 flex-1 items-center justify-center flex flex-col gap-2">
                        <FaClock className="w-6 h-6" />
                        {spot.travel_time}
                    </div>
                    <div className="bg-white rounded-md p-4 flex-1 items-center justify-center flex flex-col gap-2">
                        <FaLeaf className="w-6 h-6" />
                        {spot.seasonality}
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-lg font-medium mb-2">Description:</h2>
                    <p className="text-gray-800">{spot.short_description}</p>
                </div>
            </div>
        </div>

    );
};

export default TouristsSpotDetails;