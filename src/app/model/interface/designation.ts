export default interface IDesignationPayload {
    message: string,
    result: boolean,
    data: IDesignation[]
}

export interface IDesignation {
    designationId: number,
    designation: string
}