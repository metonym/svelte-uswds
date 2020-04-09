<script>
  import { setContext } from "svelte";

  setContext("TableBody", {});
</script>

<tbody {...$$restProps}>
  <slot />
</tbody>
