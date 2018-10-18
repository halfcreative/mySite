import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const fadeAnimation =
    trigger('routeAnimations', [
        // The '* => *' will trigger the animation to change between any two states
        // Can set specific transition between differnt pages like the HomePage and ContactPage
        transition('* => *', [
            query(
                ':enter',
                // View that is entering gets an opacity of 0 to start.
                [style({ opacity: 0 })],
                { optional: true }
            ),
            query(
                ':leave',
                // Sets opacity to 0, over .3 seconds
                [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
                { optional: true }
            ),
            query(
                ':enter',
                // View that is entering will get it's opacity set to 1 over .3 seconds AFTER the leave gets animated out.
                [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
                { optional: true }
            )
        ])
    ]);
