<script lang="ts">
  import { auth } from '../stores/auth'
  import Buton from './buton.svelte'
  export let alive: boolean
  export let white: boolean
</script>

{#if auth}
  <Buton {white} bind:alive link="/my_account">Contul meu</Buton>
{:else}
  <Buton {white} bind:alive link="../">Intra in cont</Buton>
{/if}
