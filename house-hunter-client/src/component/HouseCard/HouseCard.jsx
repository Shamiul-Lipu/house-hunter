import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const HouseCard = ({ house }) => {
    // console.log(house);
    return (
        <div className="card shadow-2xl bg-slate-50">
            <figure className="px-10 pt-10">
                <img src={house.picture} alt="house image" className="rounded-xl" />
            </figure>
            <div className="card-body pb-1 items-center text-start">
                <h2 className="card-title">{house.house_name} <span className="text-sm text-gray-400">{house.room_size} sq. ft.</span></h2>
                <p className="flex items-center"><FaMapMarkerAlt />{house.address}, {house.city}</p>
            </div>
            {/* house details */}
            <div className="px-10">
                <p className="font-bold text-gray-500">Monthly rent: <span className="text-black">{house.monthly_rent} taka</span></p>
                <p className="font-semibold">Available on {house.available_date}</p>
                <div className="text-sm font-medium text-gray-500 pt-2">
                    <p >Contact: {house.phone_number}</p>
                    <p >{house.room_size} sq. ft. house with {house.bedrooms} Bedrooms & {house.bathrooms} bathrooms</p>

                    <p className="text-black font-light">{house.description}</p>
                    <div className="flex justify-between items-center text-black py-2">
                        <p>Reviewed by {house.reviewed_by} people</p>
                        <p className="flex items-center gap-1"><FaStar className="text-amber-500" /> {house.ratings}</p>
                    </div>
                </div>
                <div className="flex justify-center pb-3">
                    <button className="btn btn-primary font-bold">Rent Now</button>
                </div>
            </div>
        </div>
    );
};

export default HouseCard;