<script>
  export let id = "uswds-" + Math.random().toString(36);
  export let name = "";
  export let value = "";
  export let label = "Text area";
  export let success = false;
  export let error = false;
  export let errorText = "Helpful error message";
  export let readonly = false;
  export let required = false;
  export let disabled = false;
</script>

{#if error}
  <div class="usa-form-group usa-form-group--error">
    <label class="usa-label usa-label--error" for={id}>
      {label}
      {#if !required}
        <span class="usa-hint">(optional)</span>
      {/if}
    </label>
    <span class="usa-error-message" id="error-{id}" role="alert">{errorText}</span>
    <textarea
      class="usa-textarea usa-input--error"
      type="text"
      {id}
      {name}
      {disabled}
      {value}
      {readonly}
      {required}
      aria-required={required}
      on:focus
      on:blur
      on:input
      on:input={({ target }) => {
        value = target.value;
      }} />
  </div>
{:else}
  <label class="usa-label" for={id}>
    {label}
    {#if !required}
      <span class="usa-hint">(optional)</span>
    {/if}
  </label>
  <textarea
    class="usa-textarea"
    class:usa-input--success={success}
    type="text"
    {id}
    {name}
    {disabled}
    {value}
    {readonly}
    {required}
    aria-required={required}
    on:focus
    on:blur
    on:input
    on:input={({ target }) => {
      value = target.value;
    }} />
{/if}
