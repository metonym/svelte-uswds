// Type definitions for svelte-uswds 1.1.0
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
    multiselectable?: boolean;

    /**
     * @type {boolean} [bordered=false]
     */
    bordered?: boolean;
  };

  $$slot_def: { default: {} };
}

export class AccordionItem extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id?: string;

    /**
     * @type {string} [title="Title"]
     */
    title?: string;

    /**
     * @type {boolean} [expanded=false]
     */
    expanded?: boolean;
  };

  $$slot_def: { default: {} };
}

export class Alert extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {"success" | "warning" | "error" | "info" | "validation"} [kind]
     */
    kind?: "success" | "warning" | "error" | "info" | "validation";

    /**
     * @type {string} [title]
     */
    title?: string;

    /**
     * @type {"alert" | "alertdialog"} [role]
     */
    role?: "alert" | "alertdialog";

    /**
     * @type {boolean} [slim=false]
     */
    slim?: boolean;

    /**
     * @type {boolean} [hideIcon=false]
     */
    hideIcon?: boolean;
  };

  $$slot_def: { default: {} };
}

export class Banner extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id?: string;

    /**
     * @type {boolean} [expanded=false]
     */
    expanded?: boolean;

    /**
     * @type {string} [headerText="Header text"]
     */
    headerText?: string;

    /**
     * @type {string} [buttonText="Button text"]
     */
    buttonText?: string;
  };

  $$slot_def: { header: {}; default: {} };
}

export class Breadcrumb extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {{ href: string; text: string; }[]} [items=[]]
     */
    items?: { href: string; text: string }[];

    /**
     * @type {boolean} [wrap=false]
     */
    wrap?: boolean;
  };

  $$slot_def: {};
}

export class Button extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {"default" | "secondary" | "accent-cool" | "base" | "outline" | "outline-inverse"} [kind="default"]
     */
    kind?:
      | "default"
      | "secondary"
      | "accent-cool"
      | "base"
      | "outline"
      | "outline-inverse";

    /**
     * @type {boolean} [disabled=false]
     */
    disabled?: boolean;

    /**
     * @type {boolean} [big=false]
     */
    big?: boolean;

    /**
     * @type {boolean} [unstyled=false]
     */
    unstyled?: boolean;
  };

  $$slot_def: { default: {} };
}

export class ButtonGroup extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [segmented=false]
     */
    segmented?: boolean;
  };

  $$slot_def: { default: {} };
}

export class Card extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [flag=false]
     */
    flag?: boolean;

    /**
     * @type {boolean} [mediaRight=false]
     */
    mediaRight?: boolean;

    /**
     * @type {string} [heading=""]
     */
    heading?: string;

    /**
     * @type {boolean} [headerFirst=false]
     */
    headerFirst?: boolean;

    /**
     * @type {string} [buttonText=""]
     */
    buttonText?: string;

    /**
     * @type {string} [imgSrc]
     */
    imgSrc?: string;

    /**
     * @type {string} [imgAlt=""]
     */
    imgAlt?: string;

    /**
     * @type {boolean} [insetMedia=false]
     */
    insetMedia?: boolean;

    /**
     * @type {boolean} [exdentMedia=false]
     */
    exdentMedia?: boolean;
  };

  $$slot_def: { heading: {}; default: {}; button: {} };
}

export class Checkbox extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id?: string;

    /**
     * @type {string} [name=""]
     */
    name?: string;

    /**
     * @type {string} [value=""]
     */
    value?: string;

    /**
     * Slottable (default slot)
     * @type {string} [label="Checkbox label"]
     */
    label?: string;

    /**
     * @type {boolean} [checked=false]
     */
    checked?: boolean;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled?: boolean;
  };

  $$slot_def: { default: {} };
}

