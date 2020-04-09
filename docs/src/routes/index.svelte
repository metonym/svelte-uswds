<script>
  import { Grid, Prose, Link, Heading } from "svelte-uswds";
  import HeaderTitle from "../components/HeaderTitle";
  import Code from "../components/Code";
  import Token from "../components/Token";

  const linkStylesheet = `<!-- App.svelte -->
<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/uswds@2.6.0/dist/css/uswds.min.css" />
</svelte:head>`;

  const importComponents = `<!-- App.svelte -->
<script>
  import { Button } from "svelte-uswds";
<\/script>

<Button>Hello world</Button>`;
</script>

<style>
  hr {
    border: 0;
    height: 2px;
    max-width: 68ex;
    margin-left: 0;
  }
</style>

<svelte:head>
  <title>svelte-uswds</title>
</svelte:head>

<Grid>
  <HeaderTitle subtitle="Home">Welcome</HeaderTitle>
  <Prose>
    <p>
      <Token>svelte-uswds</Token>
      is a
      <Link external target="_blank" href="https://svelte.dev/">Svelte</Link>
      component library that implements the
      <Link external target="_blank" href="https://designsystem.digital.gov/">
        U.S. Web Design System
      </Link>
      .
    </p>
    <p>
      This library requires Svelte version 3.20 or greater.
      <sup>1</sup>
    </p>
  </Prose>

  <Heading class="font-family-heading margin-top-5" tag="h2">Quick start</Heading>
  <Heading class="font-family-heading margin-top-5" tag="h3">Installing</Heading>
  <Code code="yarn add -D svelte-uswds" style="max-width: 68ex;" />
  <Heading class="font-family-heading margin-top-5" tag="h3">Adding styles</Heading>
  <p class="usa-prose">
    In your root svelte file, link a stylesheet from a CDN using the svelte:head API.
  </p>
  <Code code={linkStylesheet} style="max-width: 68ex;" />
  <Heading class="font-family-heading margin-top-5" tag="h3">Importing components</Heading>
  <p class="usa-prose">Import components from the library.</p>
  <Code code={importComponents} style="max-width: 68ex;" />
  <p class="usa-prose">
    Explore the
    <Link rel="prefetch" href="/components/accordion/">component library</Link>
    .
  </p>
  <hr class="bg-gray-10 margin-y-5" />
  <Heading class="font-family-heading margin-top-5" tag="h4">Notes</Heading>
  <p class="usa-prose">
    1. This library uses the
    <span class="font-mono">$$restProps</span>
    API, which was released in
    <Link
      external
      target="_blank"
      href="https://github.com/sveltejs/svelte/blob/master/CHANGELOG.md#3200">
      Svelte v3.20.0
    </Link>
    .
  </p>
</Grid>
