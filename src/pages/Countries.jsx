import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { SiteDetailsContext } from '../providers/SiteDetailsProvider';

const Countries = () => {
    const countries = useLoaderData();

    const [allCountries, setAllCountries] = useState(countries);
    const { siteName } = useContext(SiteDetailsContext);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this Country? You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://southest-explorer-server-12zvd66g0.vercel.app/country/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your choosen country has been deleted.',
                                'success'
                            )
                            const remaining = allCountries.filter(country => country._id !== id);
                            setAllCountries(remaining);
                        }
                    })

            }
        })
    }

    

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <Helmet>
                <title>All Countries - {siteName}</title>
            </Helmet>
            <div className='flex justify-between flex-col lg:flex-row'>
                <h2 className="text-3xl font-bold mb-4">All Countries</h2>
                <Link to="/add-country" className='btn bg-indigo-600 text-white hover:bg-indigo-700 border-0 btn-success'>Add Country</Link>
            </div>
            {allCountries.length === 0 ? (
                <p className="text-gray-600">No countries found.</p>
            ) : (
                <div className="overflow-x-auto mt-4">
                    <table className="table table-zebra">
                        <thead className="bg-white">
                            <tr className="text-gray-900" >
                                <th className="text-left py-2">Country Name</th>
                                <th className="text-center py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allCountries.map(country => 
                                <tr key={country._id}>
                                    <td className="py-2">{country.country_Name}</td>
                                    <td className="py-2 text-center">
                                        <Link to={`/update-country/${country._id}`} className="text-indigo-600 hover:text-indigo-700 mr-2">Update</Link>
                                        <button onClick={() => handleDelete(country._id)} className="text-red-600 hover:text-red-700">Delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>

    );
};

export default Countries;