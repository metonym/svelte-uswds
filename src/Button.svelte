<script>
  export let disabled = false;
  export let kind = "default"; // 'default' | 'secondary' | 'accent-cool' | 'base' | 'outline' | 'outline-inverse'
  export let big = false;
  export let unstyled = false;
</script>

<button
  {...$$restProps}
  class:usa-button={true}
  class:usa-button--secondary={kind === 'secondary'}
  class:usa-button--accent-cool={kind === 'accent-cool'}
  class:usa-button--base={kind === 'base'}
  class:usa-button--outline={kind === 'outline' || kind === 'outline-inverse'}
  class:usa-button--inverse={kind === 'outline-inverse'}
  class:usa-button--big={big}
  class:usa-button--unstyled={unstyled}
  {disabled}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave>
  <slot />
</button>
