<script>
  /**
   * @type {string} [id=""]
   */
  export let id = "uswds-" + Math.random().toString(36);

  /**
   * @type {boolean} [expanded=false]
   */
  export let expanded = false;

  /**
   * @type {string} [headerText="Header text"]
   */
  export let headerText = "Header text";

  /**
   * @type {string} [buttonText="Button text"]
   */
  export let buttonText = "Button text";
</script>

<section
  {...$$restProps}
  class:usa-banner="{true}"
  class:usa-banner__header--expanded="{expanded}"
  aria-label="{$$props['aria-label']}"
>
  <div class="usa-accordion">
    <header class="usa-banner__header">
      <div class="usa-banner__inner">
        <div class="grid-col-auto">
          <slot name="header" />
        </div>
        <div class="grid-col-fill tablet:grid-col-auto">
          <p class="usa-banner__header-text">{headerText}</p>
          <p class="usa-banner__header-action" aria-hidden="{!expanded}">
            {buttonText}
          </p>
        </div>
        <button
          class="usa-accordion__button usa-banner__button"
          aria-expanded="{expanded}"
          aria-controls="{id}"
          on:click="{() => {
            expanded = !expanded;
          }}"
        >
          <span class="usa-banner__button-text">{buttonText}</span>
        </button>
      </div>
    </header>
    <div
      id="{id}"
      class="usa-banner__content usa-accordion__content"
      hidden="{!expanded}"
    >
      <slot />
    </div>
  </div>
</section>
