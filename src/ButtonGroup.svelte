<script>
  /**
   * @type {boolean} [segmented=false]
   */
  export let segmented = false;

  /**
   * @example
   * <ButtonGroup>
   *   <li class="usa-button-group__item">
   *     <Button kind="outline">Back</Button>
   *   </li>
   *   <li class="usa-button-group__item">
   *     <Button>Continue</Button>
   *   </li>
   * </ButtonGroup>
   */
</script>

<ul
  class:usa-button-group="{true}"
  class:usa-button-group--segmented="{segmented}"
  {...$$restProps}
>
  <slot />
</ul>
