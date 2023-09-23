export interface MovieShowTiming {
    movie: string;
    showTiming: string;
  }
  
  export interface MovieShowTimingsData {
    [screenNumber: string]: MovieShowTiming[];
  }
  