declare module 'react-rating' {
    import { Component } from 'react';
  
    interface RatingProps {
      initialRating?: number;
      emptySymbol?: React.ReactNode;
      fullSymbol?: React.ReactNode;
      readonly?: boolean;
    }
  
    export default class Rating extends Component<RatingProps> {}
  }
  