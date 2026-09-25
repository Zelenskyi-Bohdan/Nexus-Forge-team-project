import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

new Accordion('.answers-accordion', {
    elementClass: 'answers-list-item',
    triggerClass: 'answers-toggle',
    panelClass: 'answer-panel',
    activeClass: 'is-open',
    duration: 400,
    showMultiple: true,
    openOnInit: [],
    ariaEnabled: true,
    onOpen: (el) => {
        el.querySelector('use')?.setAttribute('href', '../img/sprite.svg#icon-close');
    },
    onClose: (el) => {
        el.querySelector('use')?.setAttribute('href', '../img/sprite.svg#icon-add');
    }
});
