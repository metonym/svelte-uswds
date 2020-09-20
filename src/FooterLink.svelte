<script>
  /**
   * @type {string} [href="javascript:void(0);"]
   */
  export let href = "javascript:void(0);";

  /**
   * @type {boolean} [secondary=false]
   */
  export let secondary = false;

  import { getContext } from "svelte";

  const ctx = getContext("FooterContent");

  $: if (ctx !== undefined) {
    secondary = true;
  }
</script>

{#if secondary}
  <li {...$$restProps} class:usa-footer__secondary-link="{true}">
    <a href="{href}">
      <slot />
    </a>
  </li>
{:else}
  <li
    {...$$restProps}
    class:mobile-lg:grid-col-6="{true}"
    class:desktop:grid-col-auto="{true}"
    class:usa-footer__primary-content="{true}">
    <a class:usa-footer__primary-link="{true}" href="{href}">
      <slot />
    </a>
  </li>
{/if}
