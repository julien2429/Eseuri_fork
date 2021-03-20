<script lang="ts">
  import { getContext } from 'svelte'
  import type { Context } from '../pages/essays/[page_name].svelte'
  import Bookmark from 'svelte-material-icons/Bookmark.svelte'
  import BookmarkOutline from 'svelte-material-icons/BookmarkOutline.svelte'
  import { contextKey } from '../pages/essays/[page_name].svelte'

  const ctx = getContext<Context>(contextKey)
  console.log(ctx)

  const size = '24'
</script>

<button
  class="align-middle"
  on:click={() => ($ctx.saved ? ctx.unsave() : ctx.save())}
>
  {#if $ctx.saved}
    <Bookmark width={size} height={size} />
  {:else}
    <BookmarkOutline width={size} height={size} />
  {/if}
</button>
