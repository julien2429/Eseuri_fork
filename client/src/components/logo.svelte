<script>
  import { goto, url } from '@roxi/routify'
  export let white = false
</script>

<div
  class="text-lg font-serif font-bold "
  class:text-white={white}
  class:text-black={!white}
>
  Eseuri<punct style="color:orange">.</punct>
</div>
