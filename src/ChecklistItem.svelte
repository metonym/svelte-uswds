<script>
  /**
   * @type {*} [test]
   */
  export let test = undefined;

  /**
   * @type {number} [length]
   */
  export let length = undefined;

  /**
   * @type {number} [minLength]
   */
  export let minLength = undefined;

  /**
   * @type {number} [maxLength]
   */
  export let maxLength = undefined;

  /**
   * @type {"uppercase" | "lowercase" | "numerical" | "alphanumeric"} [validator]
   */
  export let validator = undefined;

  /**
   * @type {boolean} [checked=false]
   */
  export let checked = false;

  const validators = {
    uppercase: new RegExp(/[A-Z]/g),
    lowercase: new RegExp(/[a-z]/g),
    numerical: new RegExp(/[0-9]/g),
    alphanumeric: new RegExp(/[a-zA-Z0-9]/g),
  };

  $: if (test !== undefined) {
    let match = [];

    switch (validator) {
      case "uppercase":
        match = test.match(validators.uppercase);
        break;
      case "lowercase":
        match = test.match(validators.lowercase);
        break;
      case "numerical":
        match = test.match(validators.numerical);
        break;
      case "alphanumeric":
        match = test.match(validators.alphanumeric);
        break;
    }

    if (match == null) {
      match = [];
    }

    checked = match.length > 0;

    if (length !== undefined) {
      checked = match.length === length;
    }

    if (minLength !== undefined) {
      checked = match.length >= minLength;
    }

    if (maxLength !== undefined) {
      checked = match.length <= maxLength;
    }
  }
</script>

<li
  {...$$restProps}
  class:usa-checklist__item="{true}"
  class:usa-checklist__item--checked="{checked}"
>
  <slot />
</li>
