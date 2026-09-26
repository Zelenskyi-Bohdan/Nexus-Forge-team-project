import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import spriteUrl from '../img/sprite.svg';

new Accordion('.answers-accordion', {
    elementClass: 'answers-list-item',
    triggerClass: 'answers-toggle',
    panelClass: 'answer-panel',
    activeClass: 'is-open',
    duration: 400,
    showMultiple: false,
    openOnInit: [],
    ariaEnabled: true,
});
