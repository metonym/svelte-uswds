<script>
  export let big = false;
  export let medium = true;
  export let slim = false;

  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import Grid from "./Grid.svelte";

  const _big = writable(big);

  setContext("Footer", { big: _big });

  $: {
    if (big || slim) {
      medium = false;
    }

    _big.set(big);
  }
</script>

<footer
  {...$$restProps}
  class:usa-footer={true}
  class:usa-footer--big={big}
  class:usa-footer--slim={slim}>
  <slot />
  <div class="usa-footer__primary-section">
    {#if medium}
      <slot name="primary" />
    {:else}
      <Grid>
        <slot name="primary" />
      </Grid>
    {/if}

  </div>
  <div class="usa-footer__secondary-section">
    <Grid>
      <slot name="secondary">
        {#if !slim}
          <Grid row gutters>
            <div class="usa-footer__logo mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
              <slot name="secondary-left" />
            </div>
            <div class="usa-footer__contact-links mobile-lg:grid-col-6">
              <slot name="secondary-right" />
            </div>
          </Grid>
        {:else if slim}
          <Grid class="usa-footer__logo" row gutters>
            <slot name="secondary-left" />
          </Grid>
        {/if}
      </slot>
    </Grid>
  </div>
</footer>
