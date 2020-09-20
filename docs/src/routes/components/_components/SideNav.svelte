<script>
  import { Grid, SideNav, SideNavList, SideNavLink } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  $: code = `<script>
  import { SideNav, SideNavList, SideNavLink } from "svelte-uswds";
<\/script>

<SideNav>
  <SideNavList>
    <SideNavLink href="/components/sidenav/" text="Current page" current />
    <SideNavLink href="/" text="Parent link">
      <SideNavList>
        <SideNavLink href="/" text="Child link" />
        <SideNavLink href="/" text="Child link" />
        <SideNavLink href="/" text="Child link">
          <SideNavList>
            <SideNavLink href="/" text="Grandchild link" />
            <SideNavLink href="/" text="Grandchild link" />
          </SideNavList>
        </SideNavLink>
      </SideNavList>
    </SideNavLink>
  </SideNavList>
</SideNav>`;
</script>

<Layout componentName="SideNav" code="{code}" hideProps>
  <SideNav>
    <SideNavList>
      <SideNavLink href="/components/sidenav/" text="Current page" current />
      <SideNavLink href="/" text="Parent link">
        <SideNavList>
          <SideNavLink href="/" text="Child link" />
          <SideNavLink href="/" text="Child link" />
          <SideNavLink href="/" text="Child link">
            <SideNavList>
              <SideNavLink href="/" text="Grandchild link" />
              <SideNavLink href="/" text="Grandchild link" />
            </SideNavList>
          </SideNavLink>
        </SideNavList>
      </SideNavLink>
    </SideNavList>
  </SideNav>
</Layout>
