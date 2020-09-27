<script>
  export let code = "";

  import copy from "clipboard-copy";
  import { Button } from "svelte-uswds";
  import { onMount } from "svelte";
  import { highlight, languages } from "prismjs";
  import "prism-svelte";

  let copied = false;
  let timeout = undefined;

  onMount(() => {
    return () => {
      if (typeof timeout === "number") clearTimeout(timeout);
    };
  });

  $: if (copied) {
    timeout = setTimeout(() => {
      copied = false;
    }, 4000);
  }

  $: highlighted = highlight(code.trim(), languages.svelte, "svelte");
</script>

<style>
  .code {
    position: relative;
  }

  .button {
    position: absolute;
    top: 0.5rem;
    right: 0;
  }

  pre {
    cursor: text;
  }
</style>

<svelte:head>
  <style>
    /**
      * Prism theme CSS adapted from https://github.com/PrismJS/prism-themes/blob/master/themes/prism-vs.css
      */

    pre[class*="language-"]::-moz-selection,
    pre[class*="language-"] ::-moz-selection,
    code[class*="language-"]::-moz-selection,
    code[class*="language-"] ::-moz-selection {
      background: #c1def1;
    }

    pre[class*="language-"]::selection,
    pre[class*="language-"] ::selection,
    code[class*="language-"]::selection,
    code[class*="language-"] ::selection {
      background: #c1def1;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: #008000;
    }

    .token.namespace {
      opacity: 0.7;
    }

    .token.string {
      color: #a31515;
    }

    .token.punctuation,
    .token.operator {
      color: #393a34; /* no highlight */
    }

    .token.url,
    .token.symbol,
    .token.number,
    .token.boolean,
    .token.variable,
    .token.constant,
    .token.inserted {
      color: #36acaa;
    }

    .token.atrule,
    .token.keyword,
    .token.attr-value,
    .language-autohotkey .token.selector,
    .language-json .token.boolean,
    .language-json .token.number,
    code[class*="language-css"] {
      color: #0000ff;
    }

    .token.function {
      color: #393a34;
    }

    .token.deleted,
    .language-autohotkey .token.tag {
      color: #9a050f;
    }

    .token.selector,
    .language-autohotkey .token.keyword {
      color: #00009f;
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }

    .token.italic {
      font-style: italic;
    }

    .token.class-name,
    .language-json .token.property {
      color: #2b91af;
    }

    .token.tag,
    .token.selector {
      color: #800000;
    }

    .token.attr-name,
    .token.property,
    .token.regex,
    .token.entity {
      color: #ff0000;
    }

    .token.directive.tag .tag {
      background: #ffff00;
      color: #393a34;
    }

    .line-numbers .line-numbers-rows {
      border-right-color: #a5a5a5;
    }

    .line-numbers-rows > span:before {
      color: #2b91af;
    }
  </style>
</svelte:head>

<div {...$$restProps} class:code="{true}">
  <pre
    class="overflow-x-auto padding-2 border-2px border-gray-10 radius-sm"
  >
    <code class="font-mono-3xs">
      {@html highlighted}
    </code>
  </pre>
  <div class="button">
    <Button
      aria-label="Copy to clipboard"
      title="Copy to clipboard"
      on:click="{() => {
        copy(code);
        copied = true;
      }}"
    >
      {copied ? 'Copied!' : 'Copy'}
    </Button>
  </div>
</div>
