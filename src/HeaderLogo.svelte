<script>
  export let title = "Home";
  export let href = "/";
</script>

<div {...$$restProps} class:usa-logo={true}>
  <em class="usa-logo__text">
    <a {href} {title} aria-label={title} on:click>
      <slot />
    </a>
  </em>
</div>
