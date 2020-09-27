<script>
  /**
   * @type {boolean} [noLabels=false]
   */
  export let noLabels = false;

  /**
   * @type {boolean} [center=false]
   */
  export let centered = false;

  /**
   * @type {boolean} [counters=false]
   */
  export let counters = false;

  /**
   *  @type {boolean} [smallCounters=false]
   */
  export let smallCounters = false;

  import { setContext } from "svelte";
  import { writable, derived } from "svelte/store";

  const steps = writable([]);
  const currentStep = derived(steps, (_) => _.find(({ current }) => current));
  const currentStepIndex = derived(steps, (_) =>
    _.findIndex(({ current }) => current)
  );

  setContext("StepIndicator", {
    steps,
    add: (step) => {
      steps.update((_) => [..._, step]);
    },
    remove: (step) => {
      steps.update((_) => _.filter(({ id }) => id === step.id));
    },
  });
</script>

<div
  {...$$restProps}
  aria-label="progress"
  class="usa-step-indicator"
  class:usa-step-indicator--no-labels="{noLabels}"
  class:usa-step-indicator--center="{centered}"
  class:usa-step-indicator--counters="{counters}"
  class:usa-step-indicator--counters-sm="{smallCounters}"
>
  <ol class="usa-step-indicator__segments">
    <slot />
  </ol>
  <div class="usa-step-indicator__header">
    <h2 class="usa-step-indicator__heading">
      <span class="usa-step-indicator__heading-counter">
        <span class="usa-sr-only">Step</span>
        <span
          class="usa-step-indicator__current-step"
        >{$currentStepIndex + 1}</span>
        <span class="usa-step-indicator__total-steps">of {$steps.length}</span>
      </span>
      <span class="usa-step-indicator__heading-text">{#if $currentStep}
          {$currentStep.text}
        {/if}</span>
    </h2>
  </div>
</div>
