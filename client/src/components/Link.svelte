<script lang="ts">
  import { tick } from 'svelte'
  import { goto, url, isActive } from '@roxi/routify'

  async function goTo(href: string) {
    alive = false
    await tick()
    $goto(href)
  }

  export let href: string
  export let alive: boolean

  $: disabled = $isActive(href)
</script>

<a
  href={$url(href)}
  on:click|preventDefault={() => goTo(href)}
  class="w-auto h-auto"
  class:pointer-events-none={disabled}
>
  <slot />
</a>