export class CheckboxGroup extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string[]} [values]
     */
    values?: string[];

    /**
     * @type {string} [legend="Checkbox group"]
     */
    legend?: string;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled?: boolean;
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
    test?: *;

    /**
     * @type {number} [length]
     */
    length?: number;

    /**
     * @type {number} [minLength]
     */
    minLength?: number;

    /**
     * @type {number} [maxLength]
     */
    maxLength?: number;

    /**
     * @type {"uppercase" | "lowercase" | "numerical" | "alphanumeric"} [validator]
     */
    validator?: "uppercase" | "lowercase" | "numerical" | "alphanumeric";

    /**
     * @type {boolean} [checked=false]
     */
    checked?: boolean;
  };

  $$slot_def: { default: {} };
}

export class DateInput extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id?: string;

    /**
     * @type {string} [legend="Date input"]
     */
    legend?: string;

    /**
     * @type {string} [hint="Hint text"]
     */
    hint?: string;

    /**
     * @type {boolean} [today=false]
     */
    today?: boolean;

    /**
     * @type {number} [month]
     */
    month?: number;

    /**
     * @type {number} [day]
     */
    day?: number;

    /**
     * @type {number} [year]
     */
    year?: number;

    /**
     * @type {number} [maxYear=2020]
     */
    maxYear?: number;

    /**
     * @type {number} [minYear]
     */
    minYear?: number;
  };

  $$slot_def: {};
}

export class Dropdown extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {{ value: string; text?: string; }[]} [options=[]]
     */
    options?: { value: string; text?: string }[];

    /**
     * @type {string} [selected]
     */
    selected?: string;

    /**
     * @type {string} [id=""]
     */
    id?: string;

    /**
     * @type {string} [label="Dropdown label"]
     */
    label?: string;

    /**
     * @type {string} [name=""]
     */
    name?: string;

    /**
     * @type {boolean} [success=false]
     */
    success?: boolean;

    /**
     * @type {boolean} [error=false]
     */
    error?: boolean;

    /**
     * @type {string} [errorText="Helpful error message"]
     */
    errorText?: string;

    /**
     * @type {boolean} [readonly=false]
     */
    readonly?: boolean;

    /**
     * @type {boolean} [required=false]
     */
    required?: boolean;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled?: boolean;
  };

  $$slot_def: {};
}

export class Fieldset extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [legend="Legend"]
     */
    legend?: string;

    /**
     * @type {boolean} [hideLegend=false]
     */
    hideLegend?: boolean;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled?: boolean;
  };

  $$slot_def: { default: {} };
}

export class Footer extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [big=false]
     */
    big?: boolean;

    /**
     * @type {boolean} [medium=true]
     */
    medium?: boolean;

    /**
     * @type {boolean} [slim=false]
     */
    slim?: boolean;
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
    topic?: string;
  };

  $$slot_def: { default: {} };
}

export class FooterLink extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [href="#"]
     */
    href?: string;

    /**
     * @type {boolean} [secondary=false]
     */
    secondary?: boolean;
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
    row?: boolean;

    /**
     * @type {boolean | "lg" | "2px" | "05" | 1 | 2 | 3 | 4 | 5 | 6} [gutters=false]
     */
    gutters?: boolean | "lg" | "2px" | "05" | 1 | 2 | 3 | 4 | 5 | 6;

    /**
     * @type {boolean | number} [col]
     */
    col?: boolean | number;

    /**
     * @type {"mobile-lg" | "tablet" | "desktop"} [variant]
     */
    variant?: "mobile-lg" | "tablet" | "desktop";

    /**
     * @type {boolean} [auto=false]
     */
    auto?: boolean;

    /**
     * @type {boolean} [fill=false]
     */
    fill?: boolean;

    /**
     * @type {number} [offset=0]
     */
    offset?: number;
  };

  $$slot_def: { default: {} };
}

export class Header extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [basic=true]
     */
    basic?: boolean;

    /**
     * @type {boolean} [extended=false]
     */
    extended?: boolean;

    /**
     * @type {boolean} [skipNav=false]
     */
    skipNav?: boolean;
  };

  $$slot_def: { default: {} };
}

export class HeaderLogo extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [title="Home"]
     */
    title?: string;

    /**
     * @type {string} [href="/"]
     */
    href?: string;
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
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

    /**
     * @type {string} [id]
     */
    id?: string;
  };

  $$slot_def: { default: {} };
}

