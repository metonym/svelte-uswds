<script>
  import { Card } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  $: code = `<script>
    import { Card } from "svelte-uswds";
  <\/script>
    
<h2 class="padding-bottom-2">Standard Layout</h2>
<ul class="usa-card-group">
  <Card heading="Card" buttonText="Visit Florida Keys">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
    tenetur quo cupiditate, eaque qui officia recusandae.
  </Card>
  <Card
    heading="Card with media"
    imgSrc="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
    buttonText="Visit Florida Keys">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
    tenetur quo cupiditate, eaque qui officia recusandae.
  </Card>
  <Card
    heading="Card with media (Header first)"
    headerFirst
    imgSrc="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
    buttonText="Visit Florida Keys">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
    tenetur quo cupiditate, eaque qui officia recusandae.
  </Card>
  <Card
    heading="Card with inset media (Header first)"
    headerFirst
    insetMedia
    imgSrc="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
    buttonText="Visit Florida Keys">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
    tenetur quo cupiditate, eaque qui officia recusandae.
  </Card>
  <Card
    heading="Card with exdent media (Header first)"
    headerFirst
    exdentMedia
    imgSrc="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
    buttonText="Visit Florida Keys">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
    tenetur quo cupiditate, eaque qui officia recusandae.
  </Card>
</ul>

<h2 class="padding-bottom-2">Flag Layout</h2>
<ul class="usa-card-group">
  <Card
    heading="Flag"
    flag
    imgSrc="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
    buttonText="Visit Florida Keys">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
    tenetur quo cupiditate, eaque qui officia recusandae.
  </Card>
  <Card
    heading="Flag (media right)"
    flag
    mediaRight
    imgSrc="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
    buttonText="Visit Florida Keys">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
    tenetur quo cupiditate, eaque qui officia recusandae.
  </Card>
</ul>`;
</script>

<style>
  :global(.wrapper > *) {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>

<Layout componentName="Card" code="{code}" hideProps>
  <div class="wrapper">
    <h2 class="padding-bottom-2">Standard Layout</h2>
    <ul class="usa-card-group">
      <Card heading="Card" buttonText="Visit Florida Keys">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
        tenetur quo cupiditate, eaque qui officia recusandae.
      </Card>
      <Card
        heading="Card with media"
        imgSrc="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
        buttonText="Visit Florida Keys"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
        tenetur quo cupiditate, eaque qui officia recusandae.
      </Card>
      <Card
        heading="Card with media (Header first)"
        headerFirst
        imgSrc="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
        buttonText="Visit Florida Keys"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
        tenetur quo cupiditate, eaque qui officia recusandae.
      </Card>
      <Card
        heading="Card with inset media (Header first)"
        headerFirst
        insetMedia
        imgSrc="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
        buttonText="Visit Florida Keys"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
        tenetur quo cupiditate, eaque qui officia recusandae.
      </Card>
      <Card
        heading="Card with exdent media (Header first)"
        headerFirst
        exdentMedia
        imgSrc="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
        buttonText="Visit Florida Keys"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
        tenetur quo cupiditate, eaque qui officia recusandae.
      </Card>
    </ul>

    <h2 class="padding-bottom-2">Flag Layout</h2>
    <ul class="usa-card-group">
      <Card
        heading="Flag"
        flag
        imgSrc="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
        buttonText="Visit Florida Keys"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
        tenetur quo cupiditate, eaque qui officia recusandae.
      </Card>
      <Card
        heading="Flag (media right)"
        flag
        mediaRight
        imgSrc="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
        buttonText="Visit Florida Keys"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
        tenetur quo cupiditate, eaque qui officia recusandae.
      </Card>
    </ul>
  </div>
</Layout>
