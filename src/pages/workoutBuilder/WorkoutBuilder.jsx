// import { useState } from "react";
// import "./WorkoutBuilder.css";
// import Filters from "../../components/filtersExercises/FiltersExercises.jsx";
// import { fetchExercisesByEquipment } from "../../services/api/fetchExercises.js";
// import ExerciseSelection from "../../components/exercises/ExerciseSelection.jsx";
// import Sets from "../../components/Sets.jsx";
//
// const WorkoutBuilder = () => {
//     const [selectedEquipment, setSelectedEquipment] = useState("barbell");
//     const [selectedLevel, setSelectedLevel] = useState("beginner");
//     const [selectedForce, setSelectedForce] = useState("all"); // New state for force
//     const [selectedMuscle, setSelectedMuscle] = useState("all"); // New state for muscle group
//     const [selectedMechanic, setSelectedMechanic] = useState("all"); // New state for mechanic
//     const [exercises, setExercises] = useState([]);
//     const [isPopupVisible, setIsPopupVisible] = useState(false);
//     const [selectedExercises, setSelectedExercises] = useState([]);
//     const [exerciseSets, setExerciseSets] = useState({}); // Manage sets for each exercise
//     const [selectedExercise, setSelectedExercise] = useState(null); // Active exercise for sets
//
//     const equipmentTypes = [
//         "barbell", "dumbbell", "other", "body_only", "cable", "machine",
//         "kettlebells", "bands", "medicine_ball", "exercise_ball",
//     ];
//
//     const forceTypes = ["all", "push", "pull", "static"]; // Force options
//     const muscleGroups = ["all", "chest", "back", "legs", "arms", "shoulders", "core"]; // Muscle groups
//     const mechanicTypes = ["all", "compound", "isolation"]; // Mechanics (compound, isolation)
//
//     // Fetch exercises based on selected filters
//     const fetchExercises = async () => {
//         const data = await fetchExercisesByEquipment(
//             selectedEquipment, selectedLevel, selectedForce, selectedMuscle, selectedMechanic
//         );
//         setExercises(data);
//         setIsPopupVisible(true); // Show the exercise selection pop-up
//     };
//
//     // Handle adding/removing exercises
//     const handleExerciseSelection = (exercise) => {
//         if (selectedExercises.some((e) => e.name === exercise.name)) {
//             // Remove exercise
//             setSelectedExercises((prev) => prev.filter((e) => e.name !== exercise.name));
//             setExerciseSets((prevSets) => {
//                 const updatedSets = { ...prevSets };
//                 delete updatedSets[exercise.name]; // Remove its sets
//                 return updatedSets;
//             });
//             if (selectedExercise?.name === exercise.name) {
//                 setSelectedExercise(null); // Deselect if active
//             }
//         } else {
//             // Add exercise
//             setSelectedExercises((prev) => [...prev, exercise]);
//             setExerciseSets((prevSets) => ({
//                 ...prevSets,
//                 [exercise.name]: [], // Initialize empty sets
//             }));
//         }
//     };
//
//     // Update sets for a specific exercise
//     const updateExerciseSets = (exerciseName, sets) => {
//         setExerciseSets((prevSets) => ({
//             ...prevSets,
//             [exerciseName]: sets,
//         }));
//     };
//
//     return (
//         <div className="workout-builder-container">
//             {/* Filters Component */}
//             <Filters
//                 selectedEquipment={selectedEquipment}
//                 setSelectedEquipment={setSelectedEquipment}
//                 selectedLevel={selectedLevel}
//                 setSelectedLevel={setSelectedLevel}
//                 selectedForce={selectedForce} // Pass force state
//                 setSelectedForce={setSelectedForce} // Pass force setter
//                 selectedMuscle={selectedMuscle} // Pass muscle state
//                 setSelectedMuscle={setSelectedMuscle} // Pass muscle setter
//                 selectedMechanic={selectedMechanic} // Pass mechanic state
//                 setSelectedMechanic={setSelectedMechanic} // Pass mechanic setter
//                 equipmentTypes={equipmentTypes}
//                 forceTypes={forceTypes}
//                 muscleGroups={muscleGroups}
//                 mechanicTypes={mechanicTypes}
//                 fetchExercises={fetchExercises}
//             />
//             {/* Selected Exercises Overview */}
//             <div className="selected-exercises-container">
//                 <h2>Selected Exercises</h2>
//                 {selectedExercises.length > 0 ? (
//                     <ul className="selected-exercises-list">
//                         {selectedExercises.map((exercise, index) => (
//                             <li
//                                 key={index}
//                                 className={`selected-exercise-item ${
//                                     selectedExercise?.name === exercise.name ? "active" : ""
//                                 }`}
//                                 onClick={() => setSelectedExercise(exercise)}
//                             >
//                                 {exercise.name} ({exercise.equipment})
//                                 <button
//                                     className="remove-exercise-btn"
//                                     onClick={(e) => {
//                                         e.stopPropagation(); // Prevent selecting the exercise
//                                         handleExerciseSelection(exercise);
//                                     }}
//                                 >
//                                     Remove
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p>No exercises selected yet.</p>
//                 )}
//             </div>
//
//             {/* Exercise Selection Component */}
//             <ExerciseSelection
//                 exercises={exercises}
//                 isPopupVisible={isPopupVisible}
//                 setIsPopupVisible={setIsPopupVisible}
//                 selectedExercises={selectedExercises}
//                 handleExerciseSelection={handleExerciseSelection}
//             />
//
//             {/* Sets Component */}
//             {selectedExercise && (
//                 <Sets
//                     selectedExercise={selectedExercise.name}
//                     sets={exerciseSets[selectedExercise.name] || []}
//                     updateSets={(sets) => updateExerciseSets(selectedExercise.name, sets)}
//                 />
//             )}
//         </div>
//     );
// };
//
// export default WorkoutBuilder;

