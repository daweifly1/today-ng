import {RouterModule, Routes} from '@angular/router';
import {SetupComponent} from './pages/setup/setup.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {path: 'setup', component: SetupComponent},
  {path: '', redirectTo: '/setup', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
