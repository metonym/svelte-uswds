<script>
  /**
   * @type {boolean} [row=false]
   */
  export let row = false;

  /**
   * @type {boolean | "lg" | "2px" | "05" | 1 | 2 | 3 | 4 | 5 | 6} [gutters=false]
   */
  export let gutters = false;

  /**
   * @type {boolean | number} [col]
   */
  export let col = undefined;

  /**
   * @type {"mobile-lg" | "tablet" | "desktop"} [variant]
   */
  export let variant = undefined;

  /**
   * @type {boolean} [auto=false]
   */
  export let auto = false;

  /**
   * @type {boolean} [fill=false]
   */
  export let fill = false;

  /**
   * @type {number} [offset=0]
   */
  export let offset = 0;

  $: gap = row && gutters != false;
  $: column = typeof col === "boolean" && col == true;
  $: length = typeof col === "number" ? col : false;
</script>

<div
  {...$$restProps}
  class:grid-container="{!row && !col}"
  class:grid-row="{row}"
  class:grid-gap="{gap}"
  class:grid-gap-lg="{gap && gutters === 'lg'}"
  class:grid-gap-2px="{gap && gutters === '2px'}"
  class:grid-gap-05="{gap && gutters === '05'}"
  class:grid-gap-1="{gap && gutters === 1}"
  class:grid-gap-2="{gap && gutters === 2}"
  class:grid-gap-3="{gap && gutters === 3}"
  class:grid-gap-4="{gap && gutters === 4}"
  class:grid-gap-5="{gap && gutters === 5}"
  class:grid-gap-6="{gap && gutters === 6}"
  class:grid-col="{column && variant === undefined}"
  class:mobile-lg:grid-col="{column && variant === 'mobile-lg'}"
  class:tablet:grid-col="{column && variant === 'tablet'}"
  class:desktop:grid-col="{column && variant === 'desktop'}"
  class:mobile-lg:grid-col-1="{length === 1 && variant === 'mobile-lg'}"
  class:mobile-lg:grid-col-2="{length === 2 && variant === 'mobile-lg'}"
  class:mobile-lg:grid-col-3="{length === 3 && variant === 'mobile-lg'}"
  class:mobile-lg:grid-col-4="{length === 4 && variant === 'mobile-lg'}"
  class:mobile-lg:grid-col-5="{length === 5 && variant === 'mobile-lg'}"
  class:mobile-lg:grid-col-6="{length === 6 && variant === 'mobile-lg'}"
  class:mobile-lg:grid-col-7="{length === 7 && variant === 'mobile-lg'}"
  class:mobile-lg:grid-col-8="{length === 8 && variant === 'mobile-lg'}"
  class:mobile-lg:grid-col-9="{length === 9 && variant === 'mobile-lg'}"
  class:mobile-lg:grid-col-10="{length === 10 && variant === 'mobile-lg'}"
  class:mobile-lg:grid-col-11="{length === 11 && variant === 'mobile-lg'}"
  class:mobile-lg:grid-col-12="{length === 12 && variant === 'mobile-lg'}"
  class:tablet:grid-col-1="{length === 1 && variant === 'tablet'}"
  class:tablet:grid-col-2="{length === 2 && variant === 'tablet'}"
  class:tablet:grid-col-3="{length === 3 && variant === 'tablet'}"
  class:tablet:grid-col-4="{length === 4 && variant === 'tablet'}"
  class:tablet:grid-col-5="{length === 5 && variant === 'tablet'}"
  class:tablet:grid-col-6="{length === 6 && variant === 'tablet'}"
  class:tablet:grid-col-7="{length === 7 && variant === 'tablet'}"
  class:tablet:grid-col-8="{length === 8 && variant === 'tablet'}"
  class:tablet:grid-col-9="{length === 9 && variant === 'tablet'}"
  class:tablet:grid-col-10="{length === 10 && variant === 'tablet'}"
  class:tablet:grid-col-11="{length === 11 && variant === 'tablet'}"
  class:tablet:grid-col-12="{length === 12 && variant === 'tablet'}"
  class:desktop:grid-col-1="{length === 1 && variant === 'desktop'}"
  class:desktop:grid-col-2="{length === 2 && variant === 'desktop'}"
  class:desktop:grid-col-3="{length === 3 && variant === 'desktop'}"
  class:desktop:grid-col-4="{length === 4 && variant === 'desktop'}"
  class:desktop:grid-col-5="{length === 5 && variant === 'desktop'}"
  class:desktop:grid-col-6="{length === 6 && variant === 'desktop'}"
  class:desktop:grid-col-7="{length === 7 && variant === 'desktop'}"
  class:desktop:grid-col-8="{length === 8 && variant === 'desktop'}"
  class:desktop:grid-col-9="{length === 9 && variant === 'desktop'}"
  class:desktop:grid-col-10="{length === 10 && variant === 'desktop'}"
  class:desktop:grid-col-11="{length === 11 && variant === 'desktop'}"
  class:desktop:grid-col-12="{length === 12 && variant === 'desktop'}"
  class:grid-col-1="{length === 1}"
  class:grid-col-2="{length === 2}"
  class:grid-col-3="{length === 3}"
  class:grid-col-4="{length === 4}"
  class:grid-col-5="{length === 5}"
  class:grid-col-6="{length === 6}"
  class:grid-col-7="{length === 7}"
  class:grid-col-8="{length === 8}"
  class:grid-col-9="{length === 9}"
  class:grid-col-10="{length === 10}"
  class:grid-col-11="{length === 11}"
  class:grid-col-12="{length === 12}"
  class:grid-col-auto="{auto}"
  class:grid-col-fill="{fill}"
  class:grid-offset-1="{offset === 1}"
  class:grid-offset-2="{offset === 2}"
  class:grid-offset-3="{offset === 3}"
  class:grid-offset-4="{offset === 4}"
  class:grid-offset-5="{offset === 5}"
  class:grid-offset-6="{offset === 6}"
  class:grid-offset-7="{offset === 7}"
  class:grid-offset-8="{offset === 8}"
  class:grid-offset-9="{offset === 9}"
  class:grid-offset-10="{offset === 10}"
  class:grid-offset-11="{offset === 11}"
  class:grid-offset-12="{offset === 12}"
>
  <slot />
</div>
