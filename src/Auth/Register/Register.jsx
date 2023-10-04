import { NavLink } from "react-router-dom";
import Navber from "../../Components/Navber/Navber";


const Register = () => {

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
    }

    return (
        <div>
            <Navber></Navber>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:w-1/2 md:w-3/4 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Register Your Account</h1>
                    </div>
                    <div className=" flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form 
                        onSubmit={handleRegister}
                        className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Your Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name"
                                    name="name"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Enter your photo url"
                                    name="photo"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email address"
                                    name="email"
                                    className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password"
                                    name="password"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white hover:text-black bg-[#403F3F]">Login</button>
                            </div>
                            <h2 className="text-center">Did you have na Accout? <NavLink to="/login" className="text-red-600">Login</NavLink> </h2>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;