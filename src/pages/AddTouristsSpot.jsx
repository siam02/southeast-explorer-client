import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import { SiteDetailsContext } from "../providers/SiteDetailsProvider";
import Swal from 'sweetalert2'
import { toast } from "react-toastify";

const AddTouristsSpot = () => {

    const [addText, setAddText] = useState('Add');
    const { siteName } = useContext(SiteDetailsContext);
    const { user } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();

        setAddText(
            <span className="loading loading-spinner loading-xs"></span>
        )

        const form = e.target;
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = parseInt(form.average_cost.value);
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const userEmail = user.email;
        const userName = user.displayName;

        const newTouristsSpot = { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, userEmail, userName }

        console.log(newTouristsSpot);

        fetch('http://localhost:5000/tourists-spot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTouristsSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAddText("Add");
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Tourists Spot Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                    form.reset();
                }
            })
            .catch(error => {
                toast.error(error);
            })


    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <Helmet>
                <title>Add Tourists Spot - {siteName}</title>
            </Helmet>
            <h2 className="text-3xl font-bold mb-4">Add Tourists Spot</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Image (URL)
                        </label>
                        <input
                            id="image"
                            name="image"
                            type="text"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="tourists_spot_name" className="block text-sm font-medium text-gray-700">
                            Tourists Spot Name
                        </label>
                        <input
                            id="tourists_spot_name"
                            name="tourists_spot_name"
                            type="text"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="country_Name" className="block text-sm font-medium text-gray-700">
                            Country Name
                        </label>
                        <input
                            id="country_Name"
                            name="country_Name"
                            type="text"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="short_description" className="block text-sm font-medium text-gray-700">
                            Short Description
                        </label>
                        <textarea
                            id="short_description"
                            name="short_description"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="average_cost" className="block text-sm font-medium text-gray-700">
                            Average Cost
                        </label>
                        <input
                            id="average_cost"
                            name="average_cost"
                            type="number"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="seasonality" className="block text-sm font-medium text-gray-700">
                            Seasonality
                        </label>
                        <input
                            id="seasonality"
                            name="seasonality"
                            type="text"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="travel_time" className="block text-sm font-medium text-gray-700">
                            Travel Time
                        </label>
                        <input
                            id="travel_time"
                            name="travel_time"
                            type="text"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="totalVisitorsPerYear" className="block text-sm font-medium text-gray-700">
                            Total Visitors Per Year
                        </label>
                        <input
                            id="totalVisitorsPerYear"
                            name="totalVisitorsPerYear"
                            type="text"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                            User Email
                        </label>
                        <input
                            id="userEmail"
                            name="userEmail"
                            type="email"
                            value={user.email}
                            disabled
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                            User Name
                        </label>
                        <input
                            id="userName"
                            name="userName"
                            type="text"
                            value={user.displayName}
                            disabled
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {addText}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTouristsSpot;