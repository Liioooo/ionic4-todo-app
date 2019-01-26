import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'doing',
                children: [
                    {
                        path: '',
                        loadChildren: '../doing/doing.module#DoingPageModule'
                    }
                ]
            },
            {
                path: 'done',
                children: [
                    {
                        path: '',
                        loadChildren: '../done/done.module#DonePageModule'
                    }
                ]
            },
            {
                path: 'archive',
                children: [
                    {
                        path: '',
                        loadChildren: '../archive/archive.module#ArchivePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/doing',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/doing',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}
