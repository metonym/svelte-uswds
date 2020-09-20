<script>
  import {
    Grid,
    Checkbox,
    Alert,
    Checklist,
    ChecklistItem,
    TextInput,
  } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let test = "Az";

  $: code = `<script>
  import { Alert, Checklist, ChecklistItem, TextInput } from "svelte-uswds";
<\/script>

<Alert kind="validation" title="Requirements">
  <Checklist>
    <ChecklistItem {test} validator="uppercase" minLength={1}>
      Use at least one uppercase character
    </ChecklistItem>
    <ChecklistItem {test} validator="numerical" minLength={1}>
      Use at least one number
    </ChecklistItem>
  </Checklist>
</Alert>
<TextInput required bind:value={test} />`;
</script>

<Layout componentName="Checklist" code="{code}" hideProps="{true}">
  <Alert kind="validation" title="Requirements">
    <Checklist>
      <ChecklistItem test="{test}" validator="uppercase" minLength="{1}">
        Use at least one uppercase character
      </ChecklistItem>
      <ChecklistItem test="{test}" validator="numerical" minLength="{1}">
        Use at least one number
      </ChecklistItem>
    </Checklist>
  </Alert>
  <TextInput required bind:value="{test}" />
</Layout>
