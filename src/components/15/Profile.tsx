// BRING AUTH FROM FIREBASE CONFIG
import { auth } from "../../config/firebase"
//BRING HOOK FOR LINK
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"
// NAVIGATION
import { useNavigate } from "react-router-dom"

export const Profile = () => {

    const [user] = useAuthState(auth)

    const navigate = useNavigate()

    const signUserOut = async () => {
        await signOut(auth)
        navigate('/')
    }

    return (
        <div>
            {user && (
                <div>
                    <p>{user?.displayName}</p>
                    <p>{user?.email}</p>
                    <img src={user.photoURL} alt="profile " /> <br />
                    <button onClick={signUserOut}> Sign Out </button>
                </div>
            )}
        </div>
    )
}