<script>
  /**
   * @type {string} [href="javascript:void(0);"]
   */
  export let href = "javascript:void(0);";

  /**
   * @type {boolean} [current=false]
   */
  export let current = false;

  import { getContext, onMount } from "svelte";

  let unsubscribe = undefined;
  let secondary = false;

  const ctx = getContext("Menu");

  onMount(() => {
    return () => {
      if (unsubscribe !== undefined) unsubscribe();
    };
  });

  $: if (ctx) {
    unsubscribe = ctx.secondary.subscribe((state) => {
      secondary = state;
    });
  }
</script>

{#if ctx && secondary}
  <a {...$$restProps} href="{href}" class:usa-nav__secondary-item="{true}">
    <slot />
  </a>
{:else}
  <li
    {...$$restProps}
    class:usa-nav__submenu-item="{ctx}"
    class:usa-nav__primary-item="{ctx === undefined}"
  >
    <a
      href="{href}"
      class:usa-nav__link="{ctx === undefined}"
      class:usa-current="{ctx === undefined && current}"
    >
      <slot />
    </a>
  </li>
{/if}
