<script>
  import { Grid, Checkbox, RadioButton, RadioButtonGroup } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  $: code = `<script>
  import { RadioButton, RadioButtonGroup } from "svelte-uswds";
<\/script>

<RadioButtonGroup>
  <RadioButton value="stanton" label="Elizabeth Cady Stanton" />
  <RadioButton value="anthony" label="Susan B. Anthony" />
  <RadioButton value="tubman" label="Harriet Tubman" />
</RadioButtonGroup>`;
</script>

<Layout componentName="RadioButton" code="{code}" hideProps>
  <RadioButtonGroup>
    <RadioButton value="stanton" label="Elizabeth Cady Stanton" />
    <RadioButton value="anthony" label="Susan B. Anthony" />
    <RadioButton value="tubman" label="Harriet Tubman" />
  </RadioButtonGroup>
</Layout>
