import { useEffect, useState } from "react";
import HouseCard from "../../../component/HouseCard/HouseCard";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { FaStarOfLife } from "react-icons/fa";


const DisplayHouses = () => {
    const [data, setData] = useState(null);
    const [morefilter, setMorefilter] = useState(false)
    const [priceRange, setPriceRange] = useState({ min: 35000, max: 70000 }); // Default price range values
    const [bedroomRange, setBedroomRange] = useState({ min: 3, max: 7 }); // Bedroom range
    const [bathroomRange, setBathroomRange] = useState({ min: 1, max: 3 }); // Bathroom range
    const [roomSizeRange, setRoomSizeRange] = useState({ min: 0, max: 20000 }); // Room size range
    const [selectedCity, setSelectedCity] = useState(""); // Selected city



    const filteredData = data && data.filter((item) => {
        const isPriceInRange = item.monthly_rent >= priceRange.min && item.monthly_rent <= priceRange.max;
        const isBedroomInRange = item.bedrooms >= bedroomRange.min && item.bedrooms <= bedroomRange.max;
        const isBathroomInRange = item.bathrooms >= bathroomRange.min && item.bathrooms <= bathroomRange.max;
        const isRoomSizeInRange = item.room_size >= roomSizeRange.min && item.room_size <= roomSizeRange.max;
        const isCityMatch = selectedCity === "" || item.city === selectedCity;
        return isPriceInRange && isBedroomInRange && isBathroomInRange && isRoomSizeInRange && isCityMatch;
    });

    // console.log(filteredData);

    const handlePriceChange = (value) => {
        setPriceRange(value);
    };
    const handleBedroomChange = (value) => {
        setBedroomRange(value);
    };

    const handleBathroomChange = (value) => {
        setBathroomRange(value);
    };
    const handleRoomSizeChange = (value) => {
        setRoomSizeRange(value);
    };
    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json()).then(data => setData(data))
    }, [])

    return (
        <>
            {/* price range */}
            <div className="py-5 px-2 w-1/2">
                <p className="py-4 font-semibold">Refine your search: Filter houses by monthly rent</p>
                <InputRange
                    formatLabel={value => `${value} taka`}
                    maxValue={70000} // Maximum value for the price range
                    minValue={35000} // Minimum value for the price range
                    value={priceRange}
                    onChange={handlePriceChange}
                />
                <p className="py-5 text-xs flex text-sky-800"><FaStarOfLife className="w-2 text-red-500" /> Browse houses within the preferred monthly rent range of<span className="text-black font-bold">: 35,000$ to 70,000$</span></p>
            </div>
            <div className="flex justify-center">
                <button onClick={() => setMorefilter(!morefilter)} className="btn btn-accent font-bold">
                    {
                        morefilter ? 'Close More Filter' : 'Open More Filter'
                    }
                </button>
            </div>
            {
                morefilter && <div className="py-5 px-2 grid grid-cols-2 gap-8 mx-2">
                    <div className="py-5">
                        <p className="py-4 font-semibold">Bedroom Range</p>
                        <InputRange
                            step={1}
                            maxValue={7}
                            minValue={3}
                            value={bedroomRange}
                            onChange={handleBedroomChange}
                        />
                    </div>
                    <div className="py-5">
                        <h3 className="py-4 font-semibold">Bathroom Range</h3>
                        <InputRange
                            step={1}
                            maxValue={5}
                            minValue={1}
                            value={bathroomRange}
                            onChange={handleBathroomChange}
                        />
                    </div>
                    <div className="py-5">
                        <h3 className="py-4 font-semibold">Room Size Range</h3>
                        <InputRange
                            formatLabel={value => `${value} sq.ft.`}
                            maxValue={20000}
                            minValue={0}
                            value={roomSizeRange}
                            onChange={handleRoomSizeChange}
                        />
                    </div>
                    <div className="py-5">
                        <h3 className="py-4 font-semibold">City</h3>
                        <select value={selectedCity} onChange={handleCityChange} className="select select-info w-full max-w-xs">
                            <option value="">All Cities</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Bogura">Bogura</option>
                            <option value="Khulna">Khulna</option>
                        </select>
                    </div>
                </div>
            }



            {/* display house */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
                {
                    data && filteredData.map((house, i) => <HouseCard house={house} key={i}></HouseCard>)
                }
            </div>
        </>
    );
};

export default DisplayHouses;