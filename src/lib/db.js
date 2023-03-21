// mock database in a svelte store
// load data from json
// export get and update

import { get, writable } from 'svelte/store';
import data from './data.json';

const _data = writable(data);

export default {
	// get all items from db
	get(id) {
		return get(_data).toplists[id].sort((a, b) => a.position - b.position);
	},
	// update all items of db
	update(id, items) {
		_data.update((i) => ({ ...i, toplists: { ...i.toplists, [id]: items } }));
		return this.get(id);
	}
};
