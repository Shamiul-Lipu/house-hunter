import Container from "../../component/Container/Container";
import DisplayHouses from "./DisplayHouses/DisplayHouses";

const Home = () => {
    return (
        <>
            <Container>
                <section>
                    <DisplayHouses></DisplayHouses>
                </section>
            </Container>
        </>
    );
};

export default Home;

//  bedrooms should be whitin 3 to 9, bathrooms 2-5, room_size 5000 -19000, monthly_rent 35000 - 70200