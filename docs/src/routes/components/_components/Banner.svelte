<script>
  import { Grid, Checkbox, Banner } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let expanded = false;

  $: props = `${expanded ? "\n  expanded" : ""}`;
  $: code = `<script>
  import { Banner } from "svelte-uswds";
<\/script>

<Banner${props}
  headerText="Maintenance will occur between 08:00 and 12:00 PST."
  buttonText="More info">
  Routine maintenance checks will be performed on servers in Dallas and Atlanta.
</Banner>`;
</script>

<Layout componentName="Banner" code="{code}">
  <Banner
    expanded="{expanded}"
    headerText="Maintenance will occur between 08:00 and 12:00 PST."
    buttonText="More info"
  >
    Routine maintenance checks will be performed on servers in Dallas and
    Atlanta.
  </Banner>

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked="{expanded}" value="expanded">
          <code class="font-mono-xs padding-05 radius-sm">expanded</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
