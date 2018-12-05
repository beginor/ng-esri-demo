import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(public vm: HomeService) { }

    public ngOnInit(): void { }

    public onClick(): void {
        this.vm.addCount();
    }

}
