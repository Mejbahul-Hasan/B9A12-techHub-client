import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({email, password});

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("Login Successful !")
                form.reset();
                navigate(location.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
                toast.error('Invalid Password/Registration Required')
            })
    }

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()
            toast.success("Login Successful !")
            navigate(location.state ? location.state : '/');
        }
        catch (err) {
            console.log(err)
            toast.error('Invalid Password/Registration Required')
        }
    }

    return (
        <div className="hero bg-base-200 rounded-2xl">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password" placeholder="Password" className="input input-bordered w-full" required />
                                <span className="absolute top-4 right-6" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New Member? Please <Link to="/register"><button className="btn btn-link">Register</button></Link> </p>
                    </form>
                    <div className="text-center">
                        <div className="divider">OR</div>
                        <h2>Connect with</h2>
                        <p>
                            <button onClick={handleGoogleSignIn} className="btn btn-link text-2xl"> <FaGoogle />
                                Google</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;