<script>
  /**
   * @type {boolean} [big=false]
   */
  export let big = false;
</script>

<span {...$$restProps} class:usa-tag="{true}" class:usa-tag--big="{big}">
  <slot />
</span>
