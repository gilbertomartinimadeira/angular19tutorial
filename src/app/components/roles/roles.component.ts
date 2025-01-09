import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  http = inject(HttpClient);
  roleList: IRole[] = [];
  /**
   *
   */
  // constructor(private http: HttpClient) {


  // }

  ngOnInit(): void {
    this.getAllRules();
  }

  getAllRules() {
    this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles')
      .subscribe((res: any) => {
        console.log(res.data);
        this.roleList = res.data;
        this.roleList.push({ role: 'minhaRoles', roleId: 24 });
      })
  }































  // //string, number, boolean, date, object, array, null, undefined, any
  // firstName: string = 'Gilberto';
  // angularVersion = 'Version 19';

  // version: number = 19;
  // isActive: boolean = false;
  // currentDate : Date = new Date();
  // inputType: string = "button";
  // selectedState : string = '';

  // onBtnClick() {
  //   alert('Something happened!!!');
  // }
  // showWelComeAlert() {
  //   alert('Something happened!!!');
  // }

  // showMessage(message: string) {
  //   alert(message);
  // }
}
