<script lang="ts">
  import { goto, metatags, ready, url } from '@roxi/routify'
  import { store as orange } from '../components/blob/Orange.svelte'
  import { store as red } from '../components/blob/Red.svelte'
  import { store as blue } from '../components/blob/Blue.svelte'
  import { store as window } from '../components/Window.svelte'
  import { onMount } from 'svelte'
  import Buton from '../components/buton.svelte'
  import Search from '../components/search_bar.svelte'
  import UploadButton from '../components/upload_button.svelte'
  import Eseu from '../components/eseu.svelte'
  import Logo from '../components/logo.svelte'
  import { fly, fade } from 'svelte/transition'

  let eseuri = [
    { name: 'Ion', scriitor: 'Liviu Rebreanu' },
    { name: 'O scrisoare gasita', scriitor: 'I.L. Caragiale' },
    {
      name: 'Ultima noapte de dragoste. Intaia noapte de razboi',
      scriitor: 'Camil Petrescu',
    },
    { name: 'Moara cu noroc', scriitor: 'Ioan Slavici' },
    { name: 'Morometii', scriitor: 'Marin Preda' },
    { name: 'Povestea lui Harap-Alb', scriitor: 'Ion Creanga' },
    { name: 'La tiganci', scriitor: 'Mircea Eliade' },
    { name: 'Baltagul', scriitor: 'Mihail Sadoveanu' },
    { name: 'In gradina Ghetsemani', scriitor: 'Vasile Voiculescu' },
    { name: 'Creanga de aur', scriitor: 'Liviu Rebreanu' },
  ]
  let caracterizari = [
    { name: 'Ion', scriitor: 'Liviu Rebreanu' },
    { name: 'O scrisoare pierduta', scriitor: 'I.L. Caragiale' },
    {
      name: 'Ultima noapte de dragoste. Intaia noapte de razboi',
      scriitor: 'Camil Petrescu',
    },
    { name: 'Moara cu noroc', scriitor: 'Ioan Slavici' },
  ]
  let eseuri_chosen = true
  function show_eseuri() {
    eseuri_chosen = true
  }
  function show_caracterizari() {
    eseuri_chosen = false
  }

  metatags.title = 'Eseuri'

  let mounted = true

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

  let alive = true

  $: if (mounted) {
    $orange.x = 0
    $orange.y = $window.height - orange.height
    $red.x = $window.width - red.width * 1.5
    $red.y = $window.height - red.height * 0.45
    $blue.x = ($window.width - blue.width * 0.8) / 2
    $blue.y = -blue.height * 0.635 + $window.height * 0.17
  }
</script>

{#if alive}
  <div class="w-full flex flex-row justify-center flex-wrap relative">
    <div
      class=" z-0 relative mt-xlg  "
      transition:fly={{ y: -$window.height, duration: 300 }}
    >
      <div
        class="container relative w-full grid gap-x-l_gap_column gap-y-l_gap_row  mx-md "
      >
        <div class="row-start-1 row-span-1 col-start-1  col-span-1 my-auto">
          <Logo />
        </div>
        <div class=" row-start-1 row-span-1 col-start-3 col-end-6 my-auto">
          <Search
            page_name={undefined}
            isAtHome={true}
            isBig={false}
            bind:alive
          />
        </div>
        <div class=" row-start-1 row-span-1 col-start-6 col-span-1 my-auto">
          <Buton white={true} bind:alive link="./loginto">Intra in cont</Buton>
        </div>
        <div class="col-start-4 col-end-5 row-start-2  my-auto ">
          <Buton white={true} bind:alive link="./">Plagiat</Buton>
        </div>
        <div class="col-start-5 col-end-6 row-start-2  my-auto">
          <Buton white={true} bind:alive link="./">Profesori</Buton>
        </div>
        <div class=" col-start-3 col-end-4 row-start-4  m-auto my-auto ">
          <button
            class="  bg-white bg-opacity-0 focus:outline-none outline-none focus:md:underline "
            on:click={show_eseuri}>Eseuri</button
          >
        </div>
        <div class="col-start-4 col-end-5 row-start-4  m-auto my-auto">
          <button
            class="bg-white bg-opacity-0 focus:outline-none focus:md:underline  my-auto"
            on:click={show_caracterizari}>Caracterizari</button
          >
        </div>
        <div class="col-span-1 col-start-6 row-span-1 row-start-3 mx-auto">
          <UploadButton />
        </div>
        {#if eseuri_chosen == true}
          <div
            class="eseuri grid row-start-5  col-start-1 col-end-7 overflow-x-visible w-full h-full gap-x-l_gap_column gap-y-l_gap_row "
            transition:fly={{ x: -100, duration: 100 }}
          >
            {#each eseuri as { name, scriitor }}
              <div rel="preload" class="h-full w-full">
                <Eseu bind:alive {name} {scriitor} white={false} />
              </div>
            {/each}
          </div>
        {:else}
          <div
            class="eseuri grid row-start-5 col-start-1 col-end-7 overflow-x-visible w-full h-full gap-x-l_gap_column gap-y-l_gap_row "
            transition:fly={{ x: 100, duration: 100 }}
          >
            {#each caracterizari as { name, scriitor }}
              <Eseu bind:alive {name} {scriitor} white={false} />
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .eseuri {
    grid-template-columns: repeat(
      auto-fit,
      minmax(calc(var(--l_column) * 2 + var(--l_gap_column)), 1fr)
    );
    grid-auto-rows: calc(var(--l_row) * 2 + var(--l_gap_row));
    max-width: calc(var(--l_column) * 6 + var(--l_gap_column) * 5);
  }
  .container {
    background-color: transparent;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: var(--l_row);
    max-width: calc(var(--l_column) * 6 + var(--l_gap_column) * 5);
  }
</style>
