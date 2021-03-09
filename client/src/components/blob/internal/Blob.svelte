<script lang="ts">
  import { fade } from 'svelte/transition'
  import { cubicOut as easing } from 'svelte/easing'

  export let x: number
  export let y: number
  export let scale: number
  export let rotate: number
  export let flip: {
    x: number
    y: number
  }
  export let width: number
  export let height: number

  let innerHeight: number, innerWidth: number

  $: flipX = flip.x * 180
  $: flipY = flip.y * 180
</script>

<div
  transition:fade={{ duration: 300, easing }}
  class="fixed"
  style="--x: {x}px; --y: {y}px; --scale: {scale}; --rotate: {rotate}deg; --flipX: {flipX}deg; --flipY: {flipY}deg;"
  bind:offsetWidth={width}
  bind:offsetHeight={height}
>
  <slot />
</div>

<svelte:window bind:innerHeight bind:innerWidth />

<style>
  div {
    z-index: -1;
    top: var(--y);
    left: var(--x);
    transform: scale(var(--scale)) rotate(var(--rotate)) rotateX(var(--flipX))
      rotateY(var(--flipY));
  }
</style>
