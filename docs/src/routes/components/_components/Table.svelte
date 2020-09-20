<script>
  import {
    Grid,
    Checkbox,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
  } from "svelte-uswds";
  import Layout from "./Layout.svelte";

  let borderless = false;

  $: props = [`${borderless ? ` borderless` : ""}`].join("");
  $: code = `<script>
  import { Table, TableHead, TableBody, TableRow, TableCell } from "svelte-uswds";
<\/script>

<Table${props} caption="Table caption">
  <TableHead>
    <TableRow>
      <TableCell>Document title</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>Year</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Declaration of Independence</TableCell>
      <TableCell>
        Statement adopted by the Continental Congress declaring independence from the British
        Empire.
      </TableCell>
      <TableCell tabular>1776</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Declaration of Sentiments</TableCell>
      <TableCell>
        A document written during the Seneca Falls Convention outlining the rights that American
        women should be entitled to as citizens.
      </TableCell>
      <TableCell tabular>1848</TableCell>
    </TableRow>
  </TableBody>
</Table>`;
</script>

<Layout componentName="Table" code="{code}">
  <Table borderless="{borderless}" caption="Table caption">
    <TableHead>
      <TableRow>
        <TableCell>Document title</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Year</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Declaration of Independence</TableCell>
        <TableCell>
          Statement adopted by the Continental Congress declaring independence
          from the British Empire.
        </TableCell>
        <TableCell tabular>1776</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Declaration of Sentiments</TableCell>
        <TableCell>
          A document written during the Seneca Falls Convention outlining the
          rights that American women should be entitled to as citizens.
        </TableCell>
        <TableCell tabular>1848</TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <div slot="props">
    <Grid row gutters>
      <Grid col auto>
        <Checkbox bind:checked="{borderless}" value="borderless">
          <code class="font-mono-xs padding-05 radius-sm">borderless</code>
        </Checkbox>
      </Grid>
    </Grid>
  </div>
</Layout>
