<script>
  import { TimePicker } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  $: code = `<script>
  import { TimePicker } from "svelte-uswds";
<\/script>
  
<TimePicker label="Appointment time" />`;
</script>

<Layout componentName="TimePicker" code="{code}" hideProps>
  <TimePicker label="Appointment time" />
</Layout>
