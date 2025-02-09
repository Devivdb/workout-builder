import axios from "axios";

export const fetchExercisesByEquipment = async (equipment, level, force, muscle, mechanic) => {
    try {
        const response = await axios.get(
            `https://${import.meta.env.VITE_RAPIDAPI_HOST}/exercises/equipment/${equipment}`,
            {
                headers: {
                    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
                    "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
                },
            }
        );

        return response.data.filter((exercise) =>
            exercise.level === level &&
            (force === "all" || exercise.force?.toLowerCase() === force.toLowerCase()) && // Filter force if not "all"
            (muscle === "all" || exercise.primaryMuscles[0]?.toLowerCase() === muscle.toLowerCase()) &&
            (mechanic === "all" || exercise.mechanic?.toLowerCase() === mechanic.toLowerCase())
        );
    } catch (error) {
        console.error("Error fetching exercises:", error);
        return [];
    }
};
