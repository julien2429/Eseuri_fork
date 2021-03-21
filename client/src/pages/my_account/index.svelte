<script lang="ts">
  import Link from '../../components/Link.svelte'
  import Logo from '../../components/logo.svelte'
  import Buton from '../../components/buton.svelte'
  import UploadButton from '../../components/upload_button.svelte'
  import { store as orange } from '../../components/blob/Orange.svelte'
  import { store as red } from '../../components/blob/Red.svelte'
  import { store as blue } from '../../components/blob/Blue.svelte'
  import { store as window } from '../../components/Window.svelte'
  import { onMount, tick } from 'svelte'
  import { fly, fade } from 'svelte/transition'
  let mounted: boolean = true
  onMount(() => {
    $orange.zIndex = -1
    $blue.zIndex = -3
    $red.zIndex = -2
    $orange = {
      ...$orange,
      x: -orange.width * 1.4,
      y: $window.height - orange.height,
      scale: 1.8,
      rotate: 0,
      flip: {
        x: 0,
        y: 0,
      },
    }
    $blue = {
      ...$blue,
      x: -$window.width,
      y: -$window.height,
      scale: 13.5,
      rotate: 0,
      flip: {
        x: 0,
        y: 0,
      },
    }
    $red = {
      ...$red,
      x: $window.width / 2.4,
      y: -$window.height / 1.7,
      scale: 6,
      rotate: 0,
      flip: {
        x: 1,
        y: 1,
      },
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
  <div class=" w-full h-full big_cont relative">
    <div class="parent relative " transition:fly={{ y: -1000, duration: 300 }}>
      <div class="container">
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
