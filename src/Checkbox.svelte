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
   * Slottable (default slot)
   * @type {string} [label="Checkbox label"]
   */
  export let label = "Checkbox label";

  /**
   * @type {boolean} [checked=false]
   */
  export let checked = false;

  /**
   * @type {boolean} [disabled=false]
   */
  export let disabled = false;

  import { getContext, onDestroy } from "svelte";

  const ctx = getContext("CheckboxGroup");

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
    unsubscribe = ctx.items.subscribe((value) => {
      if (value[id] !== undefined) {
        checked = value[id].checked;
      }
    });
  }
</script>

<div class="usa-checkbox">
  <input
    class="usa-checkbox__input"
    type="checkbox"
    id="{id}"
    name="{name}"
    disabled="{disabled}"
    bind:checked
    bind:value
    on:focus
    on:blur
    on:change />
  <label class="usa-checkbox__label" for="{id}">
    <slot>{label}</slot>
  </label>
</div>
