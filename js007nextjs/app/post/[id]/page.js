import Post from '@/app/components/Post';

export async function generateMetadata({params}) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
	const post = await response.json();
	return {
		title: post.title,
		description: post.body,
	}
}

export default async function index({params}) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
	const post = await response.json();
	return (
		<div className='post'>
			<Post post={post} />
		</div>
	);
}
