<script>
  /**
   * @type {"top" | "bottom" | "right" | "left"} [position="bottom"]
   */
  export let position = "bottom";

  /**
   * @type {string} [tooltipText=""]
   */
  export let tooltipText = "";

  /**
   * @type {string} [id=""]
   */
  export let id = "uswds-" + Math.random().toString(36);

  import { afterUpdate } from "svelte";

  let ref = null;
  let refTooltip = null;
  let showTooltip = false;
  let margin = { left: 0, bottom: 0, top: 0 };

  const INDENT = 7;

  $: right = position === "right";
  $: left = position === "left";
  $: vertical = right || left;

  afterUpdate(() => {
    if (showTooltip) {
      const { width, height } = ref.getBoundingClientRect();
      const { width: widthTooltip } = refTooltip.getBoundingClientRect();

      let y = height + INDENT;

      margin.left = vertical
        ? right
          ? width + INDENT
          : -1 * widthTooltip - INDENT
        : width / 2;

      margin.top = vertical ? 0 : y;
      margin.bottom = vertical ? 0 : y;
    }
  });

  function hide() {
    showTooltip = false;
  }

  function show() {
    showTooltip = true;
  }
</script>

<span class:usa-tooltip="{true}" {...$$restProps}>
  <button
    bind:this="{ref}"
    type="button"
    tabindex="0"
    aria-describedby="{id}"
    class:usa-button="{true}"
    class:usa-tooltip__trigger="{true}"
    data-position="{position}"
    on:focus="{show}"
    on:blur="{hide}"
    on:mouseover="{show}"
    on:mouseout="{hide}"
  ><slot /></button>
  <span
    bind:this="{refTooltip}"
    role="tooltip"
    class:usa-tooltip__body="{true}"
    class="usa-tooltip__body--{position}"
    class:is-visible="{showTooltip}"
    class:is-set="{showTooltip}"
    id="{id}"
    aria-hidden="{!showTooltip}"
    style="margin-left: {margin.left}px; margin-bottom: {margin.bottom}px; {!vertical ? `margin-top: ${margin.top}px;` : ''} {vertical ? 'top: -1px; bottom: -1px;' : ''}"
  >{tooltipText}</span>
</span>
