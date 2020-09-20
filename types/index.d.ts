// Type definitions for svelte-uswds 0.2.0
// Project: https://github.com/metonym/svelte-uswds

export class UswdsSvelteComponent {
  $$prop_def: {};
  $$slot_def: {};
  $on(eventname: string, handler: (e: Event) => any): () => void;
}

export class Accordion extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [multiselectable=false]
     */
    multiselectable: false;

    /**
     * @type {boolean} [bordered=false]
     */
    bordered: false;
  };

  $$slot_def: { default: {} };
}

export class AccordionItem extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id: undefined;

    /**
     * @type {string} [title="Title"]
     */
    title: "Title";

    /**
     * @type {boolean} [expanded=false]
     */
    expanded: false;
  };

  $$slot_def: { default: {} };
}

export class Alert extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {"success" | "warning" | "error" | "info" | "validation"} [kind]
     */
    kind: undefined;

    /**
     * @type {string} [title]
     */
    title: undefined;

    /**
     * @type {"alert" | "alertdialog"} [role]
     */
    role: undefined;

    /**
     * @type {boolean} [slim=false]
     */
    slim: false;

    /**
     * @type {boolean} [hideIcon=false]
     */
    hideIcon: false;
  };

  $$slot_def: { default: {} };
}

export class Banner extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id: undefined;

    /**
     * @type {boolean} [expanded=false]
     */
    expanded: false;

    /**
     * @type {string} [headerText="Header text"]
     */
    headerText: "Header text";

    /**
     * @type {string} [buttonText="Button text"]
     */
    buttonText: "Button text";
  };

  $$slot_def: { header: {}; default: {} };
}

export class Breadcrumb extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {{ href: string; text: string; }[]} [items=[]]
     */
    items: undefined;

    /**
     * @type {boolean} [wrap=false]
     */
    wrap: false;
  };

  $$slot_def: {};
}

export class Button extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {"default" | "secondary" | "accent-cool" | "base" | "outline" | "outline-inverse"} [kind="default"]
     */
    kind: "default";

    /**
     * @type {boolean} [disabled=false]
     */
    disabled: false;

    /**
     * @type {boolean} [big=false]
     */
    big: false;

    /**
     * @type {boolean} [unstyled=false]
     */
    unstyled: false;
  };

  $$slot_def: { default: {} };
}

export class ButtonGroup extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [segmented=false]
     */
    segmented: false;
  };

  $$slot_def: { default: {} };
}

export class Card extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [flag=false]
     */
    flag: false;

    /**
     * @type {boolean} [mediaRight=false]
     */
    mediaRight: false;

    /**
     * @type {string} [heading=""]
     */
    heading: "";

    /**
     * @type {boolean} [headerFirst=false]
     */
    headerFirst: false;

    /**
     * @type {string} [buttonText=""]
     */
    buttonText: "";

    /**
     * @type {string} [imgSrc]
     */
    imgSrc: undefined;

    /**
     * @type {string} [imgAlt=""]
     */
    imgAlt: "";

    /**
     * @type {boolean} [insetMedia=false]
     */
    insetMedia: false;

    /**
     * @type {boolean} [exdentMedia=false]
     */
    exdentMedia: false;
  };

  $$slot_def: { heading: {}; default: {}; button: {} };
}

export class Checkbox extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id: undefined;

    /**
     * @type {string} [name=""]
     */
    name: "";

    /**
     * @type {string} [value=""]
     */
    value: "";

    /**
     * Slottable (default slot)
     * @type {string} [label="Checkbox label"]
     */
    label: "Checkbox label";

    /**
     * @type {boolean} [checked=false]
     */
    checked: false;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled: false;
  };

  $$slot_def: { default: {} };
}

export class CheckboxGroup extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string[]} [values]
     */
    values: undefined;

    /**
     * @type {string} [legend="Checkbox group"]
     */
    legend: "Checkbox group";

    /**
     * @type {boolean} [disabled=false]
     */
    disabled: false;
  };

  $$slot_def: { default: {} };
}

export class Checklist extends UswdsSvelteComponent {
  $$prop_def: {};

