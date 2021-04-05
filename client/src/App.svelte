<script lang="ts">
  // @ts-nocheck
  import { Auth0Context } from '@dopry/svelte-auth0'
  import { Router } from '@roxi/routify'
  import { routes } from '../.routify/routes'
  import Window from './components/Window.svelte'
</script>

<Auth0Context
  domain={import.meta.env.VITE_AUTH0_DOMAIN}
  client_id={import.meta.env.VITE_AUTH0_CLIENT_ID}
  audience={import.meta.env.VITE_AUTH0_AUDIENCE}
  callback_url={window.location.origin}
  logout_url={window.location.origin}
>
  <Router {routes} />

  <Window />
</Auth0Context>

<style global>
  :root {
    --shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    --shadow-soft: 2px 2px 5px rgba(0, 0, 0, 0.25);
    --shadow-large: 4px 4px 5px rgba(0, 0, 0, 0.25);
  }
</style>
