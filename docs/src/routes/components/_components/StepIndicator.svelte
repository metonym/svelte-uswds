<script>
  import {
    Grid,
    Checkbox,
    StepIndicator,
    StepIndicatorSegment,
  } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let noLabels = false;
  let centered = false;
  let counters = false;
  let smallCounters = false;

  $: props = [
    `${noLabels ? ` noLabels` : ""}`,
    `${centered ? ` centered` : ""}`,
    `${counters ? ` counters` : ""}`,
    `${smallCounters ? ` smallCounters` : ""}`,
  ].join("");
  $: code = `<script>
  import { StepIndicator, StepIndicatorSegment } from "svelte-uswds";
<\/script>
  
<StepIndicator${props}>
  <StepIndicatorSegment complete text="Personal information" />
  <StepIndicatorSegment complete text="Household status" />
  <StepIndicatorSegment current text="Supporting documents" />
  <StepIndicatorSegment text="Signature" />
  <StepIndicatorSegment text="Review and submit" />
</StepIndicator>`;
</script>

<Layout componentName="StepIndicator" code="{code}">
  <StepIndicator
    noLabels="{noLabels}"
    centered="{centered}"
    counters="{counters}"
    smallCounters="{smallCounters}"
  >
    <StepIndicatorSegment complete text="Personal information" />
    <StepIndicatorSegment complete text="Household status" />
    <StepIndicatorSegment current text="Supporting documents" />
    <StepIndicatorSegment text="Signature" />
    <StepIndicatorSegment text="Review and submit" />
  </StepIndicator>

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked="{noLabels}" value="noLabels">
          <code class="font-mono-xs padding-05 radius-sm">noLabels</code>
        </Checkbox>
        <Checkbox bind:checked="{centered}" value="centered">
          <code class="font-mono-xs padding-05 radius-sm">centered</code>
        </Checkbox>
        <Checkbox bind:checked="{counters}" value="counters">
          <code class="font-mono-xs padding-05 radius-sm">counters</code>
        </Checkbox>
        <Checkbox bind:checked="{smallCounters}" value="smallCounters">
          <code class="font-mono-xs padding-05 radius-sm">smallCounters</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
