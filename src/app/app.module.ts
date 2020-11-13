import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './client/home/home.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
// import { ClientComponent } from './client/client.component';
// import { PosterComponent } from './poster/poster.component';
// import { CreatePostComponent } from './poster/create-post/create-post.component';
import { UsersTableComponent } from './admin/users-table/users-table.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
// import { MyPostsComponent } from './poster/my-posts/my-posts.component';
// import { PostComponent } from './client/post/post.component';
import { ChangeMeComponent } from './change-me/change-me.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    // HomeComponent,
    AdminComponent,
    // ClientComponent,
    // PosterComponent,
    // CreatePostComponent,
    UsersTableComponent,
    EditUserComponent,
    CreateUserComponent,
    // MyPostsComponent,
    // PostComponent,
    ChangeMeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
