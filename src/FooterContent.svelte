<script>
  /**
   * @type {string} [topic="Topic"]
   */
  export let topic = "Topic";

  import List from "./List.svelte";
  import { setContext } from "svelte";

  setContext("FooterContent", {});
</script>

<section
  {...$$restProps}
  class:usa-footer__primary-content="{true}"
  class:usa-footer__primary-content--collapsible="{true}">
  <h4 class="usa-footer__primary-link">{topic}</h4>
  <List unstyled>
    <slot />
  </List>
</section>
