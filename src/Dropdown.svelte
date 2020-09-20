<script>
  export let id = "uswds-" + Math.random().toString(36);
  export let label = "Dropdown label";
  export let name = "";
  export let options = []; // { value: string; text?: string; }[]
  export let selected = undefined; // string
  export let success = false;
  export let error = false;
  export let errorText = "Helpful error message";
  export let readonly = false;
  export let required = false;
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
      role="alert">{errorText}</span>
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
      }}">
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
    }}">
    {#each options as option}
      <option value="{option.value}" selected="{selected === option.value}">
        {option.text || option.value}
      </option>
    {/each}
  </select>
{/if}
