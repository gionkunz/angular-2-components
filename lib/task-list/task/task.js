import {Component, Input, ViewEncapsulation} from 'angular2/angular2';
import template from './task.html!text';
// Each task has a checkbox component for marking
// tasks as done.
import Checkbox from '../../ui/checkbox/checkbox.js';

@Component({
  selector: 'ngc-task',
  host: {
    // We set the component class on the host
    // element so that we don't need to set
    // it manually where the host ist placed.
    'class': 'task',
    // Host property binding to set a class
    // task--done on the host element if our
    // task model says that the task is done.
    '[class.task--done]': 'taskData.done'
  },
  template,
  encapsulation: ViewEncapsulation.None,
  // We need to specify that this component
  // relies on the Checkbox component within
  // the view.
  directives: [Checkbox]
})
export default class Task {
  // Our task model can be attached on the host
  // within the view
  @Input() taskData;
}
