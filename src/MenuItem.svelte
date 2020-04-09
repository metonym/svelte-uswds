<script>
  export let href = "javascript:void(0);";
  export let current = false;

  import { getContext, onDestroy } from "svelte";

  let unsubscribe = undefined;
  let secondary = false;

  const ctx = getContext("Menu");

  onDestroy(() => {
    if (unsubscribe !== undefined) {
      unsubscribe();
    }
  });

  $: if (ctx !== undefined) {
    unsubscribe = ctx.secondary.subscribe(state => {
      secondary = state;
    });
  }
</script>

{#if ctx !== undefined && secondary}
  <a {...$$restProps} {href} class:usa-nav__secondary-item={true}>
    <slot />
  </a>
{:else}
  <li
    {...$$restProps}
    class:usa-nav__submenu-item={ctx !== undefined}
    class:usa-nav__primary-item={ctx === undefined}>
    <a
      {href}
      class:usa-nav__link={ctx === undefined}
      class:usa-current={ctx === undefined && current}>
      <slot />
    </a>
  </li>
{/if}
