<script lang="ts">
  import { Auth0Context } from '@dopry/svelte-auth0'
  import { Router } from '@roxi/routify'
  import { routes } from '../.routify/routes'
  import Window from './components/Window.svelte'
</script>

<Auth0Context
  domain="eseuri-prod.eu.auth0.com"
  client_id="NJgHdaXoixiNUpEks7b3TtYi95ZH433P"
  audience="https://eseuri-prod.eu.auth0.com/api/v2/"
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
