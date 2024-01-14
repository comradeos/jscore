
export default function index({params}) {
	return (
		<div>
			<h1>ClientId {params.clientId} Name {params.name} Age{params.age}</h1>
		</div>
	);
}
