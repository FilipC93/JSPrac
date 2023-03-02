interface User {
    readonly databaseID: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrial: () => string
    getDiscountCode(code: string, off: number): number
};

interface gitHubIntegration {
    githubToken?: string
}

interface Admin extends User, gitHubIntegration {
    role: 'admin' | 'ta' | 'intern'
}

const filip: Admin = {
    githubToken: 'github',
    databaseID: 22,
    role: 'intern',
    email: 'filip@example.com',
    userId: 121212,
    startTrial: () => 'Trial started for 1 month',
    getDiscountCode: (code: 'filip', off: 15) => off
};


export { }