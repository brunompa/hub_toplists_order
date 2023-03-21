<script>
	export let data;
</script>

{#each data.items.toplists[575] as item}
	<div class="w-3/12 my-auto">
		<img class="mx-auto w-full" src={item.logo} alt="website logo" />
	</div>
{/each}
