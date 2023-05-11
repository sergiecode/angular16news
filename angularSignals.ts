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