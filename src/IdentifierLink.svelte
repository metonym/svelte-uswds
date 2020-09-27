<script>
  /**
   * @type {string} [href="#"]
   */
  export let href = "#";
</script>

<li class="usa-identifier__required-links-item">
  <a
    {...$$restProps}
    href="{href}"
    class="usa-identifier__required-link"
    on:click
  >
    <slot />
  </a>
</li>
