<script>
  import { Grid, Checkbox, PasswordInput, Fieldset } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let showPassword = false;
  let autocomplete = true;

  $: props = [
    `${showPassword ? ` showPassword` : ""}`,
    `${autocomplete ? ` autocomplete` : ""}`,
  ].join("");
  $: code = `<script>
  import { PasswordInput } from "svelte-uswds";
<\/script>

<Fieldset style="max-width: fit-content" legend="">
  <PasswordInput${props} label="Password" />
</Fieldset>`;
</script>

<Layout componentName="PasswordInput" code="{code}">
  <Fieldset style="max-width: fit-content" legend="">
    <PasswordInput
      showPassword="{showPassword}"
      autocomplete="{autocomplete}"
      label="Password"
    />
  </Fieldset>

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked="{showPassword}" value="showPassword">
          <code class="font-mono-xs padding-05 radius-sm">showPassword</code>
        </Checkbox>
        <Checkbox bind:checked="{autocomplete}" value="autocomplete">
          <code class="font-mono-xs padding-05 radius-sm">autocomplete</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
