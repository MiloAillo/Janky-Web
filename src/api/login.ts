import { API_URL } from "@/lib/variables"
import axios, { isAxiosError } from "axios"

export const api_login = async (name: string | null, password: string | null) => {
    try {
        const res = await axios.post(`${API_URL}/v1/auth/login`, {
            name: name,
            password: password
        })

        const data = await res.data
        
        return data
    } catch (err) {
        if (isAxiosError(err)) {
            switch (err.status) {
                case 401:
                    throw new Error(err.response?.data.message || "Invalid username or password")
                case 400:
                    throw new Error(err.response?.data.message || "Name and password must be present")
                case 500:
                    throw new Error(err.response?.data.message || "Server error. Please contact the dev!")
            }
        }
    }
}