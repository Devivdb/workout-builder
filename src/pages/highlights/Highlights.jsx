import './Highlights.css'
import useBackground from "../../hooks/useBackground.js";

function Highlights(){

    useBackground("highlights-background")

    return (
        <>
            <div className="outer-container-wrapper-highlights">
                <h1>Highlights</h1>
                <div className="inner-container-wrapper-highlights">
                    <div className="highlight">
                        <p>Build personalized routines with adjustable exercises, sets, reps, and rest times.</p>
                    </div>
                    <div className="highlight">
                        <p>Build personalized routines with adjustable exercises, sets, reps, and rest times.</p>
                    </div>
                    <div className="highlight">
                        <p>Build personalized routines with adjustable exercises, sets, reps, and rest times.</p>
                    </div>
                    <div className="highlight">
                        <p>Build personalized routines with adjustable exercises, sets, reps, and rest times.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Highlights;