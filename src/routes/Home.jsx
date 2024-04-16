import './home.css'
import Header from '../components/Header/Header';
import videoBG from '../assets/video/video.mp4';

function Home() {

    let currentSeason = 1

    return (
        <div className="home">
            <div className="overlay"></div>
            <video src={videoBG} autoPlay loop muted />
            <div className="content">
                <h1>Welcome to Dexter's Life</h1>
                <a href="#">Explore</a>
            </div>
        </div>

    );
}
export default Home;

