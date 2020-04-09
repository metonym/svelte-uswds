<script>
  export let legend = "Legend";
  export let hideLegend = false;
  export let disabled = false;
</script>

<fieldset {...$$restProps} class:usa-fieldset={true} {disabled}>
  <legend class:usa-legend={!hideLegend} class:usa-sr-only={hideLegend}>{legend}</legend>
  <slot />
</fieldset>
