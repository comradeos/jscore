import Link from 'next/link';

const Post = ({post}) => {
	return (
        <div className='post'>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href='/'>Назад к списку постов</Link>
        </div>
	);
}

export default Post;