export class Identifier extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [description=""]
     */
    description?: string;

    /**
     * @type {string} [domain=""]
     */
    domain?: string;

    /**
     * @type {string} [disclaimer=""]
     */
    disclaimer?: string;
  };

  $$slot_def: {
    logos: { props: any };
    domain: {};
    disclaimer: {};
    default: {};
    description: { props: any };
  };
}

export class IdentifierLink extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [href="#"]
     */
    href?: string;
  };

  $$slot_def: { default: {} };
}

export class IdentifierLogo extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [href="#"]
     */
    href?: string;

    /**
     * @type {string} [src=""]
     */
    src?: string;

    /**
     * @type {string} [alt=""]
     */
    alt?: string;
  };

  $$slot_def: {};
}

export class Link extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [external=false]
     */
    external?: boolean;
  };

  $$slot_def: { default: {} };
}

export class List extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [ordered=false]
     */
    ordered?: boolean;

    /**
     * @type {boolean} [unstyled=false]
     */
    unstyled?: boolean;
  };

  $$slot_def: { default: {} };
}

export class Menu extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id?: string;

    /**
     * @type {string} [buttonText="Open menu"]
     */
    buttonText?: string;

    /**
     * @type {boolean} [current=false]
     */
    current?: boolean;

    /**
     * @type {boolean} [expanded=false]
     */
    expanded?: boolean;

    /**
     * @type {boolean} [mega=false]
     */
    mega?: boolean;

    /**
     * @type {boolean} [secondary=false]
     */
    secondary?: boolean;
  };

  $$slot_def: { default: {} };
}

export class MenuItem extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [href="#"]
     */
    href?: string;

    /**
     * @type {boolean} [current=false]
     */
    current?: boolean;
  };

  $$slot_def: { default: {} };
}

export class PasswordInput extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [label="Password"]
     */
    label?: string;

    /**
     * @type {boolean} [showPassword=false]
     */
    showPassword?: boolean;

    /**
     * @type {boolean} [autocomplete=false]
     */
    autocomplete?: boolean;
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
    id?: string;

    /**
     * @type {string} [name=""]
     */
    name?: string;

    /**
     * @type {string} [value=""]
     */
    value?: string;

    /**
     * @type {string} [label="Radio button label"]
     */
    label?: string;

    /**
     * @type {boolean} [checked=false]
     */
    checked?: boolean;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled?: boolean;
  };

  $$slot_def: {};
}

export class RadioButtonGroup extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [legend="Radio button group"]
     */
    legend?: string;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled?: boolean;

    /**
     * @type {string} [value]
     */
    value?: string;
  };

  $$slot_def: { default: {} };
}

export class RangeSlider extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id?: string;

    /**
     * @type {string} [label="Range slider"]
     */
    label?: string;

    /**
     * @type {number} [min=0]
     */
    min?: number;

    /**
     * @type {number} [max=100]
     */
    max?: number;

    /**
     * @type {number} [step=10]
     */
    step?: number;

    /**
     * @type {number} [value=20]
     */
    value?: number;

    /**
     * @type {boolean} [success=false]
     */
    success?: boolean;

    /**
     * @type {boolean} [disabled=false]
     */
    error?: boolean;

    /**
     * @type {string} [errorText="Helpful error message"]
     */
    errorText?: string;

    /**
     * @type {boolean} [readonly=false]
     */
    readonly?: boolean;

    /**
     * @type {boolean} [required=false]
     */
    required?: boolean;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled?: boolean;
  };

  $$slot_def: {};
}

export class ReturnToTop extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [href="#"]
     */
    href?: string;
  };

  $$slot_def: { default: {} };
}

export class Search extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id?: string;

    /**
     * @type {boolean} [big=false]
     */
    big?: boolean;

    /**
     * @type {boolean} [small=false]
     */
    small?: boolean;

    /**
     * @type {string} [label="Search"]
     */
    label?: string;

    /**
     * @type {string} [name="search"]
     */
    name?: string;

    /**
     * @type {string} [value=""]
     */
    value?: string;
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
    href?: string;

    /**
     * @type {string} [text=""]
     */
    text?: string;

    /**
     * @type {boolean} [current=false]
     */
    current?: boolean;
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
    href?: string;
  };

  $$slot_def: { default: {} };
}

