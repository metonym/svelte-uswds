<script>
  export let basic = true;
  export let extended = false;
  export let skipNav = false; // TODO: rename

  import { setContext, afterUpdate } from "svelte";
  import { writable } from "svelte/store";
  import SkipToMainContent from "./SkipToMainContent.svelte";

  const visible = writable(false);
  const mobile = writable(false);
  const _extended = writable(extended);

  setContext("Header", { extended: _extended, visible, mobile });

  afterUpdate(() => {
    if ($visible && !$mobile) {
      visible.set(false);
    }

    if (document && document.body) {
      if ($visible) {
        document.body.classList.add("usa-js-mobile-nav--active");
      } else {
        document.body.classList.remove("usa-js-mobile-nav--active");
      }
    }
  });

  $: {
    if (extended) {
      basic = false;
    }

    _extended.set(extended);
  }
</script>

{#if skipNav}
  <SkipToMainContent />
{/if}

<div
  class="usa-overlay"
  class:is-visible={$visible}
  on:click={() => {
    if ($visible) {
      visible.set(!$visible);
    }
  }} />

<header
  {...$$restProps}
  class:usa-header={true}
  class:usa-header--basic={basic}
  class:usa-header--extended={$_extended}>
  {#if $_extended}
    <slot />
  {:else}
    <div class="usa-nav-container">
      <slot />
    </div>
  {/if}
</header>
