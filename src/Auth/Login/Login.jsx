import { NavLink } from "react-router-dom";
import Navber from "../../Components/Navber/Navber";


const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
    }
    return (
        <div>
            <Navber></Navber>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:w-1/2 md:w-3/4 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className=" flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form
                        onSubmit={handleLogin}
                        className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email address"
                                name="email"
                                className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password" 
                                name="password"
                                className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-blue-500">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white hover:text-black bg-[#403F3F]">Login</button>
                            </div>
                            <h2 className="text-center">Did not you have na Accout? <NavLink to="/register"  className="text-red-600">Register</NavLink> </h2>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;