<script>
  import { store as orange } from '../components/blob/Orange.svelte'
  import { store as red } from '../components/blob/Red.svelte'
  import { store as blue } from '../components/blob/Blue.svelte'
  import { store as window } from '../components/Window.svelte'
  import { onMount } from 'svelte'
  import { ready } from '@roxi/routify'

  let mounted = false
  onMount(() => {
    $orange = {
      x: 10,
      y: $window.height - orange.height - 20,
      scale: 1.2,
      rotate: 0,
      flip: {
        x: 0,
        y: 0,
      },
    }

    $red = {
      x: $window.width - red.width,
      y: 0,
      scale: 1.2,
      rotate: 0,
      flip: {
        x: 0,
        y: 0,
      },
    }

    $blue = {
      x: $window.width - blue.width * 1.03,
      y: $window.height - blue.height * 0.4,
      scale: 1.2,
      rotate: 0,
      flip: {
        x: 0,
        y: 0,
      },
    }

    mounted = true
  })

  $: if (mounted) {
    $orange.y = $window.height - orange.height - 20
    $red.x = $window.width - red.width
    $blue.x = $window.width - blue.width * 1.03
    $blue.y = $window.height - blue.height * 0.4
  }

  const getBeeMovieScript = () =>
    fetch(
      'https://gist.githubusercontent.com/The5heepDev/a15539b297a7862af4f12ce07fee6bb7/raw/7164813a9b8d0a3b2dcffd5b80005f1967887475/entire_bee_movie_script'
    ).then(res => res.text())

  const script = getBeeMovieScript()
  script.then($ready)
</script>

<div class="flex flex-col items-center">
  <p class="text-base">This page presents many cat facts.</p>
  <p class="text-base">But also the Bee Movie script!</p>
  {#await script then text}
    <div
      class="script flex flex-col items-center space-y-md p-md border rounded mt-lg"
    >
      <h2
        class="font-serif text-center text-title subpixel-antialiasing text-black font-normal"
      >
        The Bee Movie Script
      </h2>
      <p class="font-serif text-prose subpixel-antialiasing max-w-prose">
        {text}
      </p>
    </div>
  {:catch}
    <p class="text-base text-red">Something terribly unholy happened!</p>
  {/await}
</div>

<style>
  .script {
    backdrop-filter: blur(100px);
  }
</style>
