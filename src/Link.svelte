<script>
  export let href = "javascript:void(0);";
  export let external = false;
  export let target = undefined; // string
  export let rel = undefined; // string

  $: if (target === "_blank" && rel === undefined) {
    rel = "noopener noreferrer";
  }
</script>

<a
  {...$$restProps}
  class:usa-link="{true}"
  class:usa-link--external="{external}"
  href="{href}"
  target="{target}"
  rel="{rel}">
  <slot />
</a>
