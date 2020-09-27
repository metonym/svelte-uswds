<script>
  /**
   * @type {string} [legend="Radio button group"]
   */
  export let legend = "Radio button group";

  /**
   * @type {boolean} [disabled=false]
   */
  export let disabled = false;

  /**
   * @type {string} [value]
   */
  export let value = undefined;

  import {
    setContext,
    onMount,
    afterUpdate,
    createEventDispatcher,
    tick,
  } from "svelte";
  import { writable, derived } from "svelte/store";

  const dispatch = createEventDispatcher();
  const items = writable({});
  const flat = derived(items, (_) => Object.values(_));
  const state = derived(flat, (_) => _.map(({ checked }) => checked).join(""));

  let prevState = undefined;
  let prevValue = value;

  function updateValues(item) {
    items.update((_) => {
      Object.keys(_).forEach((id) => {
        _[id].checked = id === item.id;
      });

      return _;
    });
  }

  setContext("RadioButtonGroup", {
    items,
    add: (item) => {
      items.update((_) => ({ ..._, [item.id]: item }));
    },
    toggle: updateValues,
    remove: (item) => {
      items.update((_) => {
        delete _[item.id];
        return _;
      });
    },
  });

  onMount(() => {
    if ($flat.filter(({ checked }) => checked).length === 0) {
      const item = $flat.filter((_) => _.value === value)[0] || $flat[0];

      items.update((_) => {
        _[item.id].checked = true;
        return _;
      });
    }
  });

  afterUpdate(async () => {
    if (value !== prevValue) {
      prevValue = value;

      const selected = Object.values($items).filter(
        (_) => _.value === value
      )[0];

      if (selected !== undefined) updateValues(selected);
    }

    await tick();

    if (prevState !== undefined && $state !== prevState) {
      const selected = $flat.filter(({ checked }) => checked)[0];

      value = selected.value;

      dispatch("change", {
        selected_id: selected.id,
        selected_index: Object.keys($items).indexOf(selected.id),
        selected,
        items: $items,
        flat: $flat,
      });
    }

    prevState = $state;
  });
</script>

<fieldset class="usa-fieldset" disabled="{disabled}">
  <legend class="usa-sr-only">{legend}</legend>
  <slot />
</fieldset>
