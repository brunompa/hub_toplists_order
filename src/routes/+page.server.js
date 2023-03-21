/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`/api/items`);
	const items = await res.json();
	return { items };
}
