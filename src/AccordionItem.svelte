<script>
  /**
   * @type {string} [id=""]
   */
  export let id = "uswds-" + Math.random().toString(36);

  /**
   * @type {string} [title="Title"]
   */
  export let title = "Title";

  /**
   * @type {boolean} [expanded=false]
   */
  export let expanded = false;

  import { getContext, onMount } from "svelte";

  const ctx = getContext("Accordion");

  let ref = null;
  let unsubscribe = undefined;

  onMount(() => {
    return () => {
      if (ctx) ctx.remove({ id });
      if (unsubscribe) unsubscribe();
    };
  });

  $: if (ctx) {
    ctx.add({ id, expanded });
    unsubscribe = ctx.items.subscribe((value) => {
      expanded = value[id];
    });
  }
</script>

<h2 {...$$restProps} class:usa-accordion__heading="{true}">
  <button
    bind:this="{ref}"
    class="usa-accordion__button"
    aria-expanded="{expanded}"
    aria-controls="{id}"
    on:click
    on:click="{() => {
      if (ctx) {
        ctx.toggle({ id, expanded: !expanded });
        if (expanded && ref && ref.getBoundingClientRect().top < 0) {
          ref.scrollIntoView();
        }
      }
    }}"
  >
    {title}
  </button>
</h2>
<div class="usa-accordion__content usa-prose" id="{id}" hidden="{!expanded}">
  <slot />
</div>
