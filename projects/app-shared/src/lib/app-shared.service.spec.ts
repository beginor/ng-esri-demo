import { TestBed } from '@angular/core/testing';

import { AppSharedService } from './app-shared.service';

describe('AppSharedService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: AppSharedService = TestBed.inject(AppSharedService);
        expect(service).toBeTruthy();
    });
});
