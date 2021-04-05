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
  let name = ''
  let isstudent = true
  metatags.title = 'Eseuri'

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
      x: $window.width - red.width * 1,
      y: 0,
      scale: 2,
      rotate: 0,
      flip: {
        x: 0,
        y: 0,
      },
      zIndex: -1,
    }
    $blue = {
      x: $window.width * 0.65,
      y: $window.height * 0.9,
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
    $red.x = $window.width - red.width * 1
    $red.y = 0
    $blue.x = $window.width * 0.65
    $blue.y = $window.height * 0.9
  }
</script>

{#if alive}
  <div
    class="blur w-full h-screen "
    transition:fly={{ y: -$window.height, duration: 300 }}
  >
    <div
      class="container relative grid gap-x-l_gap_column gap-y-l_gap_row mt-xlg mx-auto"
    >
      <div class="row-start-1 row-span-1 col-start-1  col-span-1 my-auto">
        <Link href="../" bind:alive>
          <Logo />
        </Link>
      </div>
      <div
        class="row-start-3 row-span-1 col-start-1 col-span-3 my-auto text-md"
      >
        Completează-ți profilul
      </div>
      <div
        class="row-start-4 row-span-1 col-start-1 col-span-1 my-auto text-base text-center"
      >
        Numele tău
      </div>
      <div class="row-start-4 row-span-1 col-start-2 col-span-2 my-auto">
        <input
          class=" w-full h-full bg-opacity-0 bg-white text-center"
          placeholder="Scrie-ți aici numele de familie..."
          bind:value={name}
        />
      </div>
      <div
        class="row-start-5 row-span-1 col-start-1 col-span-1 my-auto text-base text-center"
      >
        Prenumele tău
      </div>
      <div class="row-start-5 row-span-1 col-start-2 col-span-2 my-auto">
        <input
          class=" w-full h-full bg-opacity-0 bg-white text-center"
          placeholder="Scrie-ți aici prenumele ..."
          bind:value={name}
        />
      </div>
      <div
        class="row-start-6 row-span-1 col-start-1 col-span-1 my-auto text-base text-center"
      >
        Școala ta
      </div>
      <div class="row-start-6 row-span-1 col-start-2 col-span-2 my-auto">
        <input
          class=" w-full h-full bg-opacity-0 bg-white text-center"
          placeholder="Scrie aici numele școlii... ..."
          bind:value={name}
        />
      </div>
      <div
        class="row-start-7 row-span-1 col-start-1 col-span-1 my-auto text-base text-center"
      >
        Ocupația ta
      </div>
      <div
        class="row-start-7 row-span-1 col-start-2 col-span-1 my-auto text-center"
      >
        <button
          on:click={() => {
            isstudent = true
          }}
          class="bg-opacity-0 focus:outline-none focus:md:underline my-auto text-base"
          >Elev</button
        >
      </div>
      <div
        class="row-start-7 row-span-1 col-start-3 col-span-1 my-auto text-center"
      >
        <button
          on:click={() => {
            isstudent = false
          }}
          class=" relative bg-opacity-0 focus:outline-none focus:md:underline my-auto text-base"
          >Profesor</button
        >
      </div>
      <div
        class="row-start-8 row-span-1 col-start-3 col-span-1 my-auto mx-auto w-full h-full bg-blue publish"
      >
        <button class="w-full h-full mx-auto my-auto text-white">
          Sunt gata
        </button>
      </div>
      <div
        class="row-start-8 row-span-1 col-start-4 my-auto col-span-1 bg-oppacity-0 publish"
      >
        <Buton white={false} bind:alive link="../">Înapoi</Buton>
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
  .blur {
    backdrop-filter: blur(100px);
  }
</style>
