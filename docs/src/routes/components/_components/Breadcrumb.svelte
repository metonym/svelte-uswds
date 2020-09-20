<script>
  import { Grid, Checkbox, Breadcrumb } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let wrap = false;

  const items = [
    { href: "#", text: "Home" },
    { href: "#", text: "Programs" },
    { href: "#", text: "Program A" },
  ];

  $: breadcrumbProps = { wrap };
  $: props = [`${wrap ? " wrap" : ""}`].join("");
  $: code = `<script>
  import { Breadcrumb } from "svelte-uswds";

  const items = ${JSON.stringify(items)};
<\/script>

<Breadcrumb${props} {items} />`;
</script>

<style>
  :global(.wrapper > *) {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>

<Layout componentName="Breadcrumb" code="{code}">
  <div class="wrapper">
    <Breadcrumb {...breadcrumbProps} items="{items}" />
  </div>

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked="{wrap}" value="wrap">
          <code class="font-mono-xs padding-05 radius-sm">wrap</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
