import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData();
    const handleDelete = id => {
        console.log(id);
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className='flex justify-between flex-col lg:flex-row'>
                <h2 className="text-3xl font-bold mb-4">All Countries</h2>
                <Link to="/add-country" className='btn bg-indigo-600 text-white hover:bg-indigo-700 border-0 btn-success'>Add Country</Link>
            </div>
            {countries.length === 0 ? (
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
                            {countries.map(country => (
                                <tr key={country.id}>
                                    <td className="py-2">{country.country_Name}</td>
                                    <td className="py-2 text-center">
                                        <Link to={`/update-country/${country._id}`} className="text-indigo-600 hover:text-indigo-700 mr-2">Update</Link>
                                        <button onClick={() => handleDelete(country._id)} className="text-red-600 hover:text-red-700">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>

    );
};

export default Countries;