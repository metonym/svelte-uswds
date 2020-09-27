<script>
  /**
   * @type {string} [href="#"]
   */
  export let href = "#";

  import Grid from "./Grid.svelte";
</script>

<Grid
  {...$$restProps}
  class="{['usa-footer__return-to-top', $$props['class']]
    .filter(Boolean)
    .join(' ')}"
>
  <a href="{href}" on:click>
    <slot>Return to top</slot>
  </a>
</Grid>
