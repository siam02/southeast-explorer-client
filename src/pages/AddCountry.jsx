import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { SiteDetailsContext } from "../providers/SiteDetailsProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AddCountry = () => {

    const [addText, setAddText] = useState('Add Country');
    const { siteName } = useContext(SiteDetailsContext);

    const handleSubmit = e => {
        e.preventDefault();

        setAddText(
            <span className="loading loading-spinner loading-xs"></span>
        )

        const form = e.target;
        const image = form.image.value;
        const country_Name = form.country_Name.value;
        const short_description = form.short_description.value;

        const newCountry = { image, country_Name, short_description }

        fetch('https://southest-explorer-server-opbmjysgv.vercel.app/country', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCountry)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAddText("Add Country");
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Country Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Great'
                    })

                    form.reset();
                }
            })
            .catch(error => {
                toast.error(error);
            })
    }

    return (
        <div className="mx-auto px-4 py-8">
            <Helmet>
                <title>Add Country - {siteName}</title>
            </Helmet>
            <h2 className="text-3xl font-bold mb-4">Add Country</h2>
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
                    <div className="md:col-span-2">
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

export default AddCountry;