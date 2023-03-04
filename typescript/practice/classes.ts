class User {
    private readonly city?: string = 'Los Angeles'; //? Can use the # for private as well.
    constructor(public email: string, public name: string) {
        this.email = email;
        this.name = name;
    }
}

export const chad = new User('chad@example.com', 'chad');