  $$slot_def: { default: {} };
}

export class ChecklistItem extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {*} [test]
     */
    test: undefined;

    /**
     * @type {number} [length]
     */
    length: undefined;

    /**
     * @type {number} [minLength]
     */
    minLength: undefined;

    /**
     * @type {number} [maxLength]
     */
    maxLength: undefined;

    /**
     * @type {"uppercase" | "lowercase" | "numerical" | "alphanumeric"} [validator]
     */
    validator: undefined;

    /**
     * @type {boolean} [checked=false]
     */
    checked: false;
  };

  $$slot_def: { default: {} };
}

export class DateInput extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id: undefined;

    /**
     * @type {string} [legend="Date input"]
     */
    legend: "Date input";

    /**
     * @type {string} [hint="Hint text"]
     */
    hint: "Hint text";

    /**
     * @type {boolean} [today=false]
     */
    today: false;

    /**
     * @type {number} [month]
     */
    month: undefined;

    /**
     * @type {number} [day]
     */
    day: undefined;

    /**
     * @type {number} [year]
     */
    year: undefined;

    /**
     * @type {number} [maxYear=2020]
     */
    maxYear: 2020;

    /**
     * @type {number} [minYear]
     */
    minYear: undefined;
  };

  $$slot_def: {};
}

export class Dropdown extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {{ value: string; text?: string; }[]} [options=[]]
     */
    options: undefined;

    /**
     * @type {string} [selected]
     */
    selected: undefined;

    /**
     * @type {string} [id=""]
     */
    id: undefined;

    /**
     * @type {string} [label="Dropdown label"]
     */
    label: "Dropdown label";

    /**
     * @type {string} [name=""]
     */
    name: "";

    /**
     * @type {boolean} [success=false]
     */
    success: false;

    /**
     * @type {boolean} [error=false]
     */
    error: false;

    /**
     * @type {string} [errorText="Helpful error message"]
     */
    errorText: "Helpful error message";

    /**
     * @type {boolean} [readonly=false]
     */
    readonly: false;

    /**
     * @type {boolean} [required=false]
     */
    required: false;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled: false;
  };

  $$slot_def: {};
}

export class Fieldset extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [legend="Legend"]
     */
    legend: "Legend";

    /**
     * @type {boolean} [hideLegend=false]
     */
    hideLegend: false;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled: false;
  };

  $$slot_def: { default: {} };
}

export class Footer extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [big=false]
     */
    big: false;

    /**
     * @type {boolean} [medium=true]
     */
    medium: true;

    /**
     * @type {boolean} [slim=false]
     */
    slim: false;
  };

  $$slot_def: {
    default: {};
    primary: {};
    secondary: {};
    "secondary-left": {};
    "secondary-right": {};
  };
}

export class FooterContent extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [topic="Topic"]
     */
    topic: "Topic";
  };

  $$slot_def: { default: {} };
}

export class FooterLink extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [href="javascript:void(0);"]
     */
    href: "javascript:void(0);";

    /**
     * @type {boolean} [secondary=false]
     */
    secondary: false;
  };

  $$slot_def: { default: {} };
}

export class FooterNav extends UswdsSvelteComponent {
  $$prop_def: {};

  $$slot_def: { default: {} };
}

export class Form extends UswdsSvelteComponent {
  $$prop_def: {};

  $$slot_def: { default: {} };
}

export class Grid extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [row=false]
     */
    row: false;

    /**
     * @type {boolean | "lg" | "2px" | "05" | 1 | 2 | 3 | 4 | 5 | 6} [gutters=false]
     */
    gutters: false;

    /**
     * @type {boolean | number} [col]
     */
    col: undefined;

    /**
     * @type {"mobile-lg" | "tablet" | "desktop"} [variant]
     */
    variant: undefined;

    /**
     * @type {boolean} [auto=false]
     */
    auto: false;

    /**
     * @type {boolean} [fill=false]
     */
    fill: false;

    /**
     * @type {number} [offset=0]
     */
    offset: 0;
  };

  $$slot_def: { default: {} };
}

