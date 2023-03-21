// mock rest api
// get and update database

import { error } from '@sveltejs/kit';
import db from '../../../lib/db';

/** @type {import('./$types').RequestHandler} */
export function GET() {
	const data = db.get();
	return new Response(JSON.stringify(data));
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const data = await request.json();
		const res = db.update(data);
		return new Response(JSON.stringify(res));
	} catch (err) {
		throw error(500, 'something wrong');
	}
}
