import { useContext } from "react"
import { AppContext } from "../StateTwo"

export const About = () => {
    const { username } = useContext(AppContext)

    return <h2>About page {username}</h2>
}