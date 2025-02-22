import { NgZone } from '@angular/core';

export function debugNgzoneState(ngZone: NgZone, waitSeconds = 2) {
  console.log(
    `⏳ ... Wait ${waitSeconds} seconds to dump pending tasks ... ⏳`,
  );

  // Run the debugging `setTimeout` code outside of
  // the Angular Zone, so it's not considered as
  // yet another pending Zone Task:
  ngZone.runOutsideAngular(() => {
    setTimeout(() => {
      // Access the NgZone's internals - TaskTrackingZone:
      const TaskTrackingZone = (ngZone as any)._inner._parent._properties
        .TaskTrackingZone;

      // Print to the console all pending tasks
      // (micro tasks, macro tasks and event listeners):
      console.debug('👀 Pending tasks in NgZone: 👀');
      console.debug(
        {
          microTasks: TaskTrackingZone?.getTasksFor('microTask'),
          macroTasks: TaskTrackingZone?.getTasksFor('macroTask'),
          eventTasks: TaskTrackingZone?.getTasksFor('eventTask'),
        },
        'Has Micro tasks: ',
        ngZone.hasPendingMicrotasks,
        'Has Macro tasks: ',
        ngZone.hasPendingMacrotasks,
      );

      // Advice how to find the origin of Zone tasks:
      console.debug(
        `👀 For every pending Zone Task listed above investigate the stacktrace in the property 'creationLocation' 👆`,
      );
    }, 1000 * waitSeconds);
  });
}
