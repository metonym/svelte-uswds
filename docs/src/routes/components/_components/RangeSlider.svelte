<script>
  import { Grid, RangeSlider } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  $: code = `<script>
  import { RangeSlider } from "svelte-uswds";
<\/script>

<RangeSlider min={0} max={100} step={10} value={20} />`;
</script>

<Layout componentName="RangeSlider" code="{code}" hideProps>
  <RangeSlider min="{0}" max="{100}" step="{10}" value="{20}" />
</Layout>
