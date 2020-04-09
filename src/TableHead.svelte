<script>
  import { setContext } from "svelte";

  setContext("TableHead", {});
</script>

<thead {...$$restProps}>
  <slot />
</thead>
