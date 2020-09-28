// TODO: read from filesystem
const components = [
  "Accordion",
  "Alert",
  "Banner",
  "Breadcrumb",
  "Button",
  "ButtonGroup",
  "Card",
  "Checkbox",
  "Checklist",
  "DateInput",
  "Dropdown",
  "Fieldset",
  "Footer",
  "Form",
  "Grid",
  "Header",
  "Link",
  "List",
  "Menu",
  "PasswordInput",
  "Prose",
  "RadioButton",
  "RangeSlider",
  "ReturnToTop",
  "Search",
  "SideNav",
  "SkipToMainContent",
  "Table",
  "Tag",
  "TextArea",
  "TextInput",
  "TimePicker",
  "Tooltip",
  "StepIndicator",
  "Identifier",
  "FileInput",
].sort();

// Header -> SkipToMainContent, Menu, HeaderNav, HeaderLogo
// Footer -> FooterContent, FooterLink, FooterNav, ReturnToTop
// Prose -> Heading

const subcomponents = [
  "ReturnToTop",
  "SkipToMainContent",
  "Menu",
  "Heading",
  "Form",
  "Fieldset",
  "Header",
  "Footer",
];

export const nav_components = components.filter(
  (name) => !subcomponents.includes(name)
);

const posts = nav_components.map((title) => ({
  title,
  slug: title.toLowerCase(),
}));

export default posts;
