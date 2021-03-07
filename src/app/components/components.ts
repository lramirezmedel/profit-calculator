import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

@NgModule({
    imports: [RouterModule, CommonModule, FormsModule, IonicModule],
    declarations: [ToolBarComponent],
    exports: [ToolBarComponent]
})
export class Components{}