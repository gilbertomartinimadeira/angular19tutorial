import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import IDesignationPayload, { IDesignation } from '../../model/interface/designation';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  masterService = inject(MasterService);
  designationList: IDesignation[] = [];
  isLoading: boolean = true;

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result: IDesignationPayload) => {
      console.log(result.data);
      this.designationList = result.data;
      this.isLoading = false;
    });
  }

}
