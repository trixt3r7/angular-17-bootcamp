import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
  standalone: true
})
export class FileSizePipe implements PipeTransform {

  transform(size: number): string {

    switch (true) {
      case (size < 1024):
        return size + ' bytes';
      case (size >= 1024 && size < 1048576):
        return (size / 1024).toFixed(1) + ' KB';
      case (size >= 1048576 && size < 1073741824):
        return (size / 1048576).toFixed(1) + ' MB';
      case (size >= 1073741824):
        return (size / 1073741824).toFixed(1) + ' GB';
      default:
        return size + ' bytes'  ;
    }
  }
}
