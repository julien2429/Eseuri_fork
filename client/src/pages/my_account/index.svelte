<script lang="ts">
  import Eseu from '../../components/eseu.svelte'
  import Link from '../../components/Link.svelte'
  import Logo from '../../components/logo.svelte'
  import Buton from '../../components/buton.svelte'
  import UploadButton from '../../components/upload_button.svelte'
  import Fav_button from '../../components/Fav_Button.svelte'
  import Next from '../../components/next_essay.svelte'
  import Back from '../../components/last_essay.svelte'
  import { metatags, ready, url, goto } from '@roxi/routify'
  import { store as orange } from '../../components/blob/Orange.svelte'
  import { store as red } from '../../components/blob/Red.svelte'
  import { store as blue } from '../../components/blob/Blue.svelte'
  import { store as window } from '../../components/Window.svelte'
  import Search from '../../components/search_bar.svelte'
  import { onMount, tick } from 'svelte'
  import { fly, fade } from 'svelte/transition'
  let mounted: boolean = true
  onMount(() => {
    $orange = {
      x: -orange.width * 1.4,
      y: $window.height - orange.height,
      scale: 1.8,
      rotate: 0,
      flip: {
        x: 0,
        y: 0,
      },
      zIndex: -1,
    }
    $blue = {
      x: -$window.width,
      y: -$window.height,
      scale: 13.5,
      rotate: 0,
      flip: {
        x: 0,
        y: 0,
      },
      zIndex: -3,
    }
    $red = {
      x: $window.width / 2.4,
      y: -$window.height / 1.7,
      scale: 6,
      rotate: 0,
      flip: {
        x: 1,
        y: 1,
      },
      zIndex: -2,
    }
    mounted = true
  })

  let alive = true
  console.log(alive)
  $: if (mounted) {
    $orange.x = -orange.width * 2.4
    $orange.y = $window.height - orange.height
    $blue.x = -$window.width
    $blue.y = -$window.height
    $blue.scale = 13.5
    $red.x = $window.width / 2.4
    $red.y = -$window.height / 1.7
    $red.scale = 6
    $red.flip.x = 1
    $red.flip.y = 1
  }
</script>

{#if alive}
  <div class=" w-screen h-screen big_cont relative">
    <div class="parent relative " transition:fly={{ y: +1000, duration: 300 }}>
      <div class="container ">
        <Link bind:alive href="../">
          <Logo white={true} />
        </Link>
        <div class="col-start-4 col-span-1 m-auto">
          <Buton white={true} bind:alive link="../">Plagiat</Buton>
        </div>
        <div class="col-start-5 col-span-1 m-auto">
          <Buton white={true} bind:alive link="../">Profesori</Buton>
        </div>
        <div class="col-start-6 col-span-1 m-auto">
          <Buton white={true} bind:alive link="../">Contul meu</Buton>
        </div>
        <div class=" grid  col-start-6 col-span-1 row-span-1 row-start-2">
          <UploadButton />
        </div>
        <div
          class=" col-start-1 col-span-3 row-start-4 row-span-1 text-white text-md left-sm"
        >
          Contul meu
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .big_cont {
    z-index: -2;
  }
  .eseuri {
    grid-column: 1/-1;
    grid-row: 5;
    display: inherit;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(var(--l_row) * 2 + var(--l_gap_row));
    column-gap: 30px;
    row-gap: inherit;
    z-index: 3;
    width: 100%;
    height: 100%;
  }
  .parent {
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
    max-width: fit-content;
  }
  .container {
    position: relative;
    width: 100%;
    display: grid;
    column-gap: var(--l_gap_column);
    background-color: transparent;
    grid-template-columns: repeat(6, var(--l_column));
    grid-auto-rows: var(--l_row);
    row-gap: var(--l_gap_row);
    z-index: 10;
  }
</style>
