import axios from "axios";

export async function fetchFoods() {
    try {
        const response = await axios.get(
            "https://fahim5120.github.io/MINI_PROJECT_FOOD_API/react.json"
        )
        console.log(response.data)
        return response.data.foods || []
    } catch (error) {
        console.log("Error occured")
        return []
    }
}