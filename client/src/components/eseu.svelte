<script lang="ts">
  import { goto, url } from '@roxi/routify'
  import Link from './Link.svelte'

  export let name: string
  export let scriitor: string
  export let alive: boolean
  export let white: boolean
</script>

<Link bind:alive href={`/essays/${name}`}>
  {#if white}
    <div
      class="relative grid blur_white border-2 w-full h-full "
      class:text-white={white}
      class:border-white={white}
      class:border-1={!white}
      class:border-black={!white}
      class:text-black={!white}
    >
      <titlu class=" text-prose my-auto ml-sm">{name}</titlu>
      <p class=" ml-sm">{scriitor}</p>
    </div>
  {:else}
    <div
      class="relative grid blur border-2 w-full h-full "
      class:text-white={white}
      class:border-white={white}
      class:border-1={!white}
      class:border-black={!white}
      class:text-black={!white}
    >
      <titlu class=" text-prose my-auto ml-sm">{name}</titlu>
      <p class=" ml-sm">{scriitor}</p>
    </div>
  {/if}
</Link>

<style>
  .blur_white {
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
    backdrop-filter: blur(100px);
    border-radius: 10px;
    row-gap: var(--l_gap_row);
    grid-template-rows: repeat(2, var(--l_row));
  }
  .blur {
    backdrop-filter: blur(100px);
    border-radius: 10px;
    row-gap: var(--l_gap_row);
    grid-template-rows: repeat(2, var(--l_row));
  }
</style>
