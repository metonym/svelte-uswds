<script>
  /**
   * @type {boolean} [external=false]
   */
  export let external = false; // TODO: deprecate (use $$restProps)
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
  rel="{$$restProps.target === '_blank' ? 'noopener noreferrer' : undefined}"
  class:usa-link="{true}"
  class:usa-link--external="{external}"
  {...$$restProps}>
  <slot />
</a>
