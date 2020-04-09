<script>
  export let status;
  export let error;

  import { Link, Grid } from "svelte-uswds";
  import HeaderTitle from "../components/HeaderTitle.svelte";

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  :global(footer) {
    display: none;
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>
<Grid>
  <HeaderTitle subtitle={error.message}>{status}</HeaderTitle>
  <p>
    Return to
    <Link href="/">home</Link>
    .
  </p>
  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</Grid>
