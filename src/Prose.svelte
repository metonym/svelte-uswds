<script>
  let ref = undefined;
</script>

<div {...$$restProps} bind:this="{ref}" class:usa-prose="{true}">
  <slot />
</div>
