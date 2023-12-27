import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  public sidebarOpen: boolean = true;

  constructor(private gifService: GifsService) {}

  get tagList():string[] {
    return this.gifService.tagsHistory;
  }

  onSetHistoryValue(tag: string):void{
    this.gifService.searchTag(tag);
  }

  onToggleSideBar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
