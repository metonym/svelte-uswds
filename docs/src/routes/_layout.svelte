<script>
  import { setContext, afterUpdate } from "svelte";
  import { writable } from "svelte/store";
  import {
    ReturnToTop,
    SkipToMainContent,
    Link,
    Grid,
    SideNav,
    SideNavList,
    SideNavLink
  } from "svelte-uswds";
  import { nav_components } from "./components/_posts";

  export let segment = undefined;

  let prevPath = undefined;
  let visible = false;
  let mobile = false;
  let ref = undefined;

  const path = writable(segment);
  const slug = writable(undefined);

  setContext("Navigation", { path, slug });

  afterUpdate(() => {
    if (mobile) {
      if (visible) {
        document.body.classList.add("hidden");
      } else {
        document.body.classList.remove("hidden");
      }
    }

    if (mobile && returnToTopHref !== prevPath) {
      visible = false;
    }

    prevPath = returnToTopHref;
  });

  $: if (ref) {
    mobile = ref.getBoundingClientRect().width !== 0;
  }
  $: returnToTopHref = segment + "/";
  $: {
    path.set(segment);

    if ($slug !== undefined) {
      returnToTopHref = segment + "/" + $slug + "/";
    }

    if (segment === undefined && $slug === undefined) {
      returnToTopHref = "/";
    }
  }
</script>

<style>
  :global(body) {
    overflow-y: scroll;
  }

  :global(body.hidden) {
    overflow-y: hidden;
  }

  header {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 4.25rem;
  }

  aside {
    position: fixed;
    z-index: 1;
    top: 4.25rem;
    left: 0;
    width: 14rem;
    height: calc(100% - 4.25rem);
    overflow-y: scroll;
  }

  main,
  footer {
    padding-left: 15rem;
    padding-right: 1rem;
  }

  @media all and (max-width: 63.99em) {
    aside {
      width: 12rem;
    }

    main,
    footer {
      padding-left: 13rem;
    }
  }

  @media all and (max-width: 48em) {
    main,
    footer {
      padding-left: 0;
      padding-right: 0;
    }

    main.margin-top-10 {
      margin-top: -1.5rem;
    }

    aside {
      display: none;
      z-index: 401;
      top: 0;
      left: auto;
      right: 0;
      height: 100vh;
      background-color: #fff;
    }

    aside.visible {
      display: block;
    }

    header {
      position: relative;
      height: auto;
    }

    .usa-menu-btn {
      display: block;
      margin-left: auto;
    }
  }

  @media all and (max-width: 39.99em) {
    main {
      padding-left: 0;
    }
  }

  .usa-logo__text {
    color: #fff;
  }

  .link-github {
    width: 2rem;
  }

  .link-github svg {
    width: 2rem;
  }
</style>

<svelte:head>
  <meta
    name="description"
    content="Svelte component library that implements the U.S. Web Design System." />
</svelte:head>

<svelte:window
  on:resize={() => {
    if (ref) {
      mobile = ref.getBoundingClientRect().width !== 0;
    }
  }} />

<SkipToMainContent href="{segment}#main-content" />

{#if mobile}
  <div
    class="usa-overlay"
    class:is-visible={visible}
    on:click={() => {
      visible = false;
    }} />
{/if}

<header class="bg-primary-darker">
  <Grid row class="padding-105 tablet:padding-x-4">
    <Grid col>
      <nav>
        <em class="usa-logo__text">
          <a
            class="font-ui-lg text-white text-no-underline"
            href="/"
            title="Home"
            aria-label="Home">
            svelte-uswds
          </a>
        </em>
        <span class="font-sans-3xs text-base-lighter">
          Svelte implementation of the
          <Link style="color: white;" href="https://designsystem.digital.gov/">
            U.S. Web Design System
          </Link>
        </span>
      </nav>
    </Grid>
    <Grid col auto class="display-flex flex-justify-center flex-align-center">
      <a
        href="https://github.com/metonym/svelte-uswds/"
        title="View on GitHub"
        class="link-github ">
        <svg fill="#fff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>GitHub icon</title>
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
            0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633
            17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809
            1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
            0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267
            1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24
            2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81
            1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592
            24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </a>
    </Grid>
  </Grid>
</header>

<button
  bind:this={ref}
  class="usa-menu-btn"
  on:click={() => {
    visible = true;
  }}>
  Menu
</button>

<aside class:visible>
  <SideNav class="padding-2 margin-top-2">
    <SideNavList class="margin-bottom-4">
      <SideNavLink href="/" text="Welcome" current={segment === undefined} />
    </SideNavList>
    <SideNavList class="margin-bottom-4">
      <h4 class="margin-2 margin-y-105 text-gray-70">Components</h4>
      {#each nav_components as component, index (component)}
        <SideNavLink
          rel="prefetch"
          href="/components/{component.toLowerCase()}/"
          text={component}
          current={segment === 'components' && $slug === component.toLowerCase()} />
      {/each}
    </SideNavList>
  </SideNav>
</aside>

<main id="main-content" class="margin-top-10 margin-bottom-5 padding-top-3">
  <slot />
</main>

<footer class="margin-bottom-2">
  <ReturnToTop
    on:click={() => {
      window.scrollTo(0, 0);
    }}
    href={returnToTopHref} />
</footer>
