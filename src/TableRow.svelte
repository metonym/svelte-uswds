<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  const cells = writable([]);

  setContext("TableRow", {
    cells,
    add: (id) => {
      cells.update((_) => [..._, id]);
    },
    remove: (id) => {
      cells.set($cells.filter((cell_id) => cell_id !== id));
    },
  });
</script>

<tr {...$$restProps} on:click>
  <slot />
</tr>
