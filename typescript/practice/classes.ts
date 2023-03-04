class User {
    private _courseCount = 1;
    private readonly city?: string = 'Los Angeles'; //? Can use the # for private as well.
    constructor(public email: string, public name: string) {
        this.email = email;
        this.name = name;
    }
    private deleteToken(): string {
        return 'Token deleted';
    }
    get getGmail(): string {
        return `your gmail is : ${this.email}`;
    };
    get courseCount(): number {
        return this._courseCount;
    };
    set courseCount(courseNum: number) { //? Setters dont need a return type
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNum;
    };
}

export const chad = new User('chad@example.com', 'chad');