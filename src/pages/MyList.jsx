import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const MyList = () => {

    const [myList, setMyList] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/tourists-spot?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyList(data);
        })
        .catch(error => {
            console.log(error);
            toast.error(error);
        })
    }, [user.email])

    const handleDelete = id => {
        console.log(id);
    }


    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">My Tourist Spots</h2>
            {myList.length === 0 ? (
                <p className="text-gray-600">You haven&apos;t added any tourist spots yet.</p>
            ) : (
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left py-2">Tourist Spot</th>
                            <th className="text-left py-2">Location</th>
                            <th className="text-left py-2">Average Cost</th>
                            <th className="text-left py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myList.map(spot => (
                            <tr key={spot.id}>
                                <td className="py-2">{spot.tourists_spot_name}</td>
                                <td className="py-2">{spot.location}</td>
                                <td className="py-2">{spot.average_cost}</td>
                                <td className="py-2">
                                    <Link to={`/update/${spot._id}`} className="text-indigo-600 hover:text-indigo-700 mr-2">Update</Link>
                                    <button onClick={() => handleDelete(spot._id)} className="text-red-600 hover:text-red-700">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyList;