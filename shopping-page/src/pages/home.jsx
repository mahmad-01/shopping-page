import { Link } from "react-router-dom";
import '../styles/home.css'
const Home = () => {
    return (
        <>
        <div className="header">
            Welcome to Fake Store!
        </div>

        <div className="home">
            <div className="lowerContent">
            <Link to="/shop"><button>Shop Now!</button></Link>
            </div>
        </div>
        </>
    );
};

export default Home;