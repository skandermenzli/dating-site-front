import { Pipe, PipeTransform } from '@angular/core';

const DEFAULT_IMAGE = 'default.png';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    if ( path==null){
      return DEFAULT_IMAGE;
    }
    return path;

}
}

