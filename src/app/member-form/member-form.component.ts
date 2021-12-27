import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Member } from 'src/models/member.model';
import { MemberService } from 'src/services/memberService';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  isAddMode : boolean = true;
  form : any;
  currentItemID:string | undefined;
  currentitem:Member | undefined ;

  constructor(private MemberService : MemberService , private router: Router,private activeroute : ActivatedRoute ) { }



  onSubmit() : void {

    console.log(this.form.value);
    //const memberToSave = this.form.value;
    const memberToSave:Member={...this.currentitem,...this.form.value}
    this.MemberService.saveMember(memberToSave).then(() => {this.router.navigate(['./members'])});
    this.form.reset();
    module
    
  }

  ngOnInit(): void {
    form : FormGroup;
    //this.initFrom();
    this.currentItemID = this.activeroute.snapshot.params.id; 
    if(!!this.currentItemID){
      this.MemberService.getMemberbyID(this.currentItemID).then(item => {
        this.currentitem = item;
        this.initFrom(this.currentitem);
      });
      
    }else{
      this.initFrom(null);
    }
  }

  isFormInEditMode() : boolean{
    this.currentItemID = this.activeroute.snapshot.params.id; 
    return  !!this.currentItemID
  }

  initFrom( item:any):void{
    this.form = new FormGroup(
      {
        Cin : new FormControl( null, [Validators.required]),
        Name : new FormControl(item?.Name, [Validators.required]),
        CV : new FormControl(item?.CV, []),
        Type : new FormControl(item?.Type, [Validators.required]),
      }
    );
    
  }

}
