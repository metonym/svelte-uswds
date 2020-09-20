<script>
  /**
   * @type {string} [legend="Legend"]
   */
  export let legend = "Legend";

  /**
   * @type {boolean} [hideLegend=false]
   */
  export let hideLegend = false;

  /**
   * @type {boolean} [disabled=false]
   */
  export let disabled = false;
</script>

<fieldset {...$$restProps} class:usa-fieldset="{true}" disabled="{disabled}">
  <legend class:usa-legend="{!hideLegend}" class:usa-sr-only="{hideLegend}">
    {legend}
  </legend>
  <slot />
</fieldset>
