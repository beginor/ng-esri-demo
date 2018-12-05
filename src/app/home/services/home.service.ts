import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    public get message() {
        if (this.count === 0) {
            return 'Hello, Angular !';
        }
        return `You have clicked ${this.count} times!`;
    }

    public count = 0;

    constructor() { }

    public addCount(): void {
        this.count += 1;
    }
}
