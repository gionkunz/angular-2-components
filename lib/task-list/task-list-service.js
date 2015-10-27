import {Injectable} from 'angular2/angular2';

@Injectable()
export default class TaskListService {
  constructor() {
    this.tasks = [
      {title: 'Task 1', done: false},
      {title: 'Task 2', done: false},
      {title: 'Task 3', done: true},
      {title: 'Task 4', done: false}
    ];
  }
}
