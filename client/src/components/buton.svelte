<script>
  // TODO: Use Link component and remove shadow (add white property)

  import { prefetch, url } from '@roxi/routify'

  /**
   * The location to navigate to
   * @type {string}
   */
  export let link
  /**
   * Toggle this if the button should be white
   */
  export let white = false
</script>

<a
  href={$url(link)}
  use:prefetch
  class:text-white={white}
  class:text-black={!white}
  class="stiluri"
>
  <slot />
</a>

<style>
  .stiluri {
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
    outline: none;
    text-decoration: none;
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
  }
</style>
