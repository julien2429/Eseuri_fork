<script context="module" lang="ts">
  import type { Readable } from 'svelte/store'
  import { writable } from 'svelte/store'

  /**
   * The key used to retrieve the context from children components.
   */
  export const contextKey = {}

  interface Store {
    /**
     * True if the work is bookmarked.
     */
    readonly saved: boolean
    /**
     * The name of the opened work.
     */
    readonly work: string
  }
  export interface Context extends Readable<Store> {
    /**
     * Bookmarks the work, if not already.
     */
    save(): void
    /**
     * Removes the work from bookmarks, if bookmarked before.
     */
    unsave(): void
  }

  /**
   * Creates a context for the current work.
   *
   * @param work The name of the opened work.
   */
  function createContext(work: string): Context {
    /**
     * True if the work is bookmarked.
     */
    let saved = false
    const { subscribe, update } = writable<Store>({
      // Getters are used so the values cannot be modified from outside.
      get saved() {
        return saved
      },
      get work() {
        return decodeURI(work)
      },
    })

    // Normally, some fetcch requests to the API would exist
    // here, instead of a boolean flag.
    return {
      subscribe,
      save() {
        // Update is called so the store notifies the change to
        // the subscribers, even though no actual value in the
        // store itself changes.
        update(v => {
          saved = true
          return v
        })
      },
      unsave() {
        update(v => {
          saved = false
          return v
        })
      },
    }
  }
</script>

<script lang="ts">
  import Link from '../../components/Link.svelte'
  import Logo from '../../components/logo.svelte'
  import LoginButton from '../../components/LoginButton.svelte'
  import Buton from '../../components/buton.svelte'
  import UploadButton from '../../components/upload_button.svelte'
  import FavButton from '../../components/Fav_Button.svelte'
  import Next from '../../components/next_essay.svelte'
  import Back from '../../components/last_essay.svelte'
  import { store as orange } from '../../components/blob/Orange.svelte'
  import { store as red } from '../../components/blob/Red.svelte'
  import { store as blue } from '../../components/blob/Blue.svelte'
  import { store as window } from '../../components/Window.svelte'
  import { onMount, setContext } from 'svelte'
  import { fly } from 'svelte/transition'

  export let page_name: string
  export let essay_type = true

  // Create the current work's context
  setContext<Context>(contextKey, createContext(page_name))

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
    $red = {
      x: $window.width + red.width * 0.6,
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
      x: ($window.width - blue.width * 1) / 2,
      y: -blue.height * 1 - $window.height * 0.1,
      scale: 1.4,
      rotate: 0,
      flip: {
        x: 0,
        y: 0,
      },
      zIndex: -1,
    }
    mounted = true
  })

  let saved = false

  let alive = true

  $: if (mounted) {
    $orange.x = -orange.width * 1.4
    $orange.y = $window.height - orange.height
    $red.x = $window.width + red.width * 0.6
    $red.y = $window.height - red.height * 0.45
    $blue.x = ($window.width - blue.width * 1) / 2
    $blue.y = -blue.height * 1 - $window.height * 0.1
  }
</script>

