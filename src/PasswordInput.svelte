<script>
  export let label = "Password";
  export let showPassword = false;
  export let autocomplete = true;

  import TextInput from "./TextInput.svelte";

  let type = "password";

  $: type = showPassword ? "text" : "password";
  $: showPasswordText = type === "password" ? "Show password" : "Hide password";
</script>

<TextInput {...$$restProps} {autocomplete} {label} {type} required on:focus on:blur on:input />
<p class="usa-form__note">
  <a
    class="usa-show-password"
    href="javascript:void(0);"
    aria-controls={$$props['aria-controls'] || 'password-input'}
    title={showPasswordText}
    on:click|preventDefault={() => {
      showPassword = !showPassword;
    }}>
    {showPasswordText}
  </a>
</p>
