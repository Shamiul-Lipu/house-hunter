import Container from "../Container/Container";
import mainLogo from '../../assets/door-key.png'
import { FaUser, FaUserCheck } from "react-icons/fa";
const Navbar = () => {
    const user = "null"
    let role = 'owner'


    return (
        <header className="bg-white py-4 fixed w-full z-10 shadow-md">
            <Container>
                <nav className="flex justify-between">
                    {/* logo */}
                    <div className="flex flex-row items-center gap-2">
                        <img className="w-10" src={mainLogo} alt="" />
                        <h3 className="font-bold text-2xl text-sky-800">House Hunter</h3>
                    </div>

                    {/* user functionality */}
                    <div className="flex items-center">
                        {/* dashboard button in presence of user */}
                        {/* Login button on navbar  */}
                        {
                            user && role
                                ? role === 'owner'
                                    ? <button className="btn btn-neutral">Owner Dash</button>
                                    : <button className="btn btn-neutral">renter Dash</button>
                                : <button className="btn btn-neutral">Login</button>
                        }

                        <label tabIndex={0} className={`btn btn-ghost btn-circle avatar ${user && 'online'} px-1 `}>
                            <div
                                className={`${user ? 'w-6' : 'w-6'} rounded-full ring ring-primary ring-offset-base-100 ring-offset-2`}
                            >
                                {user ? <FaUserCheck className="w-6 h-6 text-green-700" /> : <FaUser className="w-6 h-6 text-gray-700" />}
                            </div>
                        </label>
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;