import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-app-shared',
    template: `
    <p>
      app-shared works!
    </p>
  `,
    styles: []
})
export class AppSharedComponent implements OnInit {

    constructor() { }

    public ngOnInit(): void {
    }

}
