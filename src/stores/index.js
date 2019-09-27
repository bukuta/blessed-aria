import { createStore, combineReducers } from "redux";

let UPDATE_TASKS_ACTIVE = "update_tasks_active";
let UPDATE_TASKS_WAITING = "update_tasks_waiting";
let UPDATE_TASKS_STOPPED = "update_tasks_stopped";
let UPDATE_TASK_CURRENT = "update_task_current";

function tasks(
  state = { active: [], waiting: [], stopped: [], currentTask: null },
  action
) {
  switch (action.type) {
    case UPDATE_TASKS_ACTIVE:
      return { ...state, active: action.tasks };
    case UPDATE_TASKS_WAITING:
      return { ...state, waiting: action.tasks };
    case UPDATE_TASKS_STOPPED:
      return { ...state, stopped: action.tasks };
    case UPDATE_TASK_CURRENT:
      return { ...state, currentTask: action.currentTask };
    default:
      return state;
  }
}

let UPDATE_SETTINGS = "update_settings";

function settings(state = {}, action) {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return { ...state, settings: action.settings };
    default:
      return state;
  }
}

let ariaApp = combineReducers({ tasks, settings });

let store = createStore(ariaApp);

function updateTasksActive(tasks) {
  return {
    type: UPDATE_TASKS_ACTIVE,
    tasks
  };
}
function updateTasksWaiting(tasks) {
  return {
    type: UPDATE_TASKS_WAITING,
    tasks
  };
}
function updateTasksStopped(tasks) {
  return {
    type: UPDATE_TASKS_STOPPED,
    tasks
  };
}
function updateSetting(settings) {
  return {
    type: UPDATE_SETTINGS,
    settings
  };
}

export {
  updateTasksActive,
  updateTasksStopped,
  updateTasksWaiting,
  updateSetting
};

export default store;
