import "./ListOfExcercises.css"

const ExercisesList = ({ exercises }) => {
    return (
        <div className="outer-container-wrapper-list-of-excercises">
            <h2 className="exercise-title">Exercises:</h2>
            <ul className="exercise-list">
                {exercises.length > 0 ? (
                    exercises.map((exercise, index) => (
                        <li key={index} className="exercise-item">
                            <span className="exercise-name">{exercise.name}</span>
                            <br/>
                            <span className="exercise-equipment"> <b>Equipment:</b> {exercise.equipment}</span>
                            <br/>
                            <span className="exercise-level"> <b>Level:</b> {exercise.level}</span>
                            <br/>
                            <span className="exercise-force"> <b>Force:</b> {exercise.force}</span>
                            <br/>
                            <span className="exercise-mechanic"> <b>Mechanic:</b> {exercise.mechanic}</span>
                            <br/>
                            <span className="exercise-muscle-group"> <b>Muscle group:</b> {exercise.primaryMuscles[0]}</span>
                        </li>
                    ))
                ) : (
                    <p className="no-exercises">No exercises found.</p>
                )}
            </ul>
        </div>
    );
};

export default ExercisesList;
