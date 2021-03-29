<script lang="ts">
  import Link from '../../components/Link.svelte'
  import Logo from '../../components/logo.svelte'
  import { metatags } from '@roxi/routify'
  import { store as orange } from '../../components/blob/Orange.svelte'
  import { store as red } from '../../components/blob/Red.svelte'
  import Blue, { store as blue } from '../../components/blob/Blue.svelte'
  import { store as window } from '../../components/Window.svelte'
  import { fly } from 'svelte/transition'
  import { onMount } from 'svelte'
  import Buton from '../../components/buton.svelte'
  import Index from '../index.svelte'
  import App from '../../App.svelte'
  import Google_Docs from '../../../assets/VectorGoogle_Docs.svg'
  import Blob from '../../components/blob/internal/Blob.svelte'
  import Eseu from '../../components/eseu.svelte'

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
          <Link href="../" bind:alive>
            <div class="title font-serif font-bold ">
              Eseuri<span class="text-orange">.</span>
            </div>
          </Link>
        </div>
        <div
          class="row-start-2 row-end-8 col-start-1 col-end-3 border-black bg-opacity-20 border bg-white white_thing relative"
        />
        <div
          class="row-start-2 row-end-3 col-start-1 col-end-3 mx-auto my-auto border-black relative"
        >
          Publică o lucrare
        </div>

        <div
          class=" flex row-start-3 row-end-4 col-start-1 frame col-end-3 border border-black"
        >
          <div class="mx-sm my-auto bold  w-1/2 relative">Scrie-o aici</div>
          <div class="flex w-1/2 my-auto justify-end">
            <img
              src="../../../assets/VectorScrie_aici.svg"
              alt="Scrie aici"
              class="mr-sm"
            />
          </div>
        </div>
        <div class="row-start-4 row-end-5 col-start-1 col-end-3  ">
          <Link bind:alive href="../upload_configure">
            <div class="flex w-full h-full frame bg-blue relative">
              <div class="ml-sm my-auto bold w-auto text-white  ">
                Încarcă un document
              </div>
              <div class="flex w-1/2 my-auto justify-end">
                <img
                  src="../../../assets/VectorIncarca_un_document.svg"
                  alt="Scrie aici"
                  class="mr-sm"
                />
              </div>
            </div>
          </Link>
        </div>
        <div
          class="flex  row-start-5 row-end-6 col-start-1 frame col-end-3 text-white frame_google  relative"
        >
          <div class="ml-sm my-auto bold w-auto  ">Încarcă din Google Docs</div>
          <div class="flex w-1/2 my-auto justify-end">
            <img
              src="../../../assets/VectorGoogle_Docs.svg"
              alt="Scrie aici"
              class="mr-sm"
            />
          </div>
        </div>
        <div
          class="row-start-6 row-end-7 col-start-1 frame col-end-3  relative mx-auto my-auto"
        >
          Ai scris de mână?
        </div>
        <div
          class=" flex row-start-7 row-end-8 col-start-1 frame w-full h-full col-end-3 bg-red relative"
        >
          <div class=" mx-sm my-auto bold text-white w-1/2 relative">
            Încarcă imagini/PDF
          </div>
          <div class="flex w-1/2 my-auto justify-end">
            <img
              src="../../../assets/Vectorincarca_imagini.svg"
              alt="Scrie aici"
              class="mr-sm"
            />
          </div>
        </div>

        <div class="row-start-6 row-span-1 col-start-4 col-end-6 ">
          Perfecționează-ți-le cu cea mai extinsă colecție din România!
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
  .frame {
    border-radius: 20px;
  }
  .frame_google {
    background-color: #337dfa;
  }
</style>
