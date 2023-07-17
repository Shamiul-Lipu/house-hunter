import { useState } from "react";

const SearchBar = () => {
    const [searchText, setSearchText] = useState("");

    const handlerSearch = () => {
        console.log(searchText);
    }



    return (
        <div className="">
            <div className="input-group mb-3">
                <input
                    onBlur={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="form-control input input-bordered input-accent"
                    placeholder="Insert a search text"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                />
                <button
                    className="btn  btn-accent"
                    type="button"
                    id="button-addon2"
                    onClick={handlerSearch}

                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;