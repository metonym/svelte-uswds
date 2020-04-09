<script>
  export let id = "uswds-" + Math.random().toString(36);
  export let big = false;
  export let small = false;
  export let label = "Search";
  export let name = "search";
  export let value = "";

  import { createEventDispatcher, afterUpdate } from "svelte";

  const dispatch = createEventDispatcher();

  let prevValue = value;

  afterUpdate(() => {
    if (value.length === 0 && prevValue.length > 0) {
      dispatch("clear");
    }

    prevValue = value;
  });
</script>

<form
  {...$$restProps}
  role="search"
  class:usa-search={true}
  class:usa-search--big={big}
  class:usa-search--small={small}
  on:submit|preventDefault>
  <label class="usa-sr-only" for={id}>{label}</label>
  <input {id} {name} class="usa-input" type="search" on:input on:focus on:blur bind:value />
  <button class="usa-button" type="submit">
    <span class:usa-sr-only={small} class:usa-search__submit-text={!small}>{label}</span>
  </button>
</form>
