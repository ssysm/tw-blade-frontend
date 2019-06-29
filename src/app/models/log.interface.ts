declare namespace LogInterface {

  export interface Result {
    failedList: any[];
    _id: string;
    date: Date;
    finishedAt: Date;
    __v: number;
  }

  export interface RootObject {
    error: boolean;
    errorMessage?: any;
    result: Result[];
  }

}

