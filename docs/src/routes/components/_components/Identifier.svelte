<script>
  import {
    Identifier,
    IdentifierLink,
    IdentifierLogo,
    Link,
  } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  $: code = `<script>
  import { Identifier, IdentifierLink, IdentifierLogo, } from "svelte-uswds";
<\/script>
  
<Identifier
  description="Identifier description"
  domain="domain.gov"
  disclaimer="An official website of the <Agency>"
>
  <div slot="logos" let:props {...props}>
    <IdentifierLogo
    src="https://designsystem.digital.gov/assets/img/circle-gray-20.svg"
    />
  </div>

  <IdentifierLink href="#">Link 1</IdentifierLink>
  <IdentifierLink href="#">Link 2</IdentifierLink>
  <IdentifierLink href="#">Link 3</IdentifierLink>
  <IdentifierLink href="#">Link 4</IdentifierLink>
  <IdentifierLink href="#">Link 5</IdentifierLink>
  <IdentifierLink href="#">Link 6</IdentifierLink>

  <div slot="description" let:props>
    <div {...props}>For more information,</div>
    <Link href="https://designsystem.digital.gov/components/identifier/">
      visit the source code
    </Link>
  </div>
</Identifier>`;
</script>

<Layout componentName="Identifier" code="{code}" hideProps>
  <Identifier
    description="Identifier description"
    domain="domain.gov"
    disclaimer="An official website of the <Agency>"
  >
    <div slot="logos" let:props {...props}>
      <IdentifierLogo
        src="https://designsystem.digital.gov/assets/img/circle-gray-20.svg"
      />
    </div>

    <IdentifierLink href="#">Link 1</IdentifierLink>
    <IdentifierLink href="#">Link 2</IdentifierLink>
    <IdentifierLink href="#">Link 3</IdentifierLink>
    <IdentifierLink href="#">Link 4</IdentifierLink>
    <IdentifierLink href="#">Link 5</IdentifierLink>
    <IdentifierLink href="#">Link 6</IdentifierLink>

    <div slot="description" let:props>
      <div {...props}>For more information,</div>
      <Link href="https://designsystem.digital.gov/components/identifier/">
        visit the source code
      </Link>
    </div>
  </Identifier>
</Layout>
