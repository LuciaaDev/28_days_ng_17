import { Component, computed, effect, inject, Injector, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  template: `
  <p>{{ 'Query Value: ' +  searchQuery() }}</p>
  <button type="button" (click)="onChangeValue()">Change value</button> |
  <button type="button" (click)="onUpdateValue()">Update value</button>
  <br>
  <p>{{ 'User Value: ' +  user() }}</p>
  <button type="button" (click)="onChangeUser()">Change user</button>
  <br>
  <p>{{ resultComputed() }}</p>
  `
  ,
})
export class SignalsComponent {
  searchQuery = signal<string>('Dominicode');
  searchQueryReadonly = this.searchQuery.asReadonly();

  user = signal<string>('Jose Vicente Martínez');

  resultComputed = computed(() => `Result user: ${this.user()} and searchQuery: ${this.searchQuery()}`);

  private readonly injector = inject(Injector);

  constructor() {
    // Si effect() está en el constructor, se ejecuta directamente.
    effect(() => console.log("this.user:", this.user()));
  }

  onChangeValue(): void {
    this.searchQuery.set('Lucía Ruiz');
  }

  onUpdateValue(): void {
    this.searchQuery.update((current) => current + ' YouTube!')
  }

  onChangeUser(): void {
    this.user.set('Aurelia López');

    // Si effect() está dentro de una función como esta, necesitamos añadirle el injector, ya que sino en consola tendremos el error de runInjectionContext.
    // effect(() => console.log("this.user:", this.user()), {injector: this.injector});
  }
}
