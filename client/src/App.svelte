<script lang="ts">
  import { Router } from '@roxi/routify'
  import { routes } from '../.routify/routes'
  import Window from './components/Window.svelte'
</script>

<Router {routes} />

<Window />

<style global>
  :root {
    --shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    --shadow-soft: 2px 2px 5px rgba(0, 0, 0, 0.25);
    --shadow-large: 4px 4px 5px rgba(0, 0, 0, 0.25);
  }
</style>
