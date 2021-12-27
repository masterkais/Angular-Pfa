import { Component,OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { Member } from 'src/models/member.model';
import { MemberService } from 'src/services/memberService';
import { GLOBAL } from '../app-config';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit,OnDestroy {
  

  
  DataSource: MatTableDataSource<Member>;
  displayedColumns: string[] = ['Id', 'Cin', 'Name', 'Type', 'CV', 'CreatedDate','action'];
  protected _onDestroy = new Subject <void>();

  constructor(private Service : MemberService , private dialog: MatDialog) {
    
    this.DataSource = new MatTableDataSource(this.Service.DataSource);

   }
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
   onRemoveAccount(id:any):void{
    //Confirm Dialog 

    const dialogRef = this.dialog.open(ConfirmDialogComponent,{hasBackdrop:true,disableClose:false});

    dialogRef.afterClosed().pipe().subscribe(isDeleteConfirmed => {
      console.log("Removing Item id :" +id +" ,State :"+ isDeleteConfirmed);
      if(isDeleteConfirmed){
        this.Service.RemoveMemberbyID(id).then(() => (this.fetchDataSource()))
      }
    })
    

   }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.DataSource.filter = filterValue.trim().toLowerCase();
    }

   private fetchDataSource():void{
    this.Service.GetAllMemeber().then((Tab)=> (this.DataSource.data=Tab));
   }
    ngOnInit(): void {
      this.fetchDataSource();
   }
  



}



