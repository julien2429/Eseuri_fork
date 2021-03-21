<script lang="ts">
  import { Carousel } from 'renderless-svelte'
  import type { CarouselControls } from 'renderless-svelte'
  import Queue from '../queue'
  import Link from '../components/Link.svelte'
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
  import { cubicOut as easing } from 'svelte/easing'
  import { backIn } from 'svelte/easing'
  let eseuri = [
    { name: 'Ion', scriitor: 'Liviu Rebreanu' },
    { name: 'O scrisoare pierduta', scriitor: 'I.L. Caragiale' },
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
  let alive = true
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
    class="parent relative"
    transition:fly={{ y: -$window.height, duration: 300 }}
  >
    <div class="container">
      <div class="top_bar">
        <Logo />
        <div class="col-start-3 col-end-6 my-auto">
          <Search
            page_name={undefined}
            isAtHome={true}
            isBig={false}
            bind:alive
          />
        </div>
        <Buton white={true} bind:alive link="/loginto/index"
          >Intra in cont</Buton
        >
      </div>
      <div class="ajutator">
        <Buton white={true} bind:alive link="./">Plagiat</Buton>
        <Buton white={true} bind:alive link="./">Profesori</Buton>
      </div>
      <div class="tip_referat ">
        <button
          class="bg-white bg-opacity-0 focus:outline-none outline-none focus:md:underline"
          on:click={show_eseuri}>Eseuri</button
        >
        <button
          class="bg-white bg-opacity-0 focus:outline-none focus:md:underline"
          on:click={show_caracterizari}>Caracterizari</button
        >
      </div>
      <div class=" grid col-span-1 col-start-6 row-span-1 row-start-3">
        <UploadButton />
      </div>
      {#if eseuri_chosen == true}
        <div
          class="eseuri overflow-x-visible"
          transition:fly={{ x: -100, duration: 100 }}
        >
          {#each eseuri as { name, scriitor }}
            <div class="h-full w-full">
              <Eseu bind:alive {name} {scriitor} white={false} />
            </div>
          {/each}
        </div>
      {:else}
        <div class="eseuri " transition:fly={{ x: 100, duration: 100 }}>
          {#each caracterizari as { name, scriitor }}
            <Eseu bind:alive {name} {scriitor} white={false} />
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
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
  .top_bar {
    grid-column: 1 / -1;
    grid-row: 1 / span 1;
    display: inherit;
    grid-template-columns: inherit;
    column-gap: inherit;
    height: 100%;
  }
  .ajutator {
    grid-column: 4/-1;
    grid-row: 2 / span 1;
    row-gap: inherit;
    display: inherit;
    grid-template-columns: repeat(2, var(--l_column));
    column-gap: inherit;
    height: 100%;
  }
  .tip_referat {
    grid-column: 3 / -1;
    grid-row: 4 / span 1;
    display: inherit;
    grid-template-columns: repeat(2, var(--l_column));
    column-gap: inherit;
    height: 100%;
  }
  .parent {
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
    max-width: fit-content;
    z-index: 1;
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
    z-index: 3;
  }
</style>
