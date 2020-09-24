<script>
  /**
   * @type {string} [id=""]
   */
  export let id = "uswds-" + Math.random().toString(36);

  /**
   * @type {string} [label="Range slider"]
   */
  export let label = "Range slider";

  /**
   * @type {number} [min=0]
   */
  export let min = 0;

  /**
   * @type {number} [max=100]
   */
  export let max = 100;

  /**
   * @type {number} [step=10]
   */
  export let step = 10;

  /**
   * @type {number} [value=20]
   */
  export let value = 20;

  /**
   * @type {boolean} [success=false]
   */
  export let success = false;

  /**
   * @type {boolean} [disabled=false]
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
      id="error-${id}"
      role="alert"
    >{errorText}</span>
    <input
      class="usa-range usa-input--error"
      type="range"
      id="{id}"
      disabled="{disabled}"
      readonly="{readonly}"
      required="{required}"
      aria-required="{required}"
      min="{min}"
      max="{max}"
      step="{step}"
      value="{value}"
      on:focus
      on:blur
      on:change
    />
  </div>
{:else}
  <label class="usa-label" for="{id}">{label}</label>
  <input
    class="usa-range"
    class:usa-input--success="{success}"
    type="range"
    id="{id}"
    disabled="{disabled}"
    readonly="{readonly}"
    required="{required}"
    aria-required="{required}"
    min="{min}"
    max="{max}"
    step="{step}"
    value="{value}"
    on:focus
    on:blur
    on:change
  />
{/if}
