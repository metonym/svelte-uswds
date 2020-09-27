<script>
  export let componentName = "";
  export let code = "";
  export let hideProps = false;

  import { Link, Heading } from "svelte-uswds";
  import Code from "../../../components/Code.svelte";
</script>

<p>
  <Link
    external
    target="_blank"
    href="https://github.com/metonym/svelte-uswds/blob/master/src/{componentName}.svelte"
  >
    Source code
  </Link>
</p>

<section class="padding-2 border-2px border-gray-10 radius-sm margin-x-neg-2">
  <slot />
</section>

{#if !hideProps}
  <div class="display-flex flex-align-baseline">
    <Heading class="font-family-heading margin-top-5" tag="h2">Props</Heading>
  </div>

  <slot name="props" />
{/if}

<Heading class="font-family-heading margin-top-5" tag="h2">Usage</Heading>

<Code code="{code}" style="max-width: 102ex;" />
