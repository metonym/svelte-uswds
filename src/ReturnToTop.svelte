<script>
  /**
   * @type {string} [href="#"]
   */
  export let href = "#";

  import Grid from "./Grid.svelte";

  $: _class = ["usa-footer__return-to-top", $$props["class"]]
    .filter(Boolean)
    .join(" ");
</script>

<Grid {...$$restProps} class="{_class}">
  <a href="{href}" on:click>
    <slot>Return to top</slot>
  </a>
</Grid>
