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