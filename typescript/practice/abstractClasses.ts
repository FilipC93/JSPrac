abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {
    }
    abstract getSepia(): void
    getReelTime(): number {
        return 8
    }
}

// const pc = new TakePhoto('test', 'nofilter') 
//? Can't work cause of the abstraction. 

class Twitter extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }
    getSepia(): void {
        console.log('activated');
    }
}

const newTwitter = new Twitter('test', 'testFilter', 50);

export { }