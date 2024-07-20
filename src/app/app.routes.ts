import { Routes } from '@angular/router';

// Application components
import { HomeComponent } from './components/home/home/home.component';
import { SettingsComponent } from './components/settings/settings/settings.component';
import { CreateNewProjectComponent } from './components/create-new-project/create-new-project/create-new-project.component';
import { ProjectDetailsComponent } from './components/project-details/project-details/project-details.component';

export const routes: Routes = [
    { path: "", component: HomeComponent }
    , { path: "settings", component: SettingsComponent }
    , { path: "create-new-project", component: CreateNewProjectComponent }
    , { path: "project-details", component: ProjectDetailsComponent }
];
