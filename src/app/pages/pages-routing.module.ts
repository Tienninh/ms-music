import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PgChannelComponent } from './pg-channel/pg-channel.component';



const routes: Routes = [
  { path: 'pg-channel', component: PgChannelComponent },
  // Thêm các route khác nếu cần
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
