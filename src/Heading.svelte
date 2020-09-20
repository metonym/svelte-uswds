<script>
  /**
   * @type {"h1" | "h2" | "h3" | "h4" | "h5" | "h6"} [tag="h1"]
   */
  export let tag = "h1";

  /**
   * @type {string} [id]
   */
  export let id = undefined;

  let ref = null;

  $: if (id === undefined && ref) {
    id = ref.innerText.replace(/\s+/g, "-").toLowerCase();
  }
</script>

{#if tag === 'h1'}
  <h1 {...$$restProps} id="{id}" bind:this="{ref}">
    <slot />
  </h1>
{:else if tag === 'h2'}
  <h2 {...$$restProps} id="{id}" bind:this="{ref}">
    <slot />
  </h2>
{:else if tag === 'h3'}
  <h3 {...$$restProps} id="{id}" bind:this="{ref}">
    <slot />
  </h3>
{:else if tag === 'h4'}
  <h4 {...$$restProps} id="{id}" bind:this="{ref}">
    <slot />
  </h4>
{:else if tag === 'h5'}
  <h5 {...$$restProps} id="{id}" bind:this="{ref}">
    <slot />
  </h5>
{:else if tag === 'h6'}
  <h6 {...$$restProps} id="{id}" bind:this="{ref}">
    <slot />
  </h6>
{/if}
