import { FaGoogle, FaGithub, FaFacebook,FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const RightNav = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold">Login With</h2>
            <div>
                <button 
                className="btn btn-ghost text-center w-full capitalize border-blue-500 text-blue-400 mb-2 mt-4">
                   <FaGoogle></FaGoogle> Login with Google
                </button>
                <button 
                className="btn btn-ghost text-center w-full capitalize border-gray-500 text-gray-600">
                   <FaGithub></FaGithub> Login with Github
                </button>
            </div>

            {/* find us section  */}
            <h2 className="text-2xl font-bold mt-10">Find Us On</h2>
            <div className='mt-6'>
                <NavLink 
                to="https://www.facebook.com/fahimmontasir.siam/"
                className="text-[#706F6F] font-medium  w-full p-4 border rounded-t flex items-center gap-2"
                ><FaFacebook></FaFacebook> Facebook
                </NavLink>

                <NavLink 
                to="https://www.linkedin.com/in/turzacse/"
                className="text-[#706F6F] font-medium  w-full p-4 border flex items-center gap-2"
                ><FaLinkedinIn></FaLinkedinIn> LinkedIn
                </NavLink>

                <NavLink 
                to="https://github.com/turzacse"
                className="text-[#706F6F] font-medium  w-full p-4 border rounded-b flex items-center gap-2"
                ><FaGithub></FaGithub> Github
                </NavLink>

            </div>

            <div className='bg-[#F3F3F3] p-3 mt-10'>
                <h1 className='text-xl font-bold'>Q-Zone</h1>
                <img src="https://i.ibb.co/2FqKVFz/qZone1.png" alt="" />
                <img src="https://i.ibb.co/YpL34Gb/qZone2.png" alt="" />
                <img src="https://i.ibb.co/sm3nd0k/qZone3.png" alt="" />
            </div>
        </div>
    );
};

export default RightNav;