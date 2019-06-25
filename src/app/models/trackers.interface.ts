declare namespace TrackerInterface {

  export interface Result {
    createdAt: Date;
    tags: any[];
    _id: string;
    uid: any;
    displayName: string;
    __v: number;
  }

  export interface RootObject {
    error: boolean;
    errorMessage?: any;
    result: Result[];
  }

}

