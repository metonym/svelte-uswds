<script>
  import { Grid, Checkbox, List } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let ordered = false;
  let unstyled = false;

  $: props = [
    `${ordered ? ` ordered` : ""}`,
    `${unstyled ? ` unstyled` : ""}`,
  ].join("");
  $: code = `<script>
  import { List } from "svelte-uswds";
<\/script>

<List${props}>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</List>`;
</script>

<Layout componentName="List" code="{code}">
  <List ordered="{ordered}" unstyled="{unstyled}">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </List>

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked="{ordered}" value="ordered">
          <code class="font-mono-xs padding-05 radius-sm">ordered</code>
        </Checkbox>
        <Checkbox bind:checked="{unstyled}" value="unstyled">
          <code class="font-mono-xs padding-05 radius-sm">unstyled</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
