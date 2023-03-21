// mock database in a svelte store
// load data from json
// export get and update

import { get, writable } from 'svelte/store';
import data from './data.json';

const _data = writable(data);

export default {
	// get all items from db
	get() {
		return get(_data);
		// .sort((a, b) => a.order - b.order);
	},
	// update all items of db
	update(items) {
		_data.update(() => items);
		return get(_data);
	}
};
