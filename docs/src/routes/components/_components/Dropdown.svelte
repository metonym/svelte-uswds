<script>
  import { Grid, Checkbox, Dropdown } from "svelte-uswds";
  import { afterUpdate } from "svelte";
  import Layout from "./Layout.svelte";

  const options = [
    { value: "George Washington" },
    { value: "John Adams" },
    { value: "Thomas Jefferson" },
  ];

  let selected = undefined;
  let selectJohnAdams = false;

  afterUpdate(() => {
    if (selectJohnAdams && selected !== "John Adams") {
      selectJohnAdams = false;
    }
  });

  $: selected = selectJohnAdams ? options[1].value : undefined;
  $: props = [`${selectJohnAdams ? ` selected="${selected}"` : ""}`].join("");
  $: code = `<script>
  import { Dropdown } from "svelte-uswds";

  const options = [
    { value: "George Washington" },
    { value: "John Adams" },
    { value: "Thomas Jefferson" }
  ];
<\/script>

<Dropdown${props} {options} />`;
</script>

<Layout componentName="Dropdown" code="{code}">
  <Dropdown bind:selected options="{options}" />

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked="{selectJohnAdams}" value="selected">
          Set
          <code class="font-mono-xs padding-05 radius-sm">selected</code>
          to "John Adams"
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
