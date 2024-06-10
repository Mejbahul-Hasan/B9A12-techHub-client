import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <div className='text-center'>
                <h2 className='text-3xl font-medium text-gray-800 '>User Profile</h2>
            </div>
            <div className="flex lg:max-w-3xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-600">
                <div className="w-1/3 bg-cover" style={{ backgroundImage: `url(${user?.photoURL})` }}></div>

                <div className="w-2/3 p-4 md:p-4">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">{user?.displayName || "User name not found"}</h1>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{user?.email || "User email not found"}</p>

                    <div className="flex justify-between mt-3 item-center">
                        <h1 className="text-md font-bold text-gray-700 dark:text-gray-200 md:text-xl">Subscription Status: Verified</h1>
                    </div>
                    <div className="mt-6">
                        <button className="btn btn-outline border-orange-500 text-white">Membership Subscription: $10</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;