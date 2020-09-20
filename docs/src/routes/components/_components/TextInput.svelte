<script>
  import { Grid, Checkbox, TextInput } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let required = false;
  let disabled = false;

  $: props = [
    `${required ? ` required` : ""}`,
    `${disabled ? ` disabled` : ""}`,
  ].join("");
  $: code = `<script>
  import { TextInput } from "svelte-uswds";
<\/script>

<TextInput${props} label="Text input" />`;
</script>

<Layout componentName="TextInput" code="{code}">
  <TextInput required="{required}" disabled="{disabled}" label="Text input" />

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked="{required}" value="required">
          <code class="font-mono-xs padding-05 radius-sm">required</code>
        </Checkbox>
        <Checkbox bind:checked="{disabled}" value="disabled">
          <code class="font-mono-xs padding-05 radius-sm">disabled</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
