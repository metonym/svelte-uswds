<script>
  import { Grid, Checkbox, DateInput } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let today = false;

  $: props = [`${today ? " today" : ""}`].join("");
  $: code = `<script>
  import { DateInput } from "svelte-uswds";
<\/script>

<DateInput${props} legend="Address date" hint="For example: 04 28 1986" />`;
</script>

<Layout componentName="DateInput" code="{code}">
  <DateInput
    today="{today}"
    legend="Address date"
    hint="For example: 04 28 1986"
  />

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked="{today}" value="today">
          <code class="font-mono-xs padding-05 radius-sm">today</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
