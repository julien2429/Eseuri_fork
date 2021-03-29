<script lang="ts">
  import Link from './Link.svelte'
  export let link: string
  export let alive: boolean
</script>

<Link href={link} bind:alive>
  <button
    class="bg-orange rounded-full m-auto focus:outline-none outline-none focus:md:underline"
  >
    <img class="mx-auto my-auto" alt="upload" src="../assets/VectorCross.svg" />
  </button>
</Link>

<style>
  img {
    width: calc(var(--l_row) / 3);
  }
  button {
    width: calc(var(--l_row) * 1.08);
    height: calc(var(--l_row) * 1.08);
    filter: drop-shadow(var(--shadow));
  }
</style>
