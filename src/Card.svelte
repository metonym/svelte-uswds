<script>
  /**
   * @type {boolean} [flag=false]
   */
  export let flag = false;

  /**
   * @type {boolean} [mediaRight=false]
   */
  export let mediaRight = false;

  /**
   * @type {string} [heading=""]
   */
  export let heading = "";

  /**
   * @type {boolean} [headerFirst=false]
   */
  export let headerFirst = false;

  /**
   * @type {string} [buttonText=""]
   */
  export let buttonText = "";

  /**
   * @type {string} [imgSrc]
   */
  export let imgSrc = undefined;

  /**
   * @type {string} [imgAlt=""]
   */
  export let imgAlt = "";

  /**
   * @type {boolean} [insetMedia=false]
   */
  export let insetMedia = false;

  /**
   * @type {boolean} [exdentMedia=false]
   */
  export let exdentMedia = false;
</script>

<li
  class="tablet:grid-col-{flag ? 6 : 4}"
  class:usa-card="{true}"
  class:usa-card--header-first="{headerFirst}"
  class:usa-card--flag="{flag}"
  class:usa-card--media-right="{mediaRight}"
  {...$$restProps}>
  <div class="usa-card__container">
    <header class="usa-card__header">
      <h2 class="usa-card__heading">
        <slot name="heading">{heading}</slot>
      </h2>
    </header>
    {#if imgSrc}
      <div
        class="usa-card__media"
        class:usa-card__media--inset="{insetMedia}"
        class:usa-card__media--exdent="{exdentMedia}">
        <div class="usa-card__img"><img src="{imgSrc}" alt="{imgAlt}" /></div>
      </div>
    {/if}
    <div class="usa-card__body">
      <p>
        <slot />
      </p>
    </div>
    <div class="usa-card__footer">
      <slot name="button">
        <button class="usa-button" on:click>{buttonText}</button>
      </slot>
    </div>
  </div>
</li>
