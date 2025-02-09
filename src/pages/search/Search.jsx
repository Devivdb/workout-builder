import { useEffect, useState } from "react";
import "./Search.css";
import { fetchExercisesByEquipment } from "../../services/api/fetchExercises.js";
import FiltersExercises from "../../components/filtersExercises/FiltersExercises.jsx";
import ExercisesList from "../../components/listOfExercises/ListOfExcercises.jsx";

const Search = () => {
    const [selectedEquipment, setSelectedEquipment] = useState("barbell");
    const [selectedLevel, setSelectedLevel] = useState("beginner");
    const [selectedForce, setSelectedForce] = useState("all"); // New state for force
    const [selectedMuscle, setSelectedMuscle] = useState("shoulders"); // New state for muscle group
    const [selectedMechanic, setSelectedMechanic] = useState("all");
    const [exercises, setExercises] = useState([]);

    const equipmentTypes = [
        "barbell",
        "dumbbell",
        "other",
        "body_only",
        "cable",
        "machine",
        "kettlebells",
        "bands",
        "medicine_ball",
        "exercise_ball",
    ];

    const forceTypes = ["all", "push", "pull", "static"]; // Available force types
    const muscleGroups = ["quadriceps", "shoulders", "abdominals", "chest", "hamstrings", "triceps", "biceps", "lats", "middle_back", "forearms", "glutes", "traps", "adductors", "abductors", "neck"]; // Muscle groups
    const mechanicTypes = ["all", "compound", "isolation"];

    const fetchExercises = async () => {
        const data = await fetchExercisesByEquipment(selectedEquipment, selectedLevel, selectedForce, selectedMuscle, selectedMechanic);
        setExercises(data);
    };

    useEffect(() => {
        fetchExercises();
    }, [selectedEquipment, selectedLevel, selectedForce, selectedMuscle, selectedMechanic]); // Re-fetch when filters change

    return (
        <div className="workout-builder-container">
            <FiltersExercises
                selectedEquipment={selectedEquipment}
                setSelectedEquipment={setSelectedEquipment}
                selectedLevel={selectedLevel}
                setSelectedLevel={setSelectedLevel}
                selectedForce={selectedForce} // New prop for force
                setSelectedForce={setSelectedForce} // New setter function
                selectedMuscle={selectedMuscle} // New prop for muscle
                setSelectedMuscle={setSelectedMuscle}
                selectedMechanic={selectedMechanic}
                setSelectedMechanic={setSelectedMechanic}
                equipmentTypes={equipmentTypes}
                forceTypes={forceTypes} // Pass force options
                muscleGroups={muscleGroups}
                mechanicTypes={mechanicTypes}
                fetchExercises={fetchExercises}
            />
            <ExercisesList exercises={exercises} />
        </div>
    );
};

export default Search;
