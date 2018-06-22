import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { StoriesComponent } from './stories/stories.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'news/1', pathMatch: 'full'},
    {path: 'news/:page', component: StoriesComponent, data: {storiesType: 'news'}},
    {path: 'newest/:page', component: StoriesComponent, data: {storiesType: 'newest'}},
    {path: 'show/:page', component: StoriesComponent, data: {storiesType: 'show'}},
    {path: 'ask/:page', component: StoriesComponent, data: {storiesType: 'ask'}},
    {path: 'jobs/:page', component: StoriesComponent, data: {storiesType: 'jobs'}},
    {path: 'item/:id', component: ItemCommentsComponent}
];

export const routing = RouterModule.forRoot(routes);
