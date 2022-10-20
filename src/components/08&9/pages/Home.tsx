import { useContext } from "react"
import { AppContext } from "../StateTwo"

export const Home = () => {
    const { username } = useContext(AppContext)

    return (
        <div>
            <h2>Home page {username}</h2>
        </div>
    )
}