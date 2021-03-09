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
    width="371"
    height="251"
    viewBox="0 0 371 251"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="fill-red"
  >
    <path
      d="M23.706 196.913C-2.29339 156.913 -3.29336 50.9133 3.70602 22.9133C10.7054 -5.08671 338.706 -10.0867 359.706 22.9133C380.706 55.9133 368.706 230.913 359.706 245.913C350.706 260.913 49.7054 236.913 23.706 196.913Z"
      fill="#FF3F00"
    />
  </svg>
</Blob>
