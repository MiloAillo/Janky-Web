import { API_URL } from "@/lib/variables"
import axios from "axios"

export const authenticate = async () => {
    try {
        const res = await axios.get(`${API_URL}/v1/auth`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Authorization")}`
            }
        })

        return await res.data
    } catch (err) {
        throw new Error("err from API fetch")
    }
}