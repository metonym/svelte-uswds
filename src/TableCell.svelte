<script>
  /**
   * @type {boolean} [tabular=false]
   */
  export let tabular = false;

  import { getContext, onMount } from "svelte";

  const ctxTableHead = getContext("TableHead");
  const ctxTableRow = getContext("TableRow");
  const id = Math.random().toString(36);

  let firstTd = false;
  let unsubscribe = undefined;

  onMount(() => {
    return () => {
      if (ctxTableRow) ctxTableRow.remove(id);
      if (unsubscribe) unsubscribe();
    };
  });

  $: if (ctxTableRow) {
    ctxTableRow.add(id);
    unsubscribe = ctxTableRow.cells.subscribe((value) => {
      firstTd = value.indexOf(id) === 0;
    });
  }
</script>

{#if ctxTableHead}
  <th {...$$restProps} on:click scope="col" class:text-tabular="{tabular}">
    <slot />
  </th>
{:else}
  {#if firstTd}
    <th {...$$restProps} on:click scope="row" class:text-tabular="{tabular}">
      <slot />
    </th>
  {:else}
    <td {...$$restProps} on:click class:text-tabular="{tabular}">
      <slot />
    </td>
  {/if}
{/if}
