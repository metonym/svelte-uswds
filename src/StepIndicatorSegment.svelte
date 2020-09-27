<script>
  /**
   * @type {string} [id=""]
   */
  export let id = "uswds-" + Math.random().toString(36);

  /**
   * @type {string} [text=""]
   */
  export let text = "";

  /**
   * @type {boolean} [current=false]
   */
  export let current = false;

  /**
   * @type {boolean} [complete=false]
   */
  export let complete = false;

  import { onMount, getContext } from "svelte";

  const ctx = getContext("StepIndicator");

  onMount(() => {
    if (ctx) ctx.add({ id, current, text });

    return () => {
      if (ctx) ctx.remove({ id });
    };
  });
</script>

<li
  {...$$restProps}
  class="usa-step-indicator__segment"
  class:usa-step-indicator__segment--complete="{complete}"
  class:usa-step-indicator__segment--current="{current}"
  aria-current="{current ? 'true' : undefined}"
>
  <span class="usa-step-indicator__segment-label">
    {text}
    {#if !current}
      <span class="usa-sr-only">{#if !complete}not{' '}{/if}completed</span>
    {/if}
  </span>
</li>
