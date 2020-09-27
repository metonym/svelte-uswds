<script>
  import { getContext, onMount } from "svelte";

  let big = false;
  let unsubscribe = undefined;

  const ctx = getContext("Footer");

  onMount(() => {
    return () => {
      if (unsubscribe !== undefined) unsubscribe();
    };
  });

  $: if (ctx) {
    unsubscribe = ctx.big.subscribe((state) => {
      big = state;
    });
  }
</script>

<nav
  {...$$restProps}
  class:usa-footer__nav="{true}"
  aria-label="{$$props['aria-label'] || 'Footer navigation'}"
>
  {#if big}
    <slot />
  {:else}
    <ul class="grid-row grid-gap">
      <slot />
    </ul>
  {/if}
</nav>
