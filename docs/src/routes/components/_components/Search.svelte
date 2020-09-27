<script>
  import { Grid, Checkbox, Search } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let big = false;
  let small = false;

  $: props = [`${big ? ` big` : ""}`, `${small ? ` small` : ""}`].join("");
  $: code = `<script>
  import { Search } from "svelte-uswds";
<\/script>

<Search${props} />`;
</script>

<Layout componentName="Search" code="{code}">
  <Search big="{big}" small="{small}" />

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox
          checked="{big}"
          value="big"
          on:change="{({ target }) => {
            big = target.checked;
            if (target.checked) {
              small = false;
            }
          }}"
        >
          <code class="font-mono-xs padding-05 radius-sm">big</code>
        </Checkbox>
        <Checkbox
          checked="{small}"
          value="small"
          on:change="{({ target }) => {
            small = target.checked;
            if (target.checked) {
              big = false;
            }
          }}"
        >
          <code class="font-mono-xs padding-05 radius-sm">small</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
