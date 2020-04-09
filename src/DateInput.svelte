<script>
  export let id = "uswds-" + Math.random().toString(36);
  export let legend = "Date input";
  export let hint = "Hint text";
  export let today = false;
  export let month = undefined; // number
  export let day = undefined; // number
  export let year = undefined; // number
  export let maxYear = 2020;
  export let minYear = maxYear - 10;

  $: if (today) {
    const date = new Date();

    month = date.getUTCMonth() + 1;
    day = date.getUTCDate();
    year = date.getFullYear();
  }
</script>

<legend class="usa-legend">{legend}</legend>
<span class="usa-hint" {id}>{hint}</span>
<div class="usa-memorable-date">
  <div class="usa-form-group usa-form-group--month">
    <label class="usa-label" for="month-{id}">Month</label>
    <input
      class="usa-input usa-input--inline"
      aria-describedby={id}
      id="month-{id}"
      name="month-{id}"
      type="number"
      min="1"
      max="12"
      bind:value={month} />
  </div>
  <div class="usa-form-group usa-form-group--day">
    <label class="usa-label" for="day-{id}">Day</label>
    <input
      class="usa-input usa-input--inline"
      aria-describedby={id}
      id="day-{id}"
      name="day-{id}"
      type="number"
      min="1"
      max="31"
      bind:value={day} />
  </div>
  <div class="usa-form-group usa-form-group--year">
    <label class="usa-label" for="year-{id}">Year</label>
    <input
      class="usa-input usa-input--inline"
      aria-describedby={id}
      id="year-{id}"
      name="year-{id}"
      type="number"
      min={minYear}
      max={maxYear}
      bind:value={year} />
  </div>
</div>
