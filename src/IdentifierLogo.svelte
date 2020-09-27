<script>
  /**
   * @type {string} [href="#"]
   */
  export let href = "#";

  /**
   * @type {string} [src=""]
   */
  export let src = "";

  /**
   * @type {string} [alt=""]
   */
  export let alt = "";
</script>

<a {...$$restProps} href="{href}" class="usa-identifier__logo" on:click>
  <img class="usa-identifier__logo-img" role="img" src="{src}" alt="{alt}" />
</a>
