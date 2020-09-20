<script>
  import { Grid, Checkbox, Tag } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let big = false;

  $: props = [`${big ? ` big` : ""}`].join("");
  $: code = `<script>
  import { Tag } from "svelte-uswds";
<\/script>

<Tag${props}>New</Tag>`;
</script>

<Layout componentName="Tag" code="{code}">
  <Tag big="{big}">New</Tag>

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked="{big}" value="big">
          <code class="font-mono-xs padding-05 radius-sm">big</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
