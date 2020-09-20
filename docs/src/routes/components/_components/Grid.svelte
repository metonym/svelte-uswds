<script>
  import { Grid } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  $: code = `<script>
  import { Grid } from "svelte-uswds";
<\/script>

<Grid>
  <Grid row>
    <Grid col>1</Grid>
    <Grid col>2</Grid>
    <Grid col>3</Grid>
    <Grid col>4</Grid>
  </Grid>
</Grid>`;
</script>

<Layout componentName="Grid" code="{code}" hideProps>
  <Grid>
    <Grid row>
      <Grid col>1</Grid>
      <Grid col>2</Grid>
      <Grid col>3</Grid>
      <Grid col>4</Grid>
    </Grid>
  </Grid>
</Layout>
