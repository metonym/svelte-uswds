<script>
  export let href = "";
  export let text = "";
  export let current = false;
</script>

<li class="usa-sidenav__item">
  <a
    {...$$restProps}
    href="{href}"
    on:click
    class:usa-current="{current}"
    aria-current="{current ? 'page' : undefined}">
    {text || href}
  </a>
  <slot />
</li>
