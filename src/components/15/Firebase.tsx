import { auth, provider } from '../../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const Firebase = () => {

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const res = await signInWithPopup(auth, provider);
        navigate("/profile");
    }

    return (
        <>
            <p>sign in with google</p>
            <button onClick={signInWithGoogle}>sign in</button>
        </>
    )
}