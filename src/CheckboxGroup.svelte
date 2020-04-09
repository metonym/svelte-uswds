<script>
  export let legend = "Checkbox group";
  export let disabled = false;
  export let values = undefined; // string[]

  import { onMount, setContext, afterUpdate, createEventDispatcher, tick } from "svelte";
  import { writable, derived } from "svelte/store";
  import Fieldset from "./Fieldset.svelte";

  const dispatch = createEventDispatcher();
  const items = writable({});
  const flat = derived(items, _ => Object.values(_));
  const state = derived(flat, _ => _.map(({ checked }) => checked).join(""));

  let prevState = undefined;
  let prevValues = values;

  function updateValues() {
    if (values !== undefined && Array.isArray(values)) {
      items.update(_ => {
        $flat.forEach(item => {
          _[item.id].checked = values.includes(item.value);
        });

        return _;
      });
    }
  }

  setContext("CheckboxGroup", {
    items,
    add: item => {
      items.update(_ => ({ ..._, [item.id]: item }));
    },
    remove: item => {
      items.update(_ => {
        delete _[item.id];
        return _;
      });
    }
  });

  onMount(() => {
    updateValues();
  });

  afterUpdate(async () => {
    if (values !== prevValues) {
      prevValues = values;
      updateValues();
    }

    await tick();

    if (prevState !== undefined && $state !== prevState) {
      const checked = $flat.filter(_ => _.checked);
      const unchecked = $flat.filter(_ => !_.checked);

      values = checked.map(_ => _.value);

      dispatch("change", {
        checked,
        checked_ids: checked.map(_ => _.id),
        unchecked,
        unchecked_ids: unchecked.map(_ => _.id),
        items: $items,
        flat: $flat
      });
    }

    prevState = $state;
  });
</script>

<Fieldset class="usa-fieldset" {legend} {disabled} hideLegend>
  <slot />
</Fieldset>
