<script>
	export let data;

	let hovering = false;

	const drop = (event, target) => {
		event.dataTransfer.dropEffect = 'move';
		const start = parseInt(event.dataTransfer.getData('text/plain'));

		let indexToChange = start;
		let newPosition = target;

		let element = data.items.splice(indexToChange, 1)[0];
		data.items.splice(newPosition, 0, element);

		for (let i = 0; i < data.items.length; i++) {
			data.items[i].position = i + 1;
		}
		hovering = null;
	};

	const dragstart = (event, i) => {
		event.dataTransfer.effectAllowed = 'move';
		event.dataTransfer.dropEffect = 'move';
		const start = i;
		event.dataTransfer.setData('text/plain', start);
	};
</script>

<div class="px-2">
	<a href="/">Home</a>
	<div class="list">
		{#each data.items as item, index}
			<div
				class="flex items-center my-2 mr-4"
				draggable={true}
				on:dragstart={(event) => dragstart(event, index)}
				on:drop|preventDefault={(event) => drop(event, index)}
				ondragover="return false"
				on:dragenter={() => (hovering = index)}
				class:is-active={hovering === index}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 cursor-grab active:cursor-grabbing"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
					/>
				</svg>

				<div class="flex items-center">
					<img src={item.logo} alt="" />
					<p class="ml-4">{item.brand_id}</p>
				</div>
			</div>
		{/each}
	</div>
	<button
		class="bg-blue-700 px-3.5 py-1 w-max mx-auto text-white rounded-md mt-2"
		on:click={async () => {
			// update
			try {
				// const res =
				await fetch('/api/items', {
					method: 'POST',
					body: JSON.stringify(data.items)
				});
				// data.items = await res.json();
			} catch (error) {
				console.log(error);
			}
		}}
	>
		Update
	</button>
</div>

<style>
	.list {
		background-color: white;
		border-radius: 4px;
		box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
		width: max-content;
		padding: 5px;
	}
</style>
