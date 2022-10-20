import { Link } from 'react-router-dom'
import { auth } from '../../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export const Navbar = () => {

    const [user] = useAuthState(auth)

    return (
        <div>
            <Link to='/' > Home </Link>
            <Link to='/about' > About </Link>

            {user ? (
                <Link to='/profile' > Profile </Link>
            ) : (
                <Link to='/signin' > Signin </Link>
            )}

        </div>
    )
}