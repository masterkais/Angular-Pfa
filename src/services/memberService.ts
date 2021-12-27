import { HttpClient } from '@angular/common/http';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { GLOBAL } from 'src/app/app-config';
import { Member } from 'src/models/member.model';
import {MemberListComponent} from '../app/member-list/member-list.component'

@Injectable({
  providedIn: 'root'
})

export class MemberService{
 

  constructor(private httpClient: HttpClient){
    
  }
  public DataSource : Member [] = GLOBAL._DB.members;

  saveMember(MemberToSave : any): Promise<Member>{
    
    //return this.httpClient.post<Member>('link',member).toPromise();
    const memberToSave:Member= {
      Id : MemberToSave.Id ?? Math.ceil(Math.random()*10000).toString(),
      CreatedDate : MemberToSave.CreatedDate ?? new Date().toLocaleDateString(),
      ...MemberToSave
    };
    this.DataSource=[memberToSave,...this.DataSource.filter(item=> item.Id!==memberToSave.Id)]
    return new Promise (resolve => resolve(memberToSave));
  }
  
  getMemberbyID(ID : string): Promise<Member>{
    //return this.httpClient.get<Member>('linktoRestAPI').toPromise();
    return new Promise (resolve => resolve(
    this.DataSource.filter(item => item.Id===ID)[0]??null));
  }

  RemoveMemberbyID(ID : string):Promise<void>{
    //return this.httpClient.delete<void>('linktoRestAPI').toPromise();
    this.DataSource=this.DataSource.filter(item=> item.Id!==ID);
    return new Promise (resolve => resolve());
  }


  GetAllMemeber():Promise<Member[]>{
    //return this.httpClient.get<Member[]>('linktoRestAPI').toPromise();
    return new Promise (resolve => resolve(this.DataSource));
  }

}