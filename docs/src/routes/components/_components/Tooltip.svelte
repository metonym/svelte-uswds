<script>
  import { Tooltip } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  $: code = `<script>
  import { Tooltip } from "svelte-uswds";
<\/script>
    
<Tooltip position="top" tooltipText="Tooltip text">Top</Tooltip>
<Tooltip position="right" tooltipText="Tooltip text">Right</Tooltip>
<Tooltip position="left" tooltipText="Tooltip text">Left</Tooltip>
<Tooltip position="bottom" tooltipText="Tooltip text">Bottom</Tooltip>`;
</script>

<style>
  :global(.wrapper > *) {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>

<Layout componentName="Tooltip" code="{code}" hideProps>
  <div class="wrapper">
    <Tooltip position="top" tooltipText="Tooltip text">Top</Tooltip>
    <Tooltip position="right" tooltipText="Tooltip text">Right</Tooltip>
    <Tooltip position="left" tooltipText="Tooltip text">Left</Tooltip>
    <Tooltip position="bottom" tooltipText="Tooltip text">Bottom</Tooltip>
  </div>
</Layout>
