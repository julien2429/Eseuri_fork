<script>
  export let saved
</script>

{#if saved}
  <img alt="fav_flag" src="../assets/VectorSave_ButtonSaved.svg" />
{:else}
  <img alt="fav_flag" src="../assets/VectorSave_Button.svg" />
{/if}