export class Header extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [basic=true]
     */
    basic: true;

    /**
     * @type {boolean} [extended=false]
     */
    extended: false;

    /**
     * @type {boolean} [skipNav=false]
     */
    skipNav: false;
  };

  $$slot_def: { default: {} };
}

export class HeaderLogo extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [title="Home"]
     */
    title: "Home";

    /**
     * @type {string} [href="/"]
     */
    href: "/";
  };

  $$slot_def: { default: {} };
}

export class HeaderNav extends UswdsSvelteComponent {
  $$prop_def: {};

  $$slot_def: { navbar: {}; default: {}; "nav-secondary": {} };
}

export class Heading extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {"h1" | "h2" | "h3" | "h4" | "h5" | "h6"} [tag="h1"]
     */
    tag: "h1";

    /**
     * @type {string} [id]
     */
    id: undefined;
  };

  $$slot_def: { default: {} };
}

export class Link extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [external=false]
     */
    external: false;
  };

  $$slot_def: { default: {} };
}

export class List extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [ordered=false]
     */
    ordered: false;

    /**
     * @type {boolean} [unstyled=false]
     */
    unstyled: false;
  };

  $$slot_def: { default: {} };
}

export class Menu extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id: undefined;

    /**
     * @type {string} [buttonText="Open menu"]
     */
    buttonText: "Open menu";

    /**
     * @type {boolean} [current=false]
     */
    current: false;

    /**
     * @type {boolean} [expanded=false]
     */
    expanded: false;

    /**
     * @type {boolean} [mega=false]
     */
    mega: false;

    /**
     * @type {boolean} [secondary=false]
     */
    secondary: false;
  };

  $$slot_def: { default: {} };
}

export class MenuItem extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [href="javascript:void(0);"]
     */
    href: "javascript:void(0);";

    /**
     * @type {boolean} [current=false]
     */
    current: false;
  };

  $$slot_def: { default: {} };
}

export class PasswordInput extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [label="Password"]
     */
    label: "Password";

    /**
     * @type {boolean} [showPassword=false]
     */
    showPassword: false;

    /**
     * @type {boolean} [autocomplete=false]
     */
    autocomplete: true;
  };

  $$slot_def: {};
}

export class Prose extends UswdsSvelteComponent {
  $$prop_def: {};

  $$slot_def: { default: {} };
}

export class RadioButton extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id: undefined;

    /**
     * @type {string} [name=""]
     */
    name: "";

    /**
     * @type {string} [value=""]
     */
    value: "";

    /**
     * @type {string} [label="Radio button label"]
     */
    label: "Radio button label";

    /**
     * @type {boolean} [checked=false]
     */
    checked: false;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled: false;
  };

  $$slot_def: {};
}

export class RadioButtonGroup extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [legend="Radio button group"]
     */
    legend: "Radio button group";

    /**
     * @type {boolean} [disabled=false]
     */
    disabled: false;

    /**
     * @type {string} [value]
     */
    value: undefined;
  };

  $$slot_def: { default: {} };
}

export class RangeSlider extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id: undefined;

    /**
     * @type {string} [label="Range slider"]
     */
    label: "Range slider";

    /**
     * @type {number} [min=0]
     */
    min: 0;

    /**
     * @type {number} [max=100]
     */
    max: 100;

    /**
     * @type {number} [step=10]
     */
    step: 10;

    /**
     * @type {number} [value=20]
     */
    value: 20;

    /**
     * @type {boolean} [success=false]
     */
    success: false;

    /**
     * @type {boolean} [disabled=false]
     */
    error: false;

    /**
     * @type {string} [errorText="Helpful error message"]
     */
    errorText: "Helpful error message";

    /**
     * @type {boolean} [readonly=false]
     */
    readonly: false;

    /**
     * @type {boolean} [required=false]
     */
    required: false;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled: false;
  };

  $$slot_def: {};
}

export class ReturnToTop extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [href="#"]
     */
    href: "#";
  };

  $$slot_def: { default: {} };
}

