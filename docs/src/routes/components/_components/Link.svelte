<script>
  import { Grid, Checkbox, Link } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let external = false;
  let href = "https://designsystem.digital.gov/";

  $: props = [, `${external ? ` external` : ""}`, ` href="${href}"`].join("");
  $: code = `<script>
  import { Link } from "svelte-uswds";
<\/script>

<Link${props}>U.S. Web Design System</Link>`;
</script>

<Layout componentName="Link" code="{code}">
  <Link external="{external}" href="{href}">U.S. Web Design System</Link>

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked="{external}" value="external">
          <code class="font-mono-xs padding-05 radius-sm">external</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