export class StepIndicator extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {boolean} [noLabels=false]
     */
    noLabels?: boolean;

    /**
     * @type {boolean} [center=false]
     */
    centered?: boolean;

    /**
     * @type {boolean} [counters=false]
     */
    counters?: boolean;

    /**
     *  @type {boolean} [smallCounters=false]
     */
    smallCounters?: boolean;
  };

  $$slot_def: { default: {} };
}

export class StepIndicatorSegment extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id?: string;

    /**
     * @type {string} [text=""]
     */
    text?: string;

    /**
     * @type {boolean} [current=false]
     */
    current?: boolean;

    /**
     * @type {boolean} [complete=false]
     */
    complete?: boolean;
  };

  $$slot_def: {};
}

export class Table extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * Slottable as "caption"
     * @type {string} [caption]
     */
    caption?: string;

    /**
     * @type {boolean} [borderless=false]
     */
    borderless?: boolean;
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
    tabular?: boolean;
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
    big?: boolean;
  };

  $$slot_def: { default: {} };
}

export class TextArea extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id?: string;

    /**
     * @type {string} [name=""]
     */
    name?: string;

    /**
     * @type {string} [value=""]
     */
    value?: string;

    /**
     * @type {string} [label="Text area"]
     */
    label?: string;

    /**
     * @type {boolean} [success=false]
     */
    success?: boolean;

    /**
     * @type {boolean} [error=false]
     */
    error?: boolean;

    /**
     * @type {boolean} [errorText="Helpful error message"]
     */
    errorText?: boolean;

    /**
     * @type {boolean} [readonly=false]
     */
    readonly?: boolean;

    /**
     * @type {boolean} [required=false]
     */
    required?: boolean;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled?: boolean;
  };

  $$slot_def: {};
}

export class TextInput extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id?: string;

    /**
     * @type {string} [name=""]
     */
    name?: string;

    /**
     * @type {"text" | "number" | "password"} [type="text"]
     */
    type?: "text" | "number" | "password";

    /**
     * @type {string} [value=""]
     */
    value?: string;

    /**
     * @type {string} [label="Text input"]
     */
    label?: string;

    /**
     * @type {"small" | "medium"} [size]
     */
    size?: "small" | "medium";

    /**
     * @type {boolean} [success=false]
     */
    success?: boolean;

    /**
     * @type {boolean} [error=false]
     */
    error?: boolean;

    /**
     * @type {string} [errorText="Helpful error message"]
     */
    errorText?: string;

    /**
     * @type {boolean} [disabled=false]
     */
    readonly?: boolean;

    /**
     * @type {boolean} [required=false]
     */
    required?: boolean;

    /**
     * @type {boolean} [disabled=false]
     */
    disabled?: boolean;

    /**
     * @type {string | RegExp} [pattern]
     */
    pattern?: string | RegExp;

    /**
     * @type {boolean} [autocapitalize=false]
     */
    autocapitalize?: boolean;

    /**
     * @type {boolean} [autocorrect=false]
     */
    autocorrect?: boolean;

    /**
     * @type {boolean} [spellcheck=false]
     */
    spellcheck?: boolean;

    /**
     * @type {boolean} [autocomplete=false]
     */
    autocomplete?: boolean;
  };

  $$slot_def: {};
}

export class TimePicker extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {string} [id=""]
     */
    id?: string;

    /**
     * @type {string} [label="Time picker"]
     */
    label?: string;
  };

  $$slot_def: {};
}

export class Tooltip extends UswdsSvelteComponent {
  $$prop_def: {
    /**
     * @type {"top" | "bottom" | "right" | "left"} [position="bottom"]
     */
    position?: "top" | "bottom" | "right" | "left";

    /**
     * @type {string} [tooltipText=""]
     */
    tooltipText?: string;

    /**
     * @type {string} [id=""]
     */
    id?: string;
  };

  $$slot_def: { default: {} };
}
