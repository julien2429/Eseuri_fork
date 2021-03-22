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
  import { fly, fade } from 'svelte/transition'
  import { cubicOut as easing } from 'svelte/easing'
  import { backIn } from 'svelte/easing'
  import { onMount } from 'svelte'

  let eseuri_chosen = true
  function show_eseuri() {
    eseuri_chosen = true
  }

  let name = 'Scrie-ți aici numele de familie...'
  let surname = 'Scrie-l aici prenumele'
  let school = 'Scrieți aici școala de proveniență...'
  function handleClick() {
    alert('clicked')
  }
  function selectClick() {}
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
  />
{/if}

<div class="parent">
  <div class="grid grid-rows-auto grid-cols-6 gap-x-3 gap-y-2">
    <div class="font-sans">
      <div class="textbox text">
        <div class="row-start-1 col-start-1 row-end-1 col-end-1">
          Autentificare
        </div>
        <div class="row-start-3 col-start-1 row-end-3 col-end-1 ">
          <div class="buttonfb">Continuă cu<span class="iconfb" /></div>
        </div>
      </div>
    </div>
    <div class="row-start-1 row-end-3 col-start-4 col-end-6 title">
      <h1 class="title font-serif">
        Eseuri
        <z style="color:#FFA500">.</z>
      </h1>
    </div>
    <div class="row-start-4 row-end-4 col-start-4 col-end-5 text font-sans">
      Perfecționează-ți-le cu cea mai extinsă colecție din România!
    </div>
  </div>
</div>

<style>
  .buttonfb {
  }
  span.iconfb {
    background: url('/assets/Vectorfb.svg') transparent 5px 50% no-repeat;
    display: inline-block;
    vertical-align: right;
    width: 42px;
    height: 42px;
  }
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 130px;
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.07em;
  }

  .bigtext {
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 34px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    letter-spacing: -0.07em;
  }

  .text {
    width: 210px;
    height: 50px;
    left: 0px;
    top: 0px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.07em;
  }

  .textbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;

    background: rgba(252, 250, 249, 0.5);
    border: 1px solid #000000;
    box-sizing: border-box;
    backdrop-filter: blur(100px);
    border-radius: 10px;
  }

  .butt {
    width: 91px;
    height: 50px;
    left: 0px;
    top: 0px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .parent {
    margin-top: 21%;
    margin-left: 24%;
    margin-right: 24%;
    margin-bottom: 12%;
    position: fixed;
    z-index: 1;
  }
  button {
    display: block;
  }
</style>
