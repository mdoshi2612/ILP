import './mentorcards.css';
function flip()
{
const card = document.querySelector(".card__inner");

    card.classList.toggle('is-flipped');
}

const MentorCards = () => {
    return (
        <div className="mentorCards">
            <div className="card" onClick={flip}>
		     <div className="card__inner">
			<div className="card__face card__face--front">
				<p>AL 101</p>
                <hr></hr>
                <br></br>
                <p>Building Data driven strategy across startups and large firms.</p>
                <br></br>
                <p>Zapr</p>
			</div>
			<div className="card__face card__face--back">
				<p>Data Scientist</p>
                <br></br>
                <p>2006</p>
                <br></br>
                <p>B.Tech</p>
                <br></br>
                <p>Bengaluru</p>
                <br></br>
                <p>Mechanical Engineering</p>
			</div>
		</div>
	</div>
        </div>
        
    );
    
}
 
export default MentorCards;