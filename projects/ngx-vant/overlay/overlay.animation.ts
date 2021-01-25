import { AnimationTriggerMetadata, trigger, state, style, animate, transition } from '@angular/animations'

export const overlayAnimation: AnimationTriggerMetadata = trigger(
  'overlayAnimation', [
    state('*', style({
      opacity: 0,
      visibility: 'hidden',
      transform: 'translate3D(0, 0, 0)',
    })),
    state('false', style({
      opacity: 0,
      visibility: 'hidden',
    })),
    state('true', style({
      opacity: 1,
      visibility: 'inherit',
    })),
    transition('0 => 1', [
      style({
        opacity: 0,
        visibility: 'inherit',
      }),
      animate('250ms linear')
    ]),
    transition('1 => 0', [
      style({
        opacity: 1,
        visibility: 'inherit',
      }),
      animate('250ms linear')
    ]),
  ])
