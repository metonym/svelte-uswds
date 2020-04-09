# svelte-uswds

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Svelte component library that implements the [U.S. Web Design System](https://designsystem.digital.gov/).

## [Documentation](https://svelte-uswds.onrender.com/)

## Quick start

### Install

```bash
yarn add -D svelte-uswds
# OR
npm i -D svelte-uswds
```

### Adding styles

In your root svelte file, link a stylesheet from a CDN using the `svelte:head` API.

```html
<!-- App.svelte -->
<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/uswds@2.6.0/dist/css/uswds.min.css" />
</svelte:head>
```

### Importing components

```html
<!-- App.svelte -->
<script>
  import { Button } from "svelte-uswds";
</script>

<button>Hello world</button>
```

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-uswds.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-uswds
[build]: https://travis-ci.com/metonym/svelte-uswds.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-uswds
