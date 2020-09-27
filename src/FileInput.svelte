<script>
  /**
   * @type {string} [id=""]
   */
  export let id = "uswds-" + Math.random().toString(36);

  /**
   * @type {string} [label="File input"]
   */
  export let label = "File input";

  /**
   * @type {boolean} [multiple=false]
   */
  export let multiple = false;

  /**
   * @type {boolean} [disabled=false]
   */
  export let disabled = false;

  /**
   * @type {string} [hint=""]
   */
  export let hint = "";

  /**
   * @type {boolean} [error=false]
   */
  export let error = false;

  /**
   * @type {string} [errorText=""]
   */
  export let errorText = "";
</script>

<div class="usa-form-group" class:usa-form-group--error="{error}">
  <label
    class="usa-label"
    class:usa-label--error="{error}"
    for="{id}"
  >{label}</label>
  {#if hint}<span class="usa-hint" id="{id}-hint">{hint}</span>{/if}
  {#if error}
    <span
      class="usa-error-message"
      id="{id}-alert"
      role="alert"
    >{errorText}</span>
  {/if}
  <div class="usa-file-input">
    <div class="usa-file-input__target">
      <div class="usa-file-input__instructions" aria-hidden="true">
        <span class="usa-file-input__drag-text">Drag file here or </span><span
          class="usa-file-input__choose"
        >choose from folder</span>
      </div>
      <div class="usa-file-input__box"></div>
      <input
        id="{id}"
        class:usa-file-input__input="{true}"
        name="{id}"
        multiple="{multiple}"
        disabled="{disabled}"
        {...$$restProps}
        on:focus
        on:blur
        on:input
        on:drop
        type="file"
      />
    </div>
  </div>
</div>