export class Search extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id: undefined;

    /**
     * @type {boolean} [big=false]
     */
    big: false;

    /**
     * @type {boolean} [small=false]
     */
    small: false;

    /**
     * @type {string} [label="Search"]
     */
    label: "Search";

    /**
     * @type {string} [name="search"]
     */
    name: "search";

    /**
     * @type {string} [value=""]
     */
    value: "";
  };

  $$slot_def: {};
}

export class SideNav extends UswdsSvelteComponent {
  $$prop_def: {};

  $$slot_def: { default: {} };
}

export class SideNavLink extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [href=""]
     */
    href: "";

    /**
     * @type {string} [text=""]
     */
    text: "";

    /**
     * @type {boolean} [current=false]
     */
    current: false;
  };

  $$slot_def: { default: {} };
}

export class SideNavList extends UswdsSvelteComponent {
  $$prop_def: {};

  $$slot_def: { default: {} };
}

export class SkipToMainContent extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [href="#main-content"]
     */
    href: "#main-content";
  };

  $$slot_def: { default: {} };
}

export class Table extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * Slottable as "caption"
     * @type {string} [caption]
     */
    caption: undefined;

    /**
     * @type {boolean} [borderless=false]
     */
    borderless: false;
  };

  $$slot_def: { caption: {}; default: {} };
}

export class TableBody extends UswdsSvelteComponent {
  $$prop_def: {};

  $$slot_def: { default: {} };
}

export class TableCell extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [tabular=false]
     */
    tabular: false;
  };

  $$slot_def: { default: {} };
}

export class TableHead extends UswdsSvelteComponent {
  $$prop_def: {};

  $$slot_def: { default: {} };
}

export class TableRow extends UswdsSvelteComponent {
  $$prop_def: {};

  $$slot_def: { default: {} };
}

export class Tag extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [big=false]
     */
    big: false;
  };

  $$slot_def: { default: {} };
}

export class TextArea extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id: undefined;

    /**
     * @type {string} [name=""]
     */
    name: "";

    /**
     * @type {string} [value=""]
     */
    value: "";

    /**
     * @type {string} [label="Text area"]
     */
    label: "Text area";

    /**
     * @type {boolean} [success=false]
     */
    success: false;

    /**
     * @type {boolean} [error=false]
     */
    error: false;

    /**
     * @type {boolean} [errorText="Helpful error message"]
     */
    errorText: "Helpful error message";

    /**
     * @type {boolean} [readonly=false]
     */
    readonly: false;

    /**
     * @type {boolean} [required=false]
     */
    required: false;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled: false;
  };

  $$slot_def: {};
}

export class TextInput extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id: undefined;

    /**
     * @type {string} [name=""]
     */
    name: "";

    /**
     * @type {"text" | "number" | "password"} [type="text"]
     */
    type: "text";

    /**
     * @type {string} [value=""]
     */
    value: "";

    /**
     * @type {string} [label="Text input"]
     */
    label: "Text input";

    /**
     * @type {"small" | "medium"} [size]
     */
    size: undefined;

    /**
     * @type {boolean} [success=false]
     */
    success: false;

    /**
     * @type {boolean} [error=false]
     */
    error: false;

    /**
     * @type {string} [errorText="Helpful error message"]
     */
    errorText: "Helpful error message";

    /**
     * @type {boolean} [disabled=false]
     */
    readonly: false;

    /**
     * @type {boolean} [required=false]
     */
    required: false;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled: false;

    /**
     * @type {string | RegExp} [pattern]
     */
    pattern: undefined;

    /**
     * @type {boolean} [autocapitalize=false]
     */
    autocapitalize: false;

    /**
     * @type {boolean} [autocorrect=false]
     */
    autocorrect: false;

    /**
     * @type {boolean} [spellcheck=false]
     */
    spellcheck: false;

    /**
     * @type {boolean} [autocomplete=false]
     */
    autocomplete: false;
  };

  $$slot_def: {};
}

export class Tooltip extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {"top" | "bottom" | "right" | "left"} [position="bottom"]
     */
    position: "bottom";

    /**
     * @type {string} [tooltipText=""]
     */
    tooltipText: "";

    /**
     * @type {string} [id=""]
     */
    id: undefined;
  };

  $$slot_def: { default: {} };
}
