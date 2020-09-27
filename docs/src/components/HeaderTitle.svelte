<script>
  export let subtitle = "";

  import { Heading } from "svelte-uswds";
</script>

<p class="font-sans-3xs text-ls-1 margin-top-0 margin-bottom-05 text-uppercase">
  {subtitle}
</p>
<Heading class="font-sans-2xl margin-top-0">
  <slot />
</Heading>
