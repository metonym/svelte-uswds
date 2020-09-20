<script>
  /**
   * @type {string} [id=""]
   */
  export let id = "uswds-" + Math.random().toString(36);

  /**
   * @type {boolean} [big=false]
   */
  export let big = false;

  /**
   * @type {boolean} [small=false]
   */
  export let small = false;

  /**
   * @type {string} [label="Search"]
   */
  export let label = "Search";

  /**
   * @type {string} [name="search"]
   */
  export let name = "search";

  /**
   * @type {string} [value=""]
   */
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
  class:usa-search="{true}"
  class:usa-search--big="{big}"
  class:usa-search--small="{small}"
  on:submit|preventDefault>
  <label class="usa-sr-only" for="{id}">{label}</label>
  <input
    id="{id}"
    name="{name}"
    class="usa-input"
    type="search"
    on:input
    on:focus
    on:blur
    bind:value />
  <button class="usa-button" type="submit">
    <span
      class:usa-sr-only="{small}"
      class:usa-search__submit-text="{!small}">{label}</span>
  </button>
</form>
