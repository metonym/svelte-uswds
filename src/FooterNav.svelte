<script>
  import { getContext, onDestroy } from "svelte";

  let big = false;
  let unsubscribe = undefined;

  const ctx = getContext("Footer");

  onDestroy(() => {
    if (unsubscribe !== undefined) {
      unsubscribe();
    }
  });

  $: if (ctx !== undefined) {
    unsubscribe = ctx.big.subscribe((state) => {
      big = state;
    });
  }
</script>

<nav
  {...$$restProps}
  class:usa-footer__nav="{true}"
  aria-label="{$$props['aria-label'] || 'Footer navigation'}">
  {#if big}
    <slot />
  {:else}
    <ul class="grid-row grid-gap">
      <slot />
    </ul>
  {/if}
</nav>
