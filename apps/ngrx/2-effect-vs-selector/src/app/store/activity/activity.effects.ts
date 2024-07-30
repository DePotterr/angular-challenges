import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import * as AppActions from '../../app.actions';
import * as ActivityActions from './activity.actions';
import { ActivityService } from './activity.service';

@Injectable()
export class ActivityEffects {
  loadActivities$ = createEffect(() => {
    return this.actions$.pipe(
      // listen to the same event as UserEffect
      ofType(AppActions.initApp),
      concatMap(() =>
        this.ActivityService.fetchActivities().pipe(
          map((activities) =>
            ActivityActions.loadActivitiesSuccess({ activities }),
          ),
          catchError((error) =>
            of(ActivityActions.loadActivitiesFailure({ error })),
          ),
        ),
      ),
    );
  });

  constructor(
    private actions$: Actions,
    private ActivityService: ActivityService,
  ) {}
}
