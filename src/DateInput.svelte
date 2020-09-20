<script>
  /**
   * @type {string} [id=""]
   */
  export let id = "uswds-" + Math.random().toString(36);

  /**
   * @type {string} [legend="Date input"]
   */
  export let legend = "Date input";

  /**
   * @type {string} [hint="Hint text"]
   */
  export let hint = "Hint text";

  /**
   * @type {boolean} [today=false]
   */
  export let today = false;

  /**
   * @type {number} [month]
   */
  export let month = undefined;

  /**
   * @type {number} [day]
   */
  export let day = undefined;

  /**
   * @type {number} [year]
   */
  export let year = undefined;

  /**
   * @type {number} [maxYear=2020]
   */
  export let maxYear = 2020;

  /**
   * @type {number} [minYear]
   */
  export let minYear = maxYear - 10;

  $: if (today) {
    const date = new Date();

    month = date.getUTCMonth() + 1;
    day = date.getUTCDate();
    year = date.getFullYear();
  }
</script>

<legend class="usa-legend">{legend}</legend>
<span class="usa-hint" id="{id}">{hint}</span>
<div class="usa-memorable-date">
  <div class="usa-form-group usa-form-group--month">
    <label class="usa-label" for="month-{id}">Month</label>
    <input
      class="usa-input usa-input--inline"
      aria-describedby="{id}"
      id="month-{id}"
      name="month-{id}"
      type="number"
      min="1"
      max="12"
      bind:value="{month}" />
  </div>
  <div class="usa-form-group usa-form-group--day">
    <label class="usa-label" for="day-{id}">Day</label>
    <input
      class="usa-input usa-input--inline"
      aria-describedby="{id}"
      id="day-{id}"
      name="day-{id}"
      type="number"
      min="1"
      max="31"
      bind:value="{day}" />
  </div>
  <div class="usa-form-group usa-form-group--year">
    <label class="usa-label" for="year-{id}">Year</label>
    <input
      class="usa-input usa-input--inline"
      aria-describedby="{id}"
      id="year-{id}"
      name="year-{id}"
      type="number"
      min="{minYear}"
      max="{maxYear}"
      bind:value="{year}" />
  </div>
</div>
