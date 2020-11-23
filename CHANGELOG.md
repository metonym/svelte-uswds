# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Components

- Combobox
- TimePicker with combobox
- Date picker
- Date range picker
- File input
- Character count

## [1.2.1](https://github.com/metonym/svelte-uswds/releases/tag/v1.2.1) - 2020-11-23

**Fixes**

- Separate TypeScript definitions by component

## [1.2.0](https://github.com/metonym/svelte-uswds/releases/tag/v1.2.0) - 2020-09-27

**Refactoring**

- replace `onDestroy` with `onMount` method

**Fixes**

- remove "javascript:void(0);" (invalid a11y attribute)
- TypeScript definitions: type slot props as `any`

## [1.1.0](https://github.com/metonym/svelte-uswds/releases/tag/v1.1.0) - 2020-09-27

**Features**

- Add `TimePicker`, `StepIndicator`, `Identifier` components

## [1.0.0](https://github.com/metonym/svelte-uswds/releases/tag/v1.0.0) - 2020-09-20

**Features**

- Support usage with TypeScript

**Fixes**

- `Link`: deprecate `target`, `href`, `rel` props
- use pascale case for UMD output name

## [0.2.0](https://github.com/metonym/svelte-uswds/releases/tag/v0.2.0) - 2020-09-20

**Features**

- Add `Breadcrumb`, `ButtonGroup`, `Tooltip`, `Card` components

**Fixes**

- Initialize node reference variables as `null` instead of `undefined`
- `Prose`: remove unused `ref` prop

## [0.1.0](https://github.com/metonym/svelte-uswds/releases/tag/v0.1.0) - 2020-04-08

- Initial release
