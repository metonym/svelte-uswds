<script>
  /**
   * @type {string} [href="javascript:void(0);"]
   */
  export let href = "javascript:void(0);";

  /**
   * @type {boolean} [external=false]
   */
  export let external = false; // TODO: deprecate (use $$restProps)

  /**
   * @type {string} [target]
   */
  export let target = undefined; // TODO: deprecate

  /**
   * @type {string} [rel]
   */
  export let rel = undefined; // TODO: deprecate

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
