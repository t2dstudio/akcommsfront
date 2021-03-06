import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dataplan } from '../models/dataplan';
import { User } from '../models/user';
import { Device} from '../models/device';
import { CartService } from './cart.service';

const apiUrl = "http://localhost:8085/dataplans"

@Injectable({
  providedIn: 'root'
})
export class DataplanService {

  constructor(private http:HttpClient) { }


  getDataplan(): Observable<Dataplan[]>{

    return this.http.get<Dataplan[]>(apiUrl);

  }

  getDataplanByUser(cid: number): Observable<Dataplan[]>{
    let uUrl: string = "http://localhost:8085/dataplans/dataplan/user?cid=" + cid;
    return this.http.get<Dataplan[]>(uUrl);
  }

  getDataPlanOnDevice(id: number): Observable<Device[]>{
    let dUrl: string = "http://localhost:8085/dataplans/dataplan/device?id=" + id;
    return this.http.get<Device[]>(dUrl)
  }
  // saveDataPlan(id:number): any{
  //   let url: string = "http://localhost:8085/dataplans/dataplan";
  //   this.http.post(url, JSON.stringify('{"id": ' + id + '}'));
  // }
  saveDataPlan(id: number): any{
    let url: string = "http://localhost:8085/dataplans/dataplan";
    this.http.post(url, JSON.stringify('{"id": ' + id + '}'));
  }
  addDataPlanToUser(cid: User, id:Dataplan) : any{
let url: string = "";
  }
 

}
