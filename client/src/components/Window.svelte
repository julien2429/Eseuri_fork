<script context="module" lang="ts">
  import { writable } from 'svelte/store'

  export const store = writable({ width: 0, height: 0 })
</script>

<script lang="ts">
  let innerWidth: number, innerHeight: number

  $: $store.width = innerWidth
  $: $store.height = innerHeight
</script>

<svelte:window bind:innerWidth bind:innerHeight />
