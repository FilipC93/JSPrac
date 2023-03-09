interface TakePhoto {
    cameraMode: string
    filter: string
    burstPhotos: number
}

interface Story {
    createStory: () => void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstPhotos: number
    ) {
    }
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstPhotos: number
    ) {
    }
    createStory(): void {
        console.log('Story created');
    }
}

export { }