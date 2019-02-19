import { ModalsComponent } from './views/modals/modals.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { ManageUserComponent } from './views/user/manage-user/manage-user.component';
import { AddUserComponent } from './views/user/add-user/add-user.component';
import { ManageQuestionComponent } from './views/question/manage-question/manage-question.component';
import { AddQuestionComponent } from './views/question/add-question/add-question.component';
import { ManageSubjectComponent } from './views/subject/manage-subject/manage-subject.component';
import { AddSubjectComponent } from './views/subject/add-subject/add-subject.component';
import { LoginComponent } from './views/login/login.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  {path: 'login', component: LoginComponent},

  { path: 'dashboards', children:
    [
      { path: 'home', component: Dashboard1Component },
    ]
  },

  { path: 'subject', children:
    [
      { path: 'manageSubject', component: ManageSubjectComponent },
      { path: 'addSubject', component: AddSubjectComponent },
    ]
  },

  { path: 'user', children:
    [
      { path: 'manageUser', component:  ManageUserComponent},
      { path: 'addUser', component: AddUserComponent },
    ]
  },

  { path: 'question', children:
    [
      { path: 'manageQuestion', component: ManageQuestionComponent},
      { path: 'addQuestion', component: AddQuestionComponent},
    ]
  },

  { path: 'modals', component: ModalsComponent},
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
