import {Injectable, OnDestroy} from "@angular/core";
import {Observable, Subject, takeUntil} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UnsubscribeService implements OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  public untilDestroyed = <T>(source$: Observable<T>): Observable<T> => {
    return source$.pipe(takeUntil(this.destroy$));
  };

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
