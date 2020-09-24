<script>
  /**
   * @type {{ value: string; text?: string; }[]} [options=[]]
   */
  export let options = [];

  /**
   * @type {string} [selected]
   */
  export let selected = undefined;

  /**
   * @type {string} [id=""]
   */
  export let id = "uswds-" + Math.random().toString(36);

  /**
   * @type {string} [label="Dropdown label"]
   */
  export let label = "Dropdown label";

  /**
   * @type {string} [name=""]
   */
  export let name = "";

  /**
   * @type {boolean} [success=false]
   */
  export let success = false;

  /**
   * @type {boolean} [error=false]
   */
  export let error = false;

  /**
   * @type {string} [errorText="Helpful error message"]
   */
  export let errorText = "Helpful error message";

  /**
   * @type {boolean} [readonly=false]
   */
  export let readonly = false;

  /**
   * @type {boolean} [required=false]
   */
  export let required = false;

  /**
   * @type {boolean} [disabled=false]
   */
  export let disabled = false;
</script>

{#if error}
  <div class="usa-form-group usa-form-group--error">
    <label class="usa-label usa-label--error" for="{id}">
      {label}
      {#if !required}<span class="usa-hint">(optional)</span>{/if}
    </label>
    <span
      class="usa-error-message"
      id="error-{id}"
      role="alert"
    >{errorText}</span>
    <!-- svelte-ignore a11y-no-onchange -->
    <select
      class="usa-select usa-input--error"
      name="{name}"
      disabled="{disabled}"
      id="{id}"
      readonly="{readonly}"
      on:change
      on:change="{({ target }) => {
        selected = target.value;
      }}"
    >
      {#each options as option}
        <option value="{option.value}" selected="{selected === option.value}">
          {option.text || option.value}
        </option>
      {/each}
    </select>
  </div>
{:else}
  <label class="usa-label" for="{id}">
    {label}
    {#if !required}<span class="usa-hint">(optional)</span>{/if}
  </label>
  <!-- svelte-ignore a11y-no-onchange -->
  <select
    class="usa-select"
    class:usa-input--success="{success}"
    name="{name}"
    disabled="{disabled}"
    id="{id}"
    readonly="{readonly}"
    on:change
    on:change="{({ target }) => {
      selected = target.value;
    }}"
  >
    {#each options as option}
      <option value="{option.value}" selected="{selected === option.value}">
        {option.text || option.value}
      </option>
    {/each}
  </select>
{/if}
