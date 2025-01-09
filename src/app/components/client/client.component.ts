import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObj = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);

  modalVisible: boolean = false;
  modalTitle: string = '';
  modalBody: string = '';
  ngOnInit() {
    this.loadClients();
  }
  saveClient() {

    //TODO: add api call
    this.clientService.addUpdate(this.clientObj).subscribe(result => {

      this.loadClients();
      this.showModal('Warning', `Client's ${this.clientObj.contactPersonName} info saved.`);
      this.clientObj = new Client();
    });
  }

  loadClients() {

    this.clientService.getAllClients().subscribe(result => {
      this.clientList = result.data;
    })
  }

  editClient(index: number) {
    const client = this.clientList[index];
    this.clientObj = client;

  }

  deleteClient(index: number) {

    this.clientService.delete(this.clientList[index].clientId).subscribe(result => {
      this.loadClients();

      this.showModal('Warning', `Client ${this.clientList[index].clientId} was deleted successfully`);
    });

  }

  reset() {
    this.clientObj = new Client();
  }

  showModal(title: string, body: string) {
    this.modalVisible = true;
    this.modalTitle = title;
    this.modalBody = body;
  }
}
