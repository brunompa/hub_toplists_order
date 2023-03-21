<script>
	export let data;
</script>

<a href="/admin">Admin</a>
<div class="flex w-full text-center bg-yellow-500 py-4">
	<div class="w-3/12">Casino</div>
	<div class="w-3/12">Bonus</div>
	<div class="w-3/12">Features</div>
	<div class="w-3/12">Play</div>
</div>
{#each data.items.toplists[575].sort((a, b) => a.position - b.position) as item}
	<div class="w-full flex py-2 divide-y ">
		<div class="w-3/12 my-auto text-center">
			<img class="mx-auto w-full" src={item.logo} alt="website logo" />
			<a href={item.play_url}>Review</a>
		</div>
		<div class="w-3/12 my-auto text-center">
			<div class="flex mx-auto w-min">
				{#each [0, 1, 2, 3, 4] as i}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke-width="2"
						class="w-6 h-6 star {i < item.info.rating ? 'fill' : ''}"
					>
						<path
							fill-rule="evenodd"
							d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
							clip-rule="evenodd"
						/>
					</svg>
				{/each}
			</div>
			<p class="w-10/12 mx-auto">{item.info.bonus}</p>
		</div>
		<div class="w-3/12 my-auto">
			<p class="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
						clip-rule="evenodd"
					/>
				</svg>

				{item.info.features}
			</p>
		</div>
		<div class="w-3/12 my-auto">
			<a class="grid" href={item.play_url}
				><button
					class="bg-green-700 px-9 py-4 w-max mx-auto text-white underline rounded-md font-semibold"
					>PLAY NOW</button
				></a
			>
			{@html item.terms_and_conditions}
		</div>
	</div>
{/each}
