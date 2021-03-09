<script lang="ts">
  import { Carousel } from 'renderless-svelte'
  import type { CarouselControls } from 'renderless-svelte'
  import Queue from '../queue'
  import { metatags, ready } from '@roxi/routify'
  import { store as orange } from '../components/blob/Orange.svelte'
  import { store as red } from '../components/blob/Red.svelte'
  import { store as blue } from '../components/blob/Blue.svelte'
  import { store as window } from '../components/Window.svelte'
  import { onMount } from 'svelte'

  metatags.title = 'Cat facts'

  const responses: Promise<string[]>[] = []
  let response: string[] | undefined

  const getFact = async () => {
    const length = response?.length ?? 0
    if (length < 5) {
      if (responses.length < 2) {
        const res = fetch(
          'https://cat-fact.herokuapp.com/facts/random?amount=10'
        )
          .then(res => res.json())
          .then((res: { text: string }[]) => res.map(r => r.text))
        responses.push(res)
      }
      if (length === 0) {
        response = await responses.shift()!
      }
    }
    return response!.shift()!
  }

  let history = new Queue<Promise<string>>(10)
  let items: any[]

  const pushHistory = () => {
    const fact = getFact()
    history.push(fact)
    items = history.array() as any[]
    return fact
  }

  type Handler = () => void

  let controls: CarouselControls

  const keydownHandler = (left: Handler, right: Handler) => (
    ev: KeyboardEvent
  ) => {
    switch (ev.code) {
      case 'KeyH':
      case 'ArrowLeft':
        left()
        break
      case 'KeyL':
      case 'ArrowRight':
        right()
        break
    }
  }

  let mounted = false

  onMount(() => {
    $orange = {
      x: 0,
      y: $window.height - orange.height,
      scale: 1.2,
      rotate: 0,
      flip: {
        x: 0,
        y: 0,
      },
    }
    $red = {
      x: $window.width - red.width * 1.5,
      y: $window.height - red.height * 0.45,
      scale: 1.2,
      rotate: 32.5,
      flip: {
        x: 1,
        y: 0,
      },
    }
    $blue = {
      x: ($window.width - blue.width * 0.49) / 2,
      y: -blue.height * 0.635 + $window.height * 0.1,
      scale: 1.2,
      rotate: 0,
      flip: {
        x: 0,
        y: 1,
      },
    }
    pushHistory().then($ready)
    mounted = true
  })

  $: if (mounted) {
    $orange.y = $window.height - orange.height
    $red.x = $window.width - red.width * 1.5
    $red.y = $window.height - red.height * 0.45
    $blue.x = ($window.width - blue.width * 0.49) / 2
    $blue.y = -blue.height * 0.635 + $window.height * 0.1
  }
</script>

<Carousel {items} let:payload bind:controls let:currentIndex let:setIndex>
  <div class="flex flex-col items-center space-y-sm w-full min-h-full">
    {#await payload}
      <p class="text text-blue">Retrieving a cat fact...</p>
    {:then text}
      <p class="font-serif text-prose text-center max-w-prose">{text}</p>
    {:catch}
      <p class="text text-red">Something terribly bad happened!</p>
    {/await}
  </div>
  <div class="flex space-x-sm items-center mt-auto">
    <button
      class="control text"
      on:click={controls.previous}
      disabled={currentIndex === 0}>Previous</button
    >
    <button
      class="control text"
      on:click={controls.next}
      disabled={!items || currentIndex === items.length - 1}>Next</button
    >
  </div>
  <button
    class="mt-sm text"
    on:click={() => (pushHistory(), setIndex(history.length - 1))}
    >New fact</button
  >
</Carousel>

<svelte:window on:keydown={keydownHandler(controls.previous, controls.next)} />

<style>
  .text {
    @apply font-sans text-base subpixel-antialiasing text-center max-w-prose;
  }

  button {
    backdrop-filter: blur(100px);
    @apply p-lg border rounded transition bg-white cursor-pointer select-none outline-none bg-opacity-50;
  }

  button:hover,
  button:focus-visible {
    @apply border-orange bg-orange text-white;
  }

  .control {
    @apply p-sm;
  }

  .control:hover,
  .control:focus-visible {
    @apply border-blue bg-blue;
  }

  .control:disabled {
    @apply pointer-events-none opacity-50;
  }
</style>
