<script>
  import { Grid, Checkbox, Button } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let big = false;
  let unstyled = false;
  let disabled = false;

  $: buttonProps = { big, unstyled, disabled };
  $: props = [
    `${big ? " big" : ""}`,
    `${unstyled ? " unstyled" : ""}`,
    `${disabled ? " disabled" : ""}`,
  ].join("");
  $: code = `<script>
  import { Button } from "svelte-uswds";
<\/script>

<Button kind="default"${props}>Default button</Button>
<Button kind="secondary"${props}>Secondary button</Button>
<Button kind="accent-cool"${props}>Accent cool button</Button>
<Button kind="base"${props}>Base button</Button>
<Button kind="outline"${props}>Outline button</Button>
<div class="bg-base-darkest padding-1" style="max-width: fit-content">
  <Button kind="outline-inverse"${props}>Outline inverse button</Button>
</div>`;
</script>

<style>
  :global(.wrapper > *) {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>

<Layout componentName="Button" code="{code}">
  <div class="wrapper">
    <Button kind="default" {...buttonProps}>Default button</Button>
    <Button kind="secondary" {...buttonProps}>Secondary button</Button>
    <Button kind="accent-cool" {...buttonProps}>Accent cool button</Button>
    <Button kind="base" {...buttonProps}>Base button</Button>
    <Button kind="outline" {...buttonProps}>Outline button</Button>
    <div class="bg-base-darkest padding-1" style="max-width: fit-content">
      <Button kind="outline-inverse" {...buttonProps}>
        Outline inverse button
      </Button>
    </div>
  </div>

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked="{big}" value="big">
          <code class="font-mono-xs padding-05 radius-sm">big</code>
        </Checkbox>
        <Checkbox bind:checked="{unstyled}" value="unstyled">
          <code class="font-mono-xs padding-05 radius-sm">unstyled</code>
        </Checkbox>
        <Checkbox bind:checked="{disabled}" value="disabled">
          <code class="font-mono-xs padding-05 radius-sm">disabled</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
