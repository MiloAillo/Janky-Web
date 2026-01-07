import { authenticate } from "@/api/authenticate"

export const authenticateLoader = async () => {
    try {
        const data = await authenticate()
        console.log(data)

        return data
    } catch (error) {
        console.error(error)
        window.location.href = "/login"
    }
}