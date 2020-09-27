<script>
  /**
   * @type {string} [label="Password"]
   */
  export let label = "Password";

  /**
   * @type {boolean} [showPassword=false]
   */
  export let showPassword = false;

  /**
   * @type {boolean} [autocomplete=false]
   */
  export let autocomplete = true;

  import TextInput from "./TextInput.svelte";

  let type = "password";

  $: type = showPassword ? "text" : "password";
  $: showPasswordText = type === "password" ? "Show password" : "Hide password";
</script>

<TextInput
  {...$$restProps}
  autocomplete="{autocomplete}"
  label="{label}"
  type="{type}"
  required
  on:focus
  on:blur
  on:input
/>
<p class="usa-form__note">
  <a
    class="usa-show-password"
    href="#show-password"
    aria-controls="{$$props['aria-controls'] || 'password-input'}"
    title="{showPasswordText}"
    on:click|preventDefault="{() => {
      showPassword = !showPassword;
    }}"
  >
    {showPasswordText}
  </a>
</p>
