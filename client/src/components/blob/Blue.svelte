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
    width="650"
    height="311"
    viewBox="0 0 650 311"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.725167 52.959C-24.3617 -43.1516 609.791 20.9219 609.791 20.9219C609.791 20.9219 615.253 16.9176 628.91 52.959C642.566 89.0004 677.161 235.169 609.791 299.243C542.421 363.317 25.8121 149.07 0.725167 52.959Z"
      fill="#485696"
    />
  </svg>
</Blob>
