<script>
  import { Grid, Checkbox, ButtonGroup, Button } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let segmented = false;

  $: buttonGroupProps = { segmented };
  $: props = [`${segmented ? " segmented" : ""}`].join("");
  $: code = `<script>
  import { ButtonGroup, Button } from "svelte-uswds";
<\/script>
  
<ButtonGroup${props}>
  <li class="usa-button-group__item">
    <Button kind="outline">Back</Button>
  </li>
  <li class="usa-button-group__item">
    <Button>Continue</Button>
  </li>
</ButtonGroup>`;
</script>

<style>
  :global(.wrapper > *) {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>

<Layout componentName="ButtonGroup" code="{code}">
  <div class="wrapper">
    <ButtonGroup {...buttonGroupProps}>
      <li class="usa-button-group__item">
        <Button kind="outline">Back</Button>
      </li>
      <li class="usa-button-group__item">
        <Button>Continue</Button>
      </li>
    </ButtonGroup>
  </div>

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked="{segmented}" value="segmented">
          <code class="font-mono-xs padding-05 radius-sm">segmented</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
