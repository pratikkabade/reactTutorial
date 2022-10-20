import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
// IMPORT DB
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

interface CreatePost {
    title: string;
    description: string;
}

export const CreatePost = () => {

    const schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required("fill description")
    })

    const { register, handleSubmit, formState: { errors } } = useForm<CreatePost>({
        resolver: yupResolver(schema)
    })

    // GET USER
    const [user] = useAuthState(auth)

    // DATABASE MODIFICATION
    const postRef = collection(db, "posts")

    const onCreatePost = async (data: CreatePost) => {
        await addDoc(postRef, {
            // title: data.title,
            // description: data.description,

            // OR
            ...data,
            username: user?.displayName,
            email: user?.email,
            id: user?.uid
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onCreatePost)} className='compart'>
                <input placeholder='Title' {...register("title")} />
                <p>{errors.title?.message}</p>
                <input placeholder='Description' {...register("description")} />
                <p>{errors.description?.message}</p>
                <input type="submit" />
            </form>
        </div>
    )
}