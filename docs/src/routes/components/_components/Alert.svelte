<script>
  import {
    Grid,
    Alert,
    Accordion,
    AccordionItem,
    Checkbox,
    Link,
    Heading,
  } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let slim = false;
  let hideIcon = false;

  $: props = `${slim ? " slim" : ""}${hideIcon ? " hideIcon" : ""}`;
  $: code = `<script>
  import { Alert } from "svelte-uswds";
<\/script>

<Alert kind="success" title="Success status"${props}>Lorem ipsum dolor sit amet.</Alert>
<Alert kind="warning" title="Warning status"${props}>Lorem ipsum dolor sit amet.</Alert>
<Alert kind="error" title="Error status"${props}>Lorem ipsum dolor sit amet.</Alert>
<Alert kind="info" title="Info status"${props}>Lorem ipsum dolor sit amet.</Alert>`;
</script>

<Layout componentName="Alert" code="{code}">
  <Alert
    kind="success"
    title="Success status"
    slim="{slim}"
    hideIcon="{hideIcon}"
  >
    Lorem ipsum dolor sit amet.
  </Alert>
  <Alert
    kind="warning"
    title="Warning status"
    slim="{slim}"
    hideIcon="{hideIcon}"
  >
    Lorem ipsum dolor sit amet.
  </Alert>
  <Alert kind="error" title="Error status" slim="{slim}" hideIcon="{hideIcon}">
    Lorem ipsum dolor sit amet.
  </Alert>
  <Alert kind="info" title="Info status" slim="{slim}" hideIcon="{hideIcon}">
    Lorem ipsum dolor sit amet.
  </Alert>

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked="{slim}" value="slim">
          <code class="font-mono-xs padding-05 radius-sm">slim</code>
        </Checkbox>
        <Checkbox bind:checked="{hideIcon}" value="hideIcon">
          <code class="font-mono-xs padding-05 radius-sm">hideIcon</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
