import profilePic from './assets/profile-pic.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt='profile picture'></img>
            <h2 className="card-title">Imansha Dilshan</h2>
            <p className="card-text">I am Software Engineering Undergraduate at University of Kelaniya.</p>
        </div>
    );

}

export default Card