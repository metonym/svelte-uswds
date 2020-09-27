<script>
  /**
   * @type {string} [id=""]
   */
  export let id = "uswds-" + Math.random().toString(36);

  /**
   * @type {string} [label="Time picker"]
   */
  export let label = "Time picker";
</script>

<div class="usa-form-group">
  <div class="usa-time-picker">
    <label class="usa-label" id="{id}-label" for="{id}">{label}</label>
    <div class="usa-hint" id="{id}-hint">hh:mm</div>
    <input
      class:usa-input="{true}"
      id="{id}"
      name="{id}"
      type="text"
      aria-describedby="{id}-label {id}-hint"
      {...$$restProps}
    />
  </div>
</div>