{#if alive}
  <div
    class="parent relative"
    transition:fly={{ y: $window.height, duration: 300 }}
  >
    <div class="container">
      <div class="top_bar">
        <div class="col-start-1 col-span-1 m-auto">
          <Link bind:alive href="../">
            <Logo />
          </Link>
        </div>
        <div class="col-start-3 col-span-1 m-auto">
          <Buton bind:alive link="/search/Cauta">Cauta</Buton>
        </div>
        <div class="col-start-4 col-span-1 m-auto">
          <Buton bind:alive link="../">Plagiat</Buton>
        </div>
        <div class="col-start-5 col-span-1 m-auto">
          <Buton bind:alive link="../">Profesori</Buton>
        </div>
        <div class="col-start-6 col-span-1 m-auto">
          <LoginButton bind:alive white={false} />
        </div>
      </div>
      <div class=" grid  col-start-6 col-span-1 row-span-1 row-start-2">
        <UploadButton />
      </div>
      <div class=" grid col-start-2 col-end-6 row-span-2 row-start-3 text-4xl">
        <z>{decodeURI(page_name)}<z /></z>
      </div>
      <div class=" type_save_bar">
        <div class=" col-start-1 col-span-1 my-auto text-gray">
          {#if essay_type}
            Eseu
          {:else}
            Caracterizare
          {/if}
        </div>
        <div class="col-start-4 col-span-1 my-auto mr-0 ml-auto">
          <FavButton />
        </div>
      </div>
      <div class="col-start-6 col-span-1 row-start-6 row-span-1 ">
        <div class=" ml-1">
          <button class="fixed focus:outline-none outline-none">
            <Next />
          </button>
        </div>
      </div>
      <div class="col-start-1 col-span-1 row-start-6 row-span-1 ">
        <div class=" ml-18">
          <button class="fixed focus:outline-none outline-none">
            <Back />
          </button>
        </div>
      </div>
      <div class="referat grid ">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est
          nibh, tristique non magna maximus, maximus ornare nibh. Ut cursus
          libero in mi egestas blandit. Quisque tincidunt enim nec ex dignissim
          mattis eget ac nisi. Suspendisse consectetur molestie leo, iaculis
          dictum erat vehicula vitae. Fusce aliquet lorem suscipit, convallis
          ante at, ultricies augue. Proin aliquam, ligula at finibus dignissim,
          erat nisi rhoncus justo, at posuere velit lorem vitae augue. Ut
          ultrices nulla tincidunt tristique convallis. Nunc magna est,
          vestibulum eu ante sed, sagittis auctor mauris. Vivamus sit amet
          dignissim mauris, at porta orci. Etiam commodo vel eros porttitor
          interdum. Nullam dolor dui, dapibus quis felis nec, tempor vehicula
          ligula. Mauris tortor orci, eleifend vel urna a, fringilla rutrum
          lorem. Nulla laoreet, leo ut vestibulum interdum, felis nisi consequat
          dolor, in congue justo sapien et augue. Ut malesuada rutrum nunc eu
          eleifend. Donec bibendum nunc sed mauris eleifend tristique. Etiam
          ullamcorper ac turpis et blandit. Suspendisse varius magna id
          consequat sodales. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Vivamus pellentesque odio
          nisl, facilisis consectetur quam ornare eu. Cras porttitor, arcu nec
          dictum posuere, orci odio varius mi, eget bibendum nibh nisl ut
          mauris. Quisque placerat nulla arcu, commodo varius ipsum ultrices
          vel. Integer a velit scelerisque, dictum arcu eu, sollicitudin ipsum.
          Quisque malesuada ultrices felis, mollis bibendum tellus tincidunt
          vel. Integer nec ex tortor. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Cras fringilla, sapien in molestie ullamcorper,
          elit mi venenatis quam, egestas porttitor turpis magna sed dui. Donec
          id bibendum orci, accumsan viverra lacus. Phasellus et porttitor
          neque, at sodales massa. Etiam sed nulla ipsum. Cras vitae consequat
          odio, eu varius orci. Suspendisse vehicula neque quis dapibus maximus.
          Aliquam in mauris sed velit ornare elementum id id justo. Vivamus
          bibendum placerat enim at sollicitudin. Donec id lorem a purus
          porttitor viverra nec non tortor. Ut dapibus felis et ante aliquam, a
          hendrerit nunc vulputate. Aliquam placerat eu magna at gravida.
          Vivamus imperdiet lorem mollis, tincidunt orci at, rhoncus risus.
          Suspendisse eleifend porta justo a faucibus. Proin mollis nunc sed
          eros lobortis consectetur. Quisque laoreet, eros a rhoncus
          pellentesque, felis lectus feugiat nunc, in lacinia erat felis sed
          velit. Phasellus auctor neque nec magna tincidunt, sit amet tincidunt
          nunc placerat. Nunc in iaculis ex. Nullam vel facilisis metus, in
          facilisis tortor. Vivamus et quam aliquet, ornare tellus vel,
          hendrerit lectus. Nam convallis a enim eget vulputate. Nam quis
          aliquam purus, quis faucibus est. Nunc id sollicitudin mauris, nec
          accumsan ligula. Fusce sit amet lobortis massa, at ultricies urna.
          Praesent mattis vehicula justo, a blandit tellus dapibus non. Sed
          vitae pellentesque dolor. Aliquam erat volutpat. Aliquam a mollis
          quam, sit amet malesuada orci. Curabitur ac urna in mauris pulvinar
          vestibulum et in sem. Nunc laoreet nisl at erat iaculis laoreet.
          Praesent molestie nisi eros, quis mattis dui pulvinar sed. Donec
          tincidunt vitae libero vel fringilla. Aliquam ut leo at diam fringilla
          rhoncus sed non neque. Phasellus et urna odio. Vivamus nibh felis,
          sodales quis euismod at, varius elementum mi. Nullam pretium neque non
          eleifend
        </p>
        <div class="evaluare">
          <div class="col-start-1 col-span-1 my-auto  ml-0">
            <FavButton />
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .evaluare {
    display: inherit;
    grid-row: auto;
    grid-template-columns: repeat(4, var(--l_column));
    column-gap: inherit;
  }
  .type_save_bar {
    grid-column: 2/5;
    grid-row: 5 / span 1;
    display: inherit;
    grid-template-columns: repeat(4, var(--l_column));
    column-gap: inherit;
  }
  .referat {
    grid-column: 2/6;
    grid-row-start: 6;
    grid-row-end: auto;
  }
  .top_bar {
    grid-column: 1/-1;
    grid-row: 1 / span 1;
    display: inherit;
    grid-template-columns: inherit;
    column-gap: inherit;
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
