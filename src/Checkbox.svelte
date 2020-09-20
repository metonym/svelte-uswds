<script>
  export let id = "uswds-" + Math.random().toString(36);
  export let name = "";
  export let value = "";
  export let label = "Checkbox label"; // string | slot
  export let checked = false;
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
