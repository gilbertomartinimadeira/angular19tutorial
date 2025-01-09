export interface Root {
    clientId: number
    contactPersonName: string
    companyName: string
    address: string
    city: string
    pincode: string
    state: string
    EmployeeStrength: number
    gstNo: string
    contactNo: string
    regNo: string
}

export class Client {
    clientId: number
    contactPersonName: string
    companyName: string
    address: string
    city: string
    pincode: string
    state: string
    EmployeeStrength: number
    gstNo: string
    contactNo: string
    regNo: string

    /**
     *
     */
    constructor() {

        this.clientId = 0;
        this.contactPersonName = '';
        this.companyName = '';
        this.address = '';
        this.city = '';
        this.pincode = '';
        this.state = '';
        this.EmployeeStrength = 0;
        this.gstNo = '';
        this.contactNo = '';
        this.regNo = '';

    }
}
export class ClientsResponse {
    data: Client[] = [];
    message!: string;
    result!: boolean;

}

export class ClientResponse {
    data: Client = new Client();
    message!: string;
    result!: boolean;

}