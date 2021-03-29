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
    class="parent_container "
    transition:fly={{ y: -$window.height, duration: 300 }}
  >
    <div class="parent ">
      <div
        class="container relative grid gap-x-l_gap_column gap-y-l_gap_row  mx-md "
      >
        <div class="row-start-1 row-span-1 col-start-1  col-span-1 my-auto">
          <Link href="../" bind:alive>
            <Logo />
          </Link>
        </div>
        <div class=" row-start-1 row-span-1 col-start-3 col-span-1 my-auto">
          <Buton white={false} bind:alive link="./search">Caută</Buton>
        </div>
        <div class=" row-start-1 row-span-1 col-start-6 col-span-1 my-auto">
          <Buton white={false} bind:alive link="./loginto">Intra in cont</Buton>
        </div>
        <div class="col-start-4 col-end-5 row-start-1  my-auto ">
          <Buton white={false} bind:alive link="./">Plagiat</Buton>
        </div>
        <div class="col-start-5 col-end-6 row-start-1 my-auto">
          <Buton white={false} bind:alive link="./">Profesori</Buton>
        </div>
        <div
          class="row-start-3 row-span-1 col-start-1 col-span-3 my-auto text-lg"
        >
          Despre lucrare
        </div>
        <div
          class="row-start-4 row-span-1 col-start-1 col-span-1 my-auto text-base text-center"
        >
          Tip
        </div>
        <div class="row-start-4 row-span-1 col-start-2 col-span-1 my-auto">
          <button
            on:click={() => {
              isessay = true
            }}
            class="bg-opacity-0 focus:outline-none focus:md:underline my-auto text-base mx-auto"
            >Eseu</button
          >
        </div>
        <div class="row-start-4 row-span-1 col-start-3 col-span-1 my-auto">
          <button
            on:click={() => {
              isessay = false
            }}
            class="bg-opacity-0 focus:outline-none focus:md:underline my-auto text-base mx-auto"
            >Caracterizare</button
          >
        </div>
        {#if isessay}
          <div
            transition:fly={{ x: -100, duration: 100 }}
            class="row-start-5 row-span-1 col-start-1 col-span-1 my-auto text-center text-base"
          >
            Titlu
          </div>
          <div
            transition:fly={{ x: -100, duration: 100 }}
            class="row-start-5 row-span-1 col-start-2 col-span-2 my-auto"
          >
            <input
              class=" w-full h-full bg-opacity-0 bg-white text-center"
              placeholder="Scrie aici titlul..."
              bind:value={name}
            />
          </div>
        {:else}
          <div
            transition:fly={{ x: -100, duration: 100 }}
            class="row-start-5 row-span-1 col-start-1 col-span-1 my-auto text-center text-base"
          >
            Personaj
          </div>
          <div
            transition:fly={{ x: -100, duration: 100 }}
            class="row-start-5 row-span-1 col-start-2 col-span-2 my-auto"
          >
            <input
              class=" w-full h-full bg-opacity-0 bg-white text-center"
              placeholder="Scrie aici numele personajului..."
              bind:value={name}
            />
          </div>
        {/if}
        <div
          class="row-start-8 row-span-1 col-start-3 col-span-1 my-auto mx-auto w-full h-full bg-blue publish"
        >
          <button class="w-full h-full mx-auto my-auto text-white">
            Publică
          </button>
        </div>
        <div
          class="row-start-8 row-span-1 col-start-4 my-auto col-span-1 bg-oppacity-0 publish"
        >
          <Buton white={false} bind:alive link="../upload">Înapoi</Buton>
        </div>
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
    margin-top: 6.66%;
    margin-left: 24%;
    margin-right: 24%;
    margin-bottom: 12%;
    position: relative;
    z-index: 1;
  }
  button {
    display: block;
  }
  .parent_container {
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(100px);
  }
</style>
