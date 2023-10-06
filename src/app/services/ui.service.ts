import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAdTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }
  toogleAddTask():void{
    this.showAdTask = !this.showAdTask;
    this.subject.next(this.showAdTask);
  }

  onToggle() :Observable<any>{
    return  this.subject.asObservable();
  }
}
