import { toObservable, signal } from '@angular/core/rxjs-interop';

@Component({...})
export class App {
  count = signal(0);
  count$ = toObservable(this.count);

  ngOnInit() {
    this.count$.subscribe(() => ...);
  }
}


------------------------------------------------


import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  template: `
    <li *ngFor="let row of data()"> {{ row }} </li>
  `
})
export class App {
  dataService = inject(DataService);
  data = toSignal(this.dataService.data$, []);
}


---------------------------------------

destroyed$ = new ReplaySubject<void>(1);

data$ = http.get('...').pipe(takeUntil(this.destroyed$));

ngOnDestroy() {
  this.destroyed$.next();
}


---------------------------------------


data$ = http.get('…').pipe(takeUntilDestroyed());
