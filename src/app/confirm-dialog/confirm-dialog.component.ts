import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  public title ='Are You Sure ?' ;
  public cancelButtonLabel ='Cancel';
  public confirmButtonLabel ='Confirm';
  public message = 'Do You Really Want To Remove';
  public confirmButtonColor : string | undefined ;

  ngOnInit(): void {
  


  
  }

}
