import './Features.css'
import useBackground from "../../hooks/useBackground.js";
import featureOne from "../../assets/featureOne.png"
import featureTwo from "../../assets/featureTwo.png"
import featureTree from "../../assets/featureTree.png"
import {useState} from "react";

function Features() {

    useBackground("features-background")
    const [selectedImage, setSelectedImage] = useState(featureOne)

    const images = {
        feature1: featureOne,
        feature2: featureTwo,
        feature3: featureTree
    }

    const handleClick = (feature) => {
        setSelectedImage(images[feature]);
    }

    return (
        <>
            <div className="outer-container-wrapper-features">
                <div className="inner-container-wrapper-features">
                        <h1>Features</h1>
                        <p className="feature-intro-text">Explore the features that make Pumpd unique and powerful.</p>
                    <div className="features-wrapper">
                        <div className="feature-item"
                             onClick={() => handleClick("feature1")}
                        >
                            <p>Build personalized routines with adjustable exercises, sets, reps, and rest times.</p>
                        </div>
                        <div className="feature-item"
                             onClick={() => handleClick("feature2")}
                        >
                            <p>Build personalized routines with adjustable exercises, sets, reps, and rest times.</p>
                        </div>
                        <div className="feature-item"
                             onClick={() => handleClick("feature1")}
                        >
                            <p>Build personalized routines with adjustable exercises, sets, reps, and rest times.</p>
                        </div>
                    </div>
                </div>
                <span className="image-wrapper">
                    <img src={selectedImage} alt="Features"/>
                </span>
            </div>

        </>
    );
};

export default Features;