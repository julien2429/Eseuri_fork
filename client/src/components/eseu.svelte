<script lang="ts">
  import { goto, url } from '@roxi/routify'
  import Link from './Link.svelte'

  export let name: string
  export let scriitor: string
  export let alive: boolean
</script>

<Link bind:alive href={`./essays/${name}`}>
  <div class="relative blur border-black border-1 w-full h-full">
    <h3>{name}</h3>
    <p>{scriitor}</p>
  </div>
</Link>

<style>
  .blur {
    backdrop-filter: blur(100px);
    border-radius: 10px;
  }
</style>
