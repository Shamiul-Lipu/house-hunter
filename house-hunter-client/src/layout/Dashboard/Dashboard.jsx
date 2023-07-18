import Sidebar from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import RoleDetails from './RoleDetails/RoleDetails';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col items-center ">

                <div className=" w-full flex justify-end items-center gap-3 fixed top-0 left-0 z-50 ">
                    {/* User/Admin details */}
                    {/* top section of dashboard */}
                    <RoleDetails></RoleDetails>

                    {/* sidebar button */}
                    <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden my-3 mr-3 text">Open Sidebar</label>
                </div>

                {/* Page content here */}
                <div className="pt-28">
                    <Outlet></Outlet>
                </div>

            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="menu p-4 w-80 h-full bg-indigo-300 text-base-content">

                    {/* Sidebar content here */}
                    <Sidebar></Sidebar>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;