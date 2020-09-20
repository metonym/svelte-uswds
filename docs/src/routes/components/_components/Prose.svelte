<script>
  import { Grid, Prose } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  $: code = `<script>
  import { Prose } from "svelte-uswds";
<\/script>

<Prose>
  <h1>Page heading</h1>
  <p class="usa-intro">
    Great Smoky Mountains National Park straddles the border of North Carolina and Tennessee.
  </p>

  <h2>Section heading</h2>

  <h3>Section of the page</h3>
  <p>
    The sprawling landscape encompasses lush forests and an abundance of wildflowers that bloom
    year-round. Streams, rivers and waterfalls appear along hiking routes that include a segment
    of the Appalachian Trail.
  </p>

  <h4>Subsection of the page</h4>
  <p>
    World renowned for its diversity of plant and animal life, the beauty of its ancient
    mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is
    America's most visited national park.
  </p>
  <p>
    Right now scientists think that we only know about 17 percent of the plants and animals that
    live in the park, or about 17,000 species of a probable 100,000 different organisms.
  </p>

  <h5>Subsection of the page</h5>
  <p>
    Entrance to Great Smoky Mountains National Park is free. The park is one of the few national
    parks where no entrance fees are charged.
  </p>
</Prose>`;
</script>

<Layout componentName="Prose" code="{code}" hideProps>
  <Prose>
    <h1>Page heading</h1>
    <p class="usa-intro">
      Great Smoky Mountains National Park straddles the border of North Carolina
      and Tennessee.
    </p>

    <h2>Section heading</h2>

    <h3>Section of the page</h3>
    <p>
      The sprawling landscape encompasses lush forests and an abundance of
      wildflowers that bloom year-round. Streams, rivers and waterfalls appear
      along hiking routes that include a segment of the Appalachian Trail.
    </p>

    <h4>Subsection of the page</h4>
    <p>
      World renowned for its diversity of plant and animal life, the beauty of
      its ancient mountains, and the quality of its remnants of Southern
      Appalachian mountain culture, this is America's most visited national
      park.
    </p>
    <p>
      Right now scientists think that we only know about 17 percent of the
      plants and animals that live in the park, or about 17,000 species of a
      probable 100,000 different organisms.
    </p>

    <h5>Subsection of the page</h5>
    <p>
      Entrance to Great Smoky Mountains National Park is free. The park is one
      of the few national parks where no entrance fees are charged.
    </p>
  </Prose>
</Layout>
