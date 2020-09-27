<script>
  /**
   * @type {string} [description=""]
   */
  export let description = "";

  /**
   * @type {string} [domain=""]
   */
  export let domain = "";

  /**
   * @type {string} [disclaimer=""]
   */
  export let disclaimer = "";
</script>

<div {...$$restProps} class="usa-identifier">
  <section class="usa-identifier__section usa-identifier__section--masthead">
    <div class="usa-identifier__container">
      <slot name="logos" props="{{ class: 'usa-identifier__logos' }}" />
      <div class="usa-identifier__identity">
        <p class="usa-identifier__identity-domain">
          <slot name="domain">{domain}</slot>
        </p>
        <p class="usa-identifier__identity-disclaimer">
          <slot name="disclaimer">{disclaimer}</slot>
        </p>
      </div>
    </div>
  </section>
  <nav
    class="usa-identifier__section usa-identifier__section--required-links"
    aria-label="Important links"
  >
    <div class="usa-identifier__container">
      <ul class="usa-identifier__required-links-list">
        <slot />
      </ul>
    </div>
  </nav>
  <section class="usa-identifier__section usa-identifier__section--usagov">
    <div class="usa-identifier__container">
      <slot
        name="description"
        props="{{ class: 'usa-identifier__usagov-description' }}"
      >
        <div class="usa-identifier__usagov-description">{description}</div>
      </slot>
    </div>
  </section>
</div>
