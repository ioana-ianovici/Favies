export class UserDetails {
    id?: string;
    displayName?: string;

    constructor(userDetails: Partial<UserDetails>) {
        this.id = userDetails.id;
        this.displayName = userDetails.displayName;
    }
}
