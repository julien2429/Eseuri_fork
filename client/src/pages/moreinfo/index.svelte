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

  let name = ''
  let surname = ''
  let school = ''
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
    class="parent_container overflow-x-hidden"
    transition:fly={{ y: -1000, duration: 300 }}
  >
    <div class="blurry  w-full h-full overflow-x-hidden">
      <div class="parent relative">
        <div class="grid gap-y-5 grid-rows-7 grid-cols-1 gap-x-0">
          <div class="row-start-1 ">
            <Link href="../" bind:alive><Logo /></Link>
          </div>
          <div class="row-start-3 ">
            <h1 class="bigtext">Completează-ți profilul</h1>
          </div>

          <div class="text row-start-4 row-end-4 ">
            <div class="grid grid-rows-1 grid-cols-6 gap-x-7 gap-y-2">
              <div class="col-start-1 col-span-1">Numele tău</div>
              <div class="col-start-2 col-span-4">
                <input
                  bind:value={name}
                  class="input"
                  placeholder="Scrieți aici numele de familie..."
                />
              </div>
            </div>
          </div>

          <div class="text row-start-5 row-end-5">
            <div class="grid grid-rows-1 grid-cols-6 gap-x-7 gap-y-2">
              <div class="col-start-1 ">Prenumele tău</div>
              <div class="col-start-2 col-span-4">
                <input
                  bind:value={surname}
                  class="input"
                  placeholder="Scrieți aici prenumele..."
                />
              </div>
            </div>
          </div>

          <div class="text row-start-6 row-end-6">
            <div class="grid grid-rows-1 grid-cols-6 gap-x-7 gap-y-2">
              <div class="col-start-1 col-span-1">Școala ta</div>
              <div class="col-start-2 col-span-3">
                <input
                  bind:value={school}
                  class="input"
                  placeholder="Scrieți aici școala de proveniență..."
                />
              </div>
            </div>
          </div>
          <div class="text row-start-7 row-end-7">
            <div class="grid grid-rows-1 grid-cols-6 gap-x-7 gap-y-2">
              <div class="col-start-1 col-span-1">Ocupația ta</div>
              <div class=" col-start-2 col-span-1">
                <div class="text">
                  <input
                    id="button"
                    class="input "
                    type="submit"
                    name="submit"
                    value="Elev"
                  />
                </div>
              </div>
              <div class="col-start-3 col-span-1">
                <div class="text">
                  <input
                    id="button"
                    class="input "
                    type="submit"
                    name="submit"
                    value="Profesor"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-rows-1 grid-cols-6 gap-x-7 gap-y-2">
          <div class="col-start-3">
            <div class="gata">
              <button
                ><div class="butt ">
                  <Link href="/" bind:alive>Sunt gata</Link>
                </div></button
              >
            </div>
          </div>
          <div class="col-start-4">
            <button
              ><div class="butt ">
                <Link href="/" bind:alive>Înapoi</Link>
              </div></button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  input[type='submit']:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .input {
    outline: none;
    border: 0px red;
    background-color: transparent;
  }
  button:focus {
    outline: 0px orange;
  }

  .gata {
    background-color: #485696;
    border-radius: 10px;
    border: none;
    color: white;
    width: 91px;
    height: 50px;
    left: 0px;
    top: 0px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
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
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 19px;
    letter-spacing: -0.07em;
    color: #000000;
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
    width: 100%;
    height: 100%;
    backdrop-filter: blur(100px);
  }
  .blurry {
  }
</style>
