<script>
  /**
   * @type {{ href: string; text: string; }[]} [items=[]]
   */
  export let items = [];

  /**
   * @type {boolean} [wrap=false]
   */
  export let wrap = false;
</script>

<nav
  aria-label="Breadcrumbs"
  class:usa-breadcrumb="{true}"
  class:usa-breadcrumb--wrap="{wrap}"
  {...$$restProps}>
  <ol class="usa-breadcrumb__list">
    {#each items as item, i}
      {#if i === items.length - 1}
        <li
          class="usa-breadcrumb__list-item"
          class:usa-current="{true}"
          aria-current="page">
          <span>{item.text}</span>
        </li>
      {:else}
        <li class="usa-breadcrumb__list-item">
          <a href="{item.href}" class="usa-breadcrumb__link">
            <span>{item.text}</span>
          </a>
        </li>
      {/if}
    {/each}
  </ol>
</nav>
