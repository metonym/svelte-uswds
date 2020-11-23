# svelte-uswds

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Svelte component library that implements the [U.S. Web Design System](https://designsystem.digital.gov/) (USWDS).

## [Documentation](https://svelte-uswds.onrender.com/)

## Getting started

```bash
yarn add -D svelte-uswds
# OR
npm i -D svelte-uswds
```

## Adding styles

In your root svelte file, link a stylesheet from a CDN using the `svelte:head` API.

```svelte
<!-- App.svelte -->
<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/uswds@2.9.0/dist/css/uswds.min.css"
  />
</svelte:head>

```

## Importing components

### Script

```html
<!-- App.svelte -->
<script>
  import { Accordion, AccordionItem } from "svelte-uswds";
</script>
```

### Mark-up

```svelte
<!-- App.svelte -->
<Accordion>
  <AccordionItem title="First Amendment" expanded>
    <p>
      Congress shall make no law respecting an establishment of religion, or
      prohibiting the free exercise thereof; or abridging the freedom of speech,
      or of the press; or the right of the people peaceably to assemble, and to
      petition the Government for a redress of grievances.
    </p>
  </AccordionItem>
  <AccordionItem title="Second Amendment">
    <p>
      A well regulated Militia, being necessary to the security of a free State,
      the right of the people to keep and bear Arms, shall not be infringed.
    </p>
  </AccordionItem>
</Accordion>

```

## TypeScript

This library includes TypeScript definitions ([types](types)).

## Limitations

This library does not support Internet Explorer.

You'll need to polyfill the [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) and [Array.findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex).

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-uswds.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-uswds
[build]: https://travis-ci.com/metonym/svelte-uswds.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-uswds
