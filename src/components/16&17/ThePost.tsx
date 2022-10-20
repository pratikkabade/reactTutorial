import { Post as iPost } from './ViewPost'

interface Props {
    post: iPost
}

export const ThePost = (props: Props) => {

    const { post } = props
    return (
        <div className='compart'>
            <p>title: <b>{post.title}</b></p>
            <p>description: <b>{post.description}</b></p>
            <p>username: <b>{post.username}</b></p>
        </div>
    )
}