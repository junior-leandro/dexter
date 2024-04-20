import './home.css'
import videoBG from '../assets/video/video.mp4';

function Home() {

    return (
        <div className="home">
            <div className="overlay"></div>
            <video src={videoBG} autoPlay loop muted/>
            <div className="content">
                <h1>Welcome to Dexter's Life</h1>
                <a href="/season">Explore</a>
            </div>
        </div>

    );
}
export default Home;

