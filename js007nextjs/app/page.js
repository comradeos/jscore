import Link from "next/link";

async function fetchData() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const result = await response.json();
	return result;
}

export default async function page() {
	const posts = await fetchData();
	return (
		<div className="container">
			<h1>Главная страница</h1>
			<h2>Список постов:</h2>
			{posts.map((item) => (
				<div className="post" key={item.id}>
					<h3>{item.title}</h3>
					<p>{item.body}</p>
					<Link href={`/post/${item.id}`}>Подробнее</Link>
				</div>
			))}
		</div>
	);
}
