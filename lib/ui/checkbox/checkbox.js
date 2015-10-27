import {
  Component,
  Input,
  Output,
  ViewEncapsulation,
  EventEmitter} from 'angular2/angular2';

import template from './checkbox.html!text';

@Component({
  selector: 'ngc-checkbox',
  // We set the component class on the host
  // element so that we don't need to set
  // it manually where the host ist placed.
  host: {
    'class': 'checkbox'
  },
  template,
  encapsulation: ViewEncapsulation.None
})
export default class Checkbox {
  // An optional label can be set for the checkbox
  @Input() label;
  // If the checckbox is checcked or unchecked
  @Input() checked;
  // Event emitter when checked is changed
  // using the convention for two way binding
  // with [(checked)] syntax.
  @Output() checkedChange = new EventEmitter();

  // This function will trigger the checked event emitter
  onCheckedChange(checked) {
    this.checkedChange.next(checked);
  }
}
