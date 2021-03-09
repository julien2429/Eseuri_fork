<script>
  import Orange from '$components/blob/Orange.svelte'
  import Red from '$components/blob/Red.svelte'
  import Blue from '$components/blob/Blue.svelte'
  import { url, isActive } from '@roxi/routify'
  import { store as window } from '../components/Window.svelte'
</script>

<div class="w-full h-full relative">
  {#if $window.width > 530}
    <div class="bg-white bg" />
    <Orange />
    <Red />
    <Blue />
  {:else}
    <div class="bg from-orange to-blue via-white bg-gradient-to-tl" />
  {/if}

  <main class="flex flex-col items-center w-full min-h-full">
    <a href={$url($isActive('./index') ? './about' : './')}
      ><h1
        class="font-serif tracking-tighter text-xl subpixel-antialiasing font-bold select-none m-0"
      >
        Cat facts<span class="text-orange">.</span>
      </h1></a
    >
    <slot />
  </main>
</div>

<style>
  :global(html, body) {
    font-size: 18px;
    height: 100%;
    overflow-x: hidden;
  }

  main {
    padding: 10vmin;
  }

  .bg {
    z-index: -1000;
    filter: blur(100px);
    @apply fixed w-full h-full;
  }
</style>
