<script>
  /**
   * @type {string} [href="#main-content"]
   */
  export let href = "#main-content";
</script>

<a {...$$restProps} class="usa-skipnav" href="{href}" on:click>
  <slot>Skip to main content</slot>
</a>
