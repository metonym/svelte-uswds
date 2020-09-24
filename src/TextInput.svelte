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
   * @type {"text" | "number" | "password"} [type="text"]
   */
  export let type = "text";

  /**
   * @type {string} [value=""]
   */
  export let value = "";

  /**
   * @type {string} [label="Text input"]
   */
  export let label = "Text input";

  /**
   * @type {"small" | "medium"} [size]
   */
  export let size = undefined;

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
   * @type {boolean} [disabled=false]
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

  /**
   * @type {string | RegExp} [pattern]
   */
  export let pattern = undefined;

  /**
   * @type {boolean} [autocapitalize=false]
   */
  export let autocapitalize = false;

  /**
   * @type {boolean} [autocorrect=false]
   */
  export let autocorrect = false;

  /**
   * @type {boolean} [spellcheck=false]
   */
  export let spellcheck = false;

  /**
   * @type {boolean} [autocomplete=false]
   */
  export let autocomplete = false;

  $: if (typeof autocomplete === "boolean") {
    autocomplete = autocomplete == true ? "on" : "off";
  }
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
    <input
      class="usa-input usa-input--error"
      class:usa-input--small="{size === 'small'}"
      class:usa-input--medium="{size === 'medium'}"
      aria-describedby="error-{id}"
      id="{id}"
      autocapitalize="{autocapitalize}"
      autocomplete="{autocomplete}"
      autocorrect="{autocorrect}"
      spellcheck="{spellcheck}"
      name="{name}"
      disabled="{disabled}"
      pattern="{pattern}"
      type="{type}"
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
    />
  </div>
{:else}
  <label class="usa-label" for="{id}">
    {label}
    {#if !required}<span class="usa-hint">(optional)</span>{/if}
  </label>
  <input
    class="usa-input"
    class:usa-input--small="{size === 'small'}"
    class:usa-input--medium="{size === 'medium'}"
    class:usa-input--success="{success}"
    id="{id}"
    autocapitalize="{autocapitalize}"
    autocomplete="{autocomplete}"
    autocorrect="{autocorrect}"
    spellcheck="{spellcheck}"
    name="{name}"
    disabled="{disabled}"
    pattern="{pattern}"
    type="{type}"
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
  />
{/if}
