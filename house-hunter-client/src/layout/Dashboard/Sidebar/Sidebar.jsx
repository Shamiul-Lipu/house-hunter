import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaSpellCheck } from "react-icons/fa";
import mainLogo from '../../../assets/key.png'

const Sidebar = () => {
    return (
        <div>
            <div className="text-center bg-indigo-50 py-2 rounded-lg">
                {/* img */}
                <img className='w-1/4 mx-auto' src={mainLogo} />
                <h3 className='text-xl font-medium text-indigo-400'>House <span className='font-bold text-indigo-800'>Hunter</span></h3>
            </div>

            <ul className='py-4 font-bold text-base text text-w'>
                <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                <hr />

            </ul>
            <div className="divider"></div>
        </div>
    );
};

export default Sidebar;