import { Injectable, DestroyRef } from '@angular/core';

@Injectable(...)
export class AppService {
  destroyRef = inject(DestroyRef);

  destroy() {
    this.destroyRef.onDestroy(() => /* cleanup */ );
  }
}