import Link from "next/link";

export default function index() {
	return (
		<div>
			<h1>Client</h1>
			<h2><a href="/client/A/B/C">Link #1</a></h2>
			<h2><Link href="/client/A/B/C" target="_blank" rel="nofollow">Link #2</Link></h2>
		</div>
	);
}
