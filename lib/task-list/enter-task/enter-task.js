import {
  Component,
  Output,
  ViewEncapsulation,
  EventEmitter} from 'angular2/angular2';

import template from './enter-task.html!text';

@Component({
  selector: 'ngc-enter-task',
  // We set the component class on the host
  // element so that we don't need to set
  // it manually where the host ist placed.
  host: {
    'class': 'enter-task'
  },
  template,
  encapsulation: ViewEncapsulation.None
})
export default class AddTask {
  // Event emitter that gets fired once a task
  // is entered.
  @Output() taskEntered = new EventEmitter();
  // This function will fire the taskEntered
  // event emitter and reset the task title
  // input field.

  enterTask(taskTitle) {
    this.taskEntered.next(taskTitle.value);
    taskTitle.value = '';
  }
}
