<script>
  import { getContext, setContext } from "svelte";

  const ctx = getContext("SideNavigationList");

  setContext("SideNavigationList", {});
</script>

<ul
  {...$$restProps}
  class:usa-sidenav={ctx === undefined}
  class:usa-sidenav__sublist={ctx !== undefined}>
  <slot />
</ul>
