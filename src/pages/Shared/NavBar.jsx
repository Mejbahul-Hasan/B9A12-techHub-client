import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { GrTechnology } from "react-icons/gr";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }
    // console.log(theme);

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => toast.success("Logout Successful !"))
            .catch(error => console.error(error))
    }

    return (
        <>
            <div className='navbar bg-base-100 shadow-sm'>
                <div className='flex-1'>
                    <Link to="/" className='flex gap-2 items-center'>
                        <div className='font-bold'><GrTechnology /></div>
                        <div className='font-bold'>TechHub</div>
                    </Link>
                </div>
                <div className='flex-none'>
                    <ul className='menu menu-horizontal px-1'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>

                        {!user && (
                            <li>
                                <Link className="btn-sm" to="/login">Login</Link>
                            </li>
                        )}
                    </ul>
                    {user && (
                        <div className='dropdown dropdown-end z-50'>
                            <div
                                tabIndex={0}
                                role='button'
                                className='btn btn-ghost btn-circle avatar'
                            >
                                <div className='w-10 rounded-full' title={user?.displayName || "User name not found"}>
                                    <img
                                        referrerPolicy='no-referrer'
                                        alt='User Profile Photo'
                                        src={user?.photoURL}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                            >
                                <li>
                                    <h1>User Name: {user?.displayName || "User name not found"}</h1>
                                </li>
                                <li>
                                    <Link to="/my-volunteer-post">Dashboard</Link>
                                </li>
                                <li>
                                    <button onClick={handleSignOut} className="btn-ghost btn-sm rounded-md">Log Out</button>
                                </li>
                            </ul>
                        </div>
                    )}

                    <label className="cursor-pointer grid place-items-center ml-3">
                        <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </>
    )
}

export default Navbar