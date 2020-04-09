<script>
  export let id = "uswds-" + Math.random().toString(36);
  export let title = "Title";
  export let expanded = false;

  import { getContext, onDestroy } from "svelte";

  const ctx = getContext("Accordion");

  let ref = undefined;
  let unsubscribe = undefined;

  onDestroy(() => {
    if (ctx !== undefined) {
      ctx.remove({ id });
    }

    if (unsubscribe !== undefined) {
      unsubscribe();
    }
  });

  $: if (ctx !== undefined) {
    ctx.add({ id, expanded });
    unsubscribe = ctx.items.subscribe(value => {
      expanded = value[id];
    });
  }
</script>

<h2 {...$$restProps} class:usa-accordion__heading={true}>
  <button
    bind:this={ref}
    class="usa-accordion__button"
    aria-expanded={expanded}
    aria-controls={id}
    on:click
    on:click={() => {
      if (ctx !== undefined) {
        ctx.toggle({ id, expanded: !expanded });
        if (expanded && ref && ref.getBoundingClientRect().top < 0) {
          ref.scrollIntoView();
        }
      }
    }}>
    {title}
  </button>
</h2>
<div class="usa-accordion__content usa-prose" {id} hidden={!expanded}>
  <slot />
</div>
