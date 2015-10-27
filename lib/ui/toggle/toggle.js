import {
  Component,
  Input,
  Output,
  ViewEncapsulation,
  EventEmitter,
  NgFor} from 'angular2/angular2';

import template from './toggle.html!text';

@Component({
  selector: 'ngc-toggle',
  // We set the component class on the host
  // element so that we don't need to set
  // it manually where the host ist placed.
  host: {
    'class': 'toggle'
  },
  template,
  encapsulation: ViewEncapsulation.None,
  // As we're using *ng-for in our template we
  // need to specify it as a directive
  directives: [NgFor]
})
export default class Toggle {
  // A list of objects that will be used as
  // button values.
  @Input() buttonList;
  // Input and state of which button is selected
  // needs to refer to an object within buttonList
  @Input() selectedButton;
  // Event emitter when selectedButton is changed
  // using the convention for two way binding
  // with [(selected-button)] syntax.
  @Output() selectedButtonChange = new EventEmitter();

  // Callback within the component lifecycle that will
  // be called after the constructor and inputs have been
  // set.
  onInit() {
    if (this.selectedButton === undefined) {
      this.selectedButton = this.buttonList[0];
    }
  }

  // Function to set selected button and trigger event
  // emitter.
  onButtonActivate(button) {
    this.selectedButton = button;
    this.selectedButtonChange.next(button);
  }
}
