import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    // const tasks = of(TASKS);
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl);

  }

  deleteTask(task: Task):Observable<Task>{
    return this.http.delete<Task>(`${this.apiUrl}/${task.id}`);
  }

  remindTask(task:Task): Observable<Task>{
    return this.http.patch<Task>(`${this.apiUrl}/${task.id}`, task, httpOptions);
  }

  addTask(task: Task): Observable<Task>{
    return  this.http.post<Task>(this.apiUrl, task);
  }
}
