<script>
  import { Grid, Checkbox } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let checked = false;
  let disabled = false;

  $: props = [
    `${checked ? " checked" : ""}`,
    `${disabled ? " disabled" : ""}`,
  ].join("");
  $: code = `<script>
  import { Checkbox } from "svelte-uswds";
<\/script>

<Checkbox${props} value="truth">Sojourner Truth</Checkbox>`;
</script>

<Layout componentName="Checkbox" code="{code}">
  <Checkbox checked="{checked}" disabled="{disabled}" value="truth">
    Sojourner Truth
  </Checkbox>

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked value="checked">
          <code class="font-mono-xs padding-05 radius-sm">checked</code>
        </Checkbox>
        <Checkbox bind:checked="{disabled}" value="disabled">
          <code class="font-mono-xs padding-05 radius-sm">disabled</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
