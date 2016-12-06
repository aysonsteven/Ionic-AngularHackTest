import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoute } from './app.route';




@NgModule({
    imports: [
 
    ],
    exports: [
        RouterModule
    ],
    providers: [ AppRoute ]
})
export class AppRouteModule {}