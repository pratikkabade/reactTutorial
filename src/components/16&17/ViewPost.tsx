import { getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../config/firebase"
import { ThePost } from "./ThePost"

export interface Post {
    id: string;
    email: string;
    title: string;
    username: string;
    description: string;
}

export const ViewPost = () => {

    const [posts, setPosts] = useState<Post[]>(null);
    const postsRef = collection(db, "posts");

    const getPosts = async () => {
        const data = await getDocs(postsRef)
        setPosts(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
        )
    }



    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            {posts?.map((post) => (
                <ThePost post={post} />
            ))}
        </div>
    )
}