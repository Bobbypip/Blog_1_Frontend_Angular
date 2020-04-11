import { ModuleWithProviders } from '@angular/core';
//Permite cargar como servicio las cosas del router
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { PostNewComponent } from './components/post-new/post-new.component';

//Definir rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'ajustes', component: UserEditComponent},
    {path: 'crear-categoria', component: CategoryNewComponent},
    {path: 'crear-entrada', component: PostNewComponent},
    {path: '**', component: ErrorComponent}//El componente de error en el routing siempre tiene que cargarse al final
];

//Exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);