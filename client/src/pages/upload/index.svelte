<script lang="ts">
  import Link from '../../components/Link.svelte'
  import Logo from '../../components/logo.svelte'
  import { metatags } from '@roxi/routify'
  import { store as orange } from '../../components/blob/Orange.svelte'
  import { store as red } from '../../components/blob/Red.svelte'
  import { store as blue } from '../../components/blob/Blue.svelte'
  import { store as window } from '../../components/Window.svelte'
  import { fly } from 'svelte/transition'
  import { onMount } from 'svelte'
  import Buton from '../../components/buton.svelte'
  import Index from '../index.svelte'
  let name = ''
  let surname = ''
  let school = ''
  let isessay = true

  let mounted = false
  onMount(() => {
    $orange = {
      x: 0,
      y: $window.height - orange.height,
      scale: 1.8,
      rotate: 0,
      flip: {
        x: 0,
        y: 0,
      },
      zIndex: -1,
    }
    $red = {
      x: $window.width - red.width * 1.5,
      y: $window.height - red.height * 0.45,
      scale: 2,
      rotate: 180 + 26.7,
      flip: {
        x: 1,
        y: 0,
      },
      zIndex: -1,
    }
    $blue = {
      x: ($window.width - blue.width * 0.8) / 2,
      y: -blue.height * 0.635 + $window.height * 0.17,
      scale: 1.5,
      rotate: 0,
      flip: {
        x: 0,
        y: 0,
      },
      zIndex: -1,
    }
    mounted = true
  })

  export let alive = true
  $: if (mounted) {
    $orange.y = $window.height - orange.height
    $red.x = $window.width - red.width * 1.5
    $red.y = $window.height - red.height * 0.45
    $blue.x = ($window.width - blue.width * 0.8) / 2
    $blue.y = -blue.height * 0.635 + $window.height * 0.17
  }
</script>

{#if alive}
  <div
    class="parent_container w-full flex flex-row justify-center flex-wrap relative"
    transition:fly={{ y: -$window.height, duration: 300 }}
  >
    <div class="parent relative mt-xlg ">
      <div
        class="container relative grid gap-x-l_gap_column gap-y-l_gap_row  mx-md "
      >
        <div class="row-start-4 row-span-2 col-start-4 col-end-6">
          <div class="title font-serif font-bold ">
            Eseuri<span class="text-orange">.</span>
          </div>
        </div>
        <div
          class="row-start-2 row-end-8 col-start-1 col-span-2 border-black bg-opacity-40 border bg-white white_thing"
        />
      </div>
    </div>
  </div>
{/if}

<style>
  .container {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: var(--l_row);
    max-width: calc(var(--l_column) * 6 + var(--l_gap_column) * 5);
  }
  .publish {
    border-radius: 20px;
  }
  button:focus {
    outline: 0px orange;
  }
  .parent {
  }
  button {
    display: block;
  }
  .parent_container {
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(100px);
  }
  .title {
    top: 0%;
    font-size: 96px;
  }
  .white_thing {
    position: relative;
    margin-left: calc(-1 * (var(--l_gap_column)));
    margin-top: calc(-1 * (var(--l_gap_row)));
    border-radius: 20px;
    width: calc((var(--l_gap_column) * 3) + (var(--l_column) * 2));
    height: calc((var(--l_gap_row) * 7) + (var(--l_row) * 6));
  }
</style>
