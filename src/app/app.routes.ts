import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { EmployeeComponent } from './employee/employee.component';
import { RankComponent } from './rank/rank.component';
import { ProjectComponent } from './project/project.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'rank', component: RankComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'admin', component: AdminComponent,
        children: [
            { path: 'user', component: UserComponent }
        ]
     },
    
];
