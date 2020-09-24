<script>
  /**
   * @type {string} [id=""]
   */
  export let id = "uswds-" + Math.random().toString(36);

  /**
   * @type {string} [buttonText="Open menu"]
   */
  export let buttonText = "Open menu";

  /**
   * @type {boolean} [current=false]
   */
  export let current = false;

  /**
   * @type {boolean} [expanded=false]
   */
  export let expanded = false;

  /**
   * @type {boolean} [mega=false]
   */
  export let mega = false;

  /**
   * @type {boolean} [secondary=false]
   */
  export let secondary = false;

  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  let ref = null;
  let _secondary = writable(secondary);

  setContext("Menu", { secondary: _secondary });

  $: {
    _secondary.set(secondary);
  }
</script>

<svelte:body
  on:click="{({ target }) => {
    if (expanded && ref && !ref.contains(target)) {
      expanded = false;
    }
  }}" />

{#if secondary}
  <ul {...$$restProps} class:usa-nav__secondary-links="{true}">
    <slot />
  </ul>
{:else}
  <li {...$$restProps} bind:this="{ref}" class="usa-nav__primary-item">
    <button
      class="usa-accordion__button usa-nav__link"
      class:usa-current="{current}"
      aria-expanded="{expanded}"
      aria-controls="{id}"
      on:click
      on:click="{() => {
        expanded = !expanded;
      }}"
    >
      <span>{buttonText}</span>
    </button>
    <ul
      id="{id}"
      class="usa-nav__submenu"
      class:usa-megamenu="{mega}"
      hidden="{!expanded}"
    >
      <slot />
    </ul>
  </li>
{/if}
