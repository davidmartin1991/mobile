import { NgModule } from '@angular/core';
import { ListeComponent } from './liste/liste';
import { BouttonComponent } from './boutton/boutton';
@NgModule({
	declarations: [ListeComponent,
    BouttonComponent],
	imports: [],
	exports: [ListeComponent,
    BouttonComponent]
})
export class ComponentsModule {}
