import "./ExerciseSelection.css";

const ExerciseSelection = ({
                               exercises,
                               isPopupVisible,
                               setIsPopupVisible,
                               selectedExercises,
                               handleExerciseSelection,
                           }) => {
    return (
        <div>
            {isPopupVisible && (
                <div className="popup-overlay">
                    <div className="popup-container">
                        <button className="close-button" onClick={() => setIsPopupVisible(false)}>X</button>
                        <h2>Select Exercises</h2>
                        <div className="exercise-grid">
                            {exercises.map((exercise, index) => (
                                <div key={index} className="exercise-card">
                                    <h3>{exercise.name}</h3>
                                    <p><b>Equipment:</b> {exercise.equipment}</p>
                                    <p><b>Level:</b> {exercise.level}</p>
                                    <p><b>Force:</b> {exercise.force}</p>
                                    <p><b>Mechanic:</b> {exercise.mechanic}</p>
                                    <input
                                        type="checkbox"
                                        checked={selectedExercises.some((e) => e.name === exercise.name)}
                                        onChange={() => handleExerciseSelection(exercise)}
                                    />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => setIsPopupVisible(false)}>Save</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExerciseSelection;




