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
   * @type {string} [label="Text area"]
   */
  export let label = "Text area";

  /**
   * @type {boolean} [success=false]
   */
  export let success = false;

  /**
   * @type {boolean} [error=false]
   */
  export let error = false;

  /**
   * @type {boolean} [errorText="Helpful error message"]
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
    <textarea
      class="usa-textarea usa-input--error"
      type="text"
      id="{id}"
      name="{name}"
      disabled="{disabled}"
      value="{value}"
      readonly="{readonly}"
      required="{required}"
      aria-required="{required}"
      on:focus
      on:blur
      on:input
      on:input="{({ target }) => {
        value = target.value;
      }}"
    ></textarea>
  </div>
{:else}
  <label class="usa-label" for="{id}">
    {label}
    {#if !required}<span class="usa-hint">(optional)</span>{/if}
  </label>
  <textarea
    class="usa-textarea"
    class:usa-input--success="{success}"
    type="text"
    id="{id}"
    name="{name}"
    disabled="{disabled}"
    value="{value}"
    readonly="{readonly}"
    required="{required}"
    aria-required="{required}"
    on:focus
    on:blur
    on:input
    on:input="{({ target }) => {
      value = target.value;
    }}"
  ></textarea>
{/if}
