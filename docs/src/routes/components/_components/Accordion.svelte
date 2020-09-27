<script>
  import {
    Grid,
    Accordion,
    AccordionItem,
    Checkbox,
    Link,
    Heading,
  } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let bordered = false;
  let multiselectable = false;
  let expanded = true;

  $: code = `<script>
  import { Accordion, AccordionItem } from "svelte-uswds";
<\/script>

<Accordion${bordered ? " bordered" : ""}${
    multiselectable ? " multiselectable" : ""
  }>
  <AccordionItem title="First Amendment"${expanded ? " expanded" : ""}>
    <p>
      Congress shall make no law respecting an establishment of religion, or prohibiting the free
      exercise thereof; or abridging the freedom of speech, or of the press; or the right of the
      people peaceably to assemble, and to petition the Government for a redress of grievances.
    </p>
  </AccordionItem>
  <AccordionItem title="Second Amendment">
    <p>
      A well regulated Militia, being necessary to the security of a free State, the right of the
      people to keep and bear Arms, shall not be infringed.
    </p>
  </AccordionItem>
</Accordion>`;
</script>

<Layout componentName="Accordion" code="{code}">
  <Accordion bordered="{bordered}" multiselectable="{multiselectable}">
    <AccordionItem title="First Amendment" bind:expanded>
      <p>
        Congress shall make no law respecting an establishment of religion, or
        prohibiting the free exercise thereof; or abridging the freedom of
        speech, or of the press; or the right of the people peaceably to
        assemble, and to petition the Government for a redress of grievances.
      </p>
    </AccordionItem>
    <AccordionItem title="Second Amendment">
      <p>
        A well regulated Militia, being necessary to the security of a free
        State, the right of the people to keep and bear Arms, shall not be
        infringed.
      </p>
    </AccordionItem>
  </Accordion>

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <p class="margin-bottom-4">
          <code
            class="font-mono-3xs bg-gray-10 padding-05 radius-sm"
          >Accordion</code>
        </p>
        <Checkbox bind:checked="{bordered}" value="bordered">
          <code class="font-mono-xs padding-05 radius-sm">bordered</code>
        </Checkbox>
        <Checkbox bind:checked="{multiselectable}" value="multiselectable">
          <code class="font-mono-xs padding-05 radius-sm">multiselectable</code>
        </Checkbox>
      </Grid>
      <Grid col auto>
        <p class="margin-bottom-4">
          <code
            class="font-mono-3xs bg-gray-10 padding-05 radius-sm"
          >AccordionItem</code>
        </p>
        <Checkbox bind:checked="{expanded}" value="expanded">
          <code class="font-mono-xs padding-05 radius-sm">expanded</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
