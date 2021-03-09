<script context="module">
  import createStore from './internal/store'

  export const store = createStore()
</script>

<script lang="ts">
  import Blob from './internal/Blob.svelte'

  let width: number, height: number

  $: store.width = width
  $: store.height = height
</script>

<Blob
  x={$store.x}
  y={$store.y}
  scale={$store.scale}
  rotate={$store.rotate}
  flip={$store.flip}
  bind:width
  bind:height
>
  <svg
    width="362"
    height="297"
    viewBox="0 0 362 297"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="fill-orange"
  >
    <path
      d="M345 1.49998C276.5 -7.00002 77.5 45.5 -37 137.5L-15.5 328H230.5C243.5 328 413.5 9.99998 345 1.49998Z"
      fill="#FF7F11"
    />
  </svg>
</Blob>
