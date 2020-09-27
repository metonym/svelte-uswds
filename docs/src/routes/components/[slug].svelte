<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`components/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;

  import * as registry from "./_components";
  import HeaderTitle from "../../components/HeaderTitle.svelte";
  import { Grid } from "svelte-uswds";
  import { getContext, onMount } from "svelte";

  const ctx = getContext("Navigation");

  onMount(() => {
    return () => {
      ctx.slug.set(undefined);
    };
  });

  $: if (post.slug) {
    ctx.slug.set(post.slug);
  }
</script>

<svelte:head>
  <title>{post.title} | Components</title>
</svelte:head>

<Grid>
  <HeaderTitle subtitle="Components">{post.title}</HeaderTitle>
  <svelte:component this="{registry[post.title]}" />
</Grid>
