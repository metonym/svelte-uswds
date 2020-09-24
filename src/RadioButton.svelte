<script>
  /**
   * @type {string} [id=""]
   */
  export let id = "uswds-" + Math.random().toString(36);

  /**
   * @type {string} [name=""]
   */
  export let name = "";

  /**
   * @type {string} [value=""]
   */
  export let value = "";

  /**
   * @type {string} [label="Radio button label"]
   */
  export let label = "Radio button label";

  /**
   * @type {boolean} [checked=false]
   */
  export let checked = false;

  /**
   * @type {boolean} [disabled=false]
   */
  export let disabled = false;

  import { getContext, onDestroy } from "svelte";

  const ctx = getContext("RadioButtonGroup");

  let unsubscribe = undefined;

  onDestroy(() => {
    if (ctx !== undefined) {
      ctx.remove({ id });
    }

    if (unsubscribe !== undefined) {
      unsubscribe();
    }
  });

  $: if (ctx !== undefined) {
    ctx.add({ id, value, label, checked });

    if (checked) {
      ctx.toggle({ id });
    }

    unsubscribe = ctx.items.subscribe((value) => {
      if (value[id] !== undefined) {
        checked = value[id].checked;
      }
    });
  }
</script>

<div class="usa-radio">
  <input
    class="usa-radio__input"
    type="radio"
    id="{id}"
    checked="{checked}"
    name="{name}"
    disabled="{disabled}"
    value="{value}"
    on:focus
    on:blur
    on:change
    on:change="{({ target }) => {
      checked = target.checked;
    }}"
  />
  <label class="usa-radio__label" for="{id}">{label}</label>
</div>
