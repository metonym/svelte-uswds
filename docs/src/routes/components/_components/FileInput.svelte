<script>
  import { Grid, Checkbox, FileInput } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let error = false;
  let disabled = false;

  $: props = [
    `${error ? ` error` : ""}`,
    `${disabled ? ` disabled` : ""}`,
  ].join("");
  $: code = `<script>
  import { FileInput } from "svelte-uswds";
<\/script>
  
<FileInput${props} errorText="Error message" label="File input" hint="Select a file" />`;
</script>

<Layout componentName="FileInput" code="{code}">
  <FileInput
    disabled="{disabled}"
    error="{error}"
    errorText="Error message"
    label="File input"
    hint="Select a file"
  />

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked="{disabled}" value="disabled">
          <code class="font-mono-xs padding-05 radius-sm">disabled</code>
        </Checkbox>
        <Checkbox bind:checked="{error}" value="error">
          <code class="font-mono-xs padding-05 radius-sm">error</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
