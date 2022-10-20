import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { CreatePost } from "./CreatePost"
import { ViewPost } from "./ViewPost"

export const Database = () => {

    const [user] = useAuthState(auth)


    return (
        <div>
            {user ? (
                <div>
                    <CreatePost />
                    <ViewPost />
                </div>
            ) : (
                <p>not signed in</p>
            )}
        </div>
    )
}