import { useState } from "react";
import "./WorkoutBuilder.css";
import Filters from "../../components/filtersExercises/FiltersExercises.jsx";
import { fetchExercisesByEquipment } from "../../services/api/fetchExercises.js";
import ExerciseSelection from "../../components/exercises/ExerciseSelection.jsx";
import Sets from "../../components/Sets.jsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";

const WorkoutBuilder = () => {
    const [selectedEquipment, setSelectedEquipment] = useState("barbell");
    const [selectedLevel, setSelectedLevel] = useState("beginner");
    const [selectedForce, setSelectedForce] = useState("all");
    const [selectedMuscle, setSelectedMuscle] = useState("all");
    const [selectedMechanic, setSelectedMechanic] = useState("all");
    const [exercises, setExercises] = useState([]);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [selectedExercises, setSelectedExercises] = useState([]);
    const [exerciseSets, setExerciseSets] = useState({});
    const [selectedExercise, setSelectedExercise] = useState(null);

    const equipmentTypes = [
        "barbell", "dumbbell", "other", "body_only", "cable", "machine",
        "kettlebells", "bands", "medicine_ball", "exercise_ball",
    ];

    const forceTypes = ["all", "push", "pull", "static"];
    const muscleGroups = ["all", "chest", "back", "legs", "arms", "shoulders", "core"];
    const mechanicTypes = ["all", "compound", "isolation"];

    const fetchExercises = async () => {
        const data = await fetchExercisesByEquipment(
            selectedEquipment, selectedLevel, selectedForce, selectedMuscle, selectedMechanic
        );
        setExercises(data);
        setIsPopupVisible(true);
    };

    const handleExerciseSelection = (exercise) => {
        if (selectedExercises.some((e) => e.name === exercise.name)) {
            setSelectedExercises((prev) => prev.filter((e) => e.name !== exercise.name));
            setExerciseSets((prevSets) => {
                const updatedSets = { ...prevSets };
                delete updatedSets[exercise.name];
                return updatedSets;
            });
            if (selectedExercise?.name === exercise.name) {
                setSelectedExercise(null);
            }
        } else {
            setSelectedExercises((prev) => [...prev, exercise]);
            setExerciseSets((prevSets) => ({
                ...prevSets,
                [exercise.name]: [],
            }));
        }
    };

    const updateExerciseSets = (exerciseName, sets) => {
        setExerciseSets((prevSets) => ({
            ...prevSets,
            [exerciseName]: sets,
        }));
    };

    // Function to format data for export
    const formatWorkoutData = () => {
        return selectedExercises.map((exercise) => ({
            name: exercise.name,
            equipment: exercise.equipment,
            level: exercise.level,
            force: exercise.force,
            muscle: exercise.muscle,
            mechanic: exercise.mechanic,
            sets: (exerciseSets[exercise.name] || []).map(set =>
                `Reps: ${set.reps}, Weight: ${set.weight}kg`
            ) // Format sets properly
        }));
    };


    // Export as JSON
    const exportAsJSON = () => {
        const data = formatWorkoutData();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        saveAs(blob, "workout.json");
    };

    // Export as CSV
    const exportAsCSV = () => {
        const data = formatWorkoutData();
        const csvContent =
            "Name,Equipment,Level,Force,Muscle,Mechanic,Sets\n" +
            data
                .map((exercise) =>
                    `${exercise.name},${exercise.equipment},${exercise.level},${exercise.force},${exercise.muscle},${exercise.mechanic},"${exercise.sets.join(" | ")}"`
                )
                .join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, "workout.csv");
    };


    const exportAsPDF = () => {
        const data = formatWorkoutData();
        const doc = new jsPDF();
        doc.setFontSize(14);
        doc.text("Workout Plan", 10, 10);

        let y = 20;
        data.forEach((exercise, index) => {
            doc.setFontSize(12);
            doc.text(`${index + 1}. ${exercise.name}`, 10, y);
            doc.setFontSize(10);
            doc.text(`- Equipment: ${exercise.equipment}`, 10, y + 5);
            doc.text(`- Level: ${exercise.level}`, 10, y + 10);
            doc.text(`- Force: ${exercise.force}`, 10, y + 15);
            doc.text(`- Muscle: ${exercise.muscle}`, 10, y + 20);
            doc.text(`- Mechanic: ${exercise.mechanic}`, 10, y + 25);

            // Format sets properly
            const setsText = exercise.sets.length > 0
                ? exercise.sets.join(" | ")
                : "None";
            doc.text(`- Sets: ${setsText}`, 10, y + 30);

            y += 40;
        });

        doc.save("workout.pdf");
    };


    return (
        <div className="workout-builder-container">
            <Filters
                selectedEquipment={selectedEquipment}
                setSelectedEquipment={setSelectedEquipment}
                selectedLevel={selectedLevel}
                setSelectedLevel={setSelectedLevel}
                selectedForce={selectedForce}
                setSelectedForce={setSelectedForce}
                selectedMuscle={selectedMuscle}
                setSelectedMuscle={setSelectedMuscle}
                selectedMechanic={selectedMechanic}
                setSelectedMechanic={setSelectedMechanic}
                equipmentTypes={equipmentTypes}
                forceTypes={forceTypes}
                muscleGroups={muscleGroups}
                mechanicTypes={mechanicTypes}
                fetchExercises={fetchExercises}
            />

            <div className="selected-exercises-container">
                <h2>Selected Exercises</h2>
                {selectedExercises.length > 0 ? (
                    <ul className="selected-exercises-list">
                        {selectedExercises.map((exercise, index) => (
                            <li
                                key={index}
                                className={`selected-exercise-item ${
                                    selectedExercise?.name === exercise.name ? "active" : ""
                                }`}
                                onClick={() => setSelectedExercise(exercise)}
                            >
                                {exercise.name} ({exercise.equipment})
                                <button
                                    className="remove-exercise-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleExerciseSelection(exercise);
                                    }}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No exercises selected yet.</p>
                )}
            </div>

            <ExerciseSelection
                exercises={exercises}
                isPopupVisible={isPopupVisible}
                setIsPopupVisible={setIsPopupVisible}
                selectedExercises={selectedExercises}
                handleExerciseSelection={handleExerciseSelection}
            />

            {selectedExercise && (
                <Sets
                    selectedExercise={selectedExercise.name}
                    sets={exerciseSets[selectedExercise.name] || []}
                    updateSets={(sets) => updateExerciseSets(selectedExercise.name, sets)}
                />
            )}

            <div className="export-buttons">
                <button onClick={exportAsJSON}>Export JSON</button>
                <button onClick={exportAsCSV}>Export CSV</button>
                <button onClick={exportAsPDF}>Export PDF</button>
            </div>
        </div>
    );
};

export default WorkoutBuilder;
