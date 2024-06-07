import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../model/movie';

@Pipe({
  name: 'searchMovie',
  standalone: true,
})
export class SearchMoviePipe implements PipeTransform {
  transform(
    value: Movie[],
    title: string,
    releaseYear: number | undefined
  ): Movie[] {
    //if filters - empty
    if (
      (title == '' || title == undefined || !title) &&
      (!releaseYear || releaseYear === undefined || releaseYear === null)
    ) {
      return value;
    }

    const tempValue = [...value];
    let filteredValue: Movie[] = [];

    //if filter have both title & release year
    if (title && releaseYear) {
      filteredValue = tempValue.filter((val) => {
        return (
          val.title.toLowerCase().includes(title.toLowerCase()) &&
          val.release_date.includes(String(releaseYear))
        );
      });
      return filteredValue;
    }

    //if filter have only title
    if (title) {
      filteredValue = tempValue.filter((val) => {
        return val.title.toLowerCase().includes(title.toLowerCase());
      });
    }

    //if filter have only release year
    if (releaseYear) {
      filteredValue = tempValue.filter((val) => {
        return val.release_date.includes(String(releaseYear));
      });
    }
    return filteredValue;
  }
}
