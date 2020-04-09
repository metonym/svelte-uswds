<script>
  export let id = "uswds-" + Math.random().toString(36);
  export let name = "";
  export let type = "text"; // 'text' | 'number' | 'password'
  export let value = "";
  export let label = "Text input";
  export let size = undefined; // 'small' | 'medium'
  export let success = false;
  export let error = false;
  export let errorText = "Helpful error message";
  export let readonly = false;
  export let required = false;
  export let disabled = false;
  export let pattern = undefined; // string
  export let autocapitalize = false;
  export let autocorrect = false;
  export let spellcheck = false;
  export let autocomplete = false;

  $: if (typeof autocomplete === "boolean") {
    autocomplete = autocomplete == true ? "on" : "off";
  }
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
    <input
      class="usa-input usa-input--error"
      class:usa-input--small={size === 'small'}
      class:usa-input--medium={size === 'medium'}
      aria-describedby="error-{id}"
      {id}
      {autocapitalize}
      {autocomplete}
      {autocorrect}
      {spellcheck}
      {name}
      {disabled}
      {pattern}
      {type}
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
  <input
    class="usa-input"
    class:usa-input--small={size === 'small'}
    class:usa-input--medium={size === 'medium'}
    class:usa-input--success={success}
    {id}
    {autocapitalize}
    {autocomplete}
    {autocorrect}
    {spellcheck}
    {name}
    {disabled}
    {pattern}
    {type}
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
