![Angular 16 news](https://github.com/sergiecode/angular16news/blob/master/1.png?raw=true)

![Angular 16 Signals](https://github.com/sergiecode/angular16news/blob/master/2.png?raw=true)

    @Component({
      selector: 'my-app',
      standalone: true,
      template: `
        {{ fullName() }} <button (click)="setName('John')">Click</button>
      `,
    })
    export class App {
      firstName = signal('Jane');
      lastName = signal('Doe');
      fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
    
      constructor() {
        effect(() => console.log('Name changed:', this.fullName()));
      }
    
      setName(newName: string) {
        this.firstName.set(newName);
      }
    }

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

![Angular 16 Hydration](https://github.com/sergiecode/angular16news/blob/master/3.png?raw=true)

![Angular 16 Standalone Components](https://github.com/sergiecode/angular16news/blob/master/4.png?raw=true)

![Angular 16 Input Required](https://github.com/sergiecode/angular16news/blob/master/5.png?raw=true)

    @Component(...)
    export class App {
      @Input({ required: true }) title: string = '';
    }

![Etiquetas autoconclusivas](https://github.com/sergiecode/angular16news/blob/master/6.png?raw=true)

![Soporte para Tailwind](https://github.com/sergiecode/angular16news/blob/master/7.png?raw=true)



![Angular 16 Importanción dinámica del enrutador](https://github.com/sergiecode/angular16news/blob/master/8.png?raw=true)

    const routes = [
        {
          path: 'about',
          loadComponent: import('./about'),
          resolve: { contact: () => getContact() }
        }
      ];
      
      @Component(...)
      export class About {
        // The value of "contact" is passed to the contact input
        @Input() contact?: string;
      }

![ngDestroyFlexible Angular 16](https://github.com/sergiecode/angular16news/blob/master/9.png?raw=true)

    import { Injectable, DestroyRef } from '@angular/core';
    
    @Injectable(...)
    export class AppService {
      destroyRef = inject(DestroyRef);
    
      destroy() {
        this.destroyRef.onDestroy(() => /* cleanup */ );
      }
    }

![Soporte CSP Angular 16](https://github.com/sergiecode/angular16news/blob/master/10.png?raw=true)

    import {bootstrapApplication, CSP_NONCE} from '@angular/core';
    import {AppComponent} from './app/app.component';
    
    bootstrapApplication(AppComponent, {
      providers: [{
        provide: CSP_NONCE,
        useValue: globalThis.myRandomNonceValue
      }]
    });
