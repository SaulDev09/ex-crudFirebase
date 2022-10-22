
export class UserModel {
    id?: string;
    name: string;
    lastName: string;
    status: boolean;

    constructor() {
        this.id = '';
        this.name = '';
        this.lastName = '';
        this.status = true;
    }
}
