<script lang="ts">
  import { goto, metatags, ready, url, isActive } from '@roxi/routify'
  import Search_icon from './Search_Icon.svelte'
  import { tick } from 'svelte'
  export let page_name: string | undefined
  let Place_holder: string | undefined
  if (page_name === undefined) {
    Place_holder = 'Cauta'
  } else {
    Place_holder = decodeURI(page_name)
  }
  export let isBig = false
  export let isAtHome = false
  export let alive: boolean
  let element: string
  let address: string
  let go: boolean
  async function goTo(href: string) {
    if (isAtHome) alive = false
    else alive = true
    await tick()
    $goto(href)
  }
  function handleKeydown(event: KeyboardEvent) {
    console.log(event.keyCode)
    if (event.keyCode == 13) {
      if (isAtHome) {
        address = './search/' + element
      } else {
        address = './' + element
      }
      goTo(address)
    }
  }
</script>

<div class="flex flex-row">
  <Search_icon />
  <input
    type="text"
    class=" relative z-3 my-auto  bg-white bg-opacity-0 placeholder-white focus:outline-none outline-none text-white ml-sm w-full"
    class:text-md={isBig}
    placeholder={Place_holder}
    bind:value={element}
    on:keydown={handleKeydown}
  />
</div>

<style>
  input:focus::placeholder {
    color: transparent;
  }
</style>
