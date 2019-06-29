declare namespace LookupInterface {

  export interface Result {
    following: boolean;
    id: string;
    screen_name: string;
    name: string;
    protected: boolean;
    followers_count: number;
    formatted_followers_count: string;
    age_gated: boolean;
  }

  export interface RootObject {
    error: boolean;
    errorMessage?: any;
    result: Result;
  }

}

