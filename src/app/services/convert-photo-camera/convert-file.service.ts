import { Injectable } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class ConvertFileService {

  constructor(
  ) { }

  getFileReader(): FileReader {
    const fileReader = new FileReader();
    const zoneOriginalInstance = (fileReader as any)["__zone_symbol__originalInstance"];
    return zoneOriginalInstance || fileReader;
  }

  async blobFormFile(file) {
    return new Promise((resolve, reject) => {
      const reader = this.getFileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        var fileBlob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
        resolve(fileBlob);
      };
      reader.onerror = (error) => {
        reject(null);
      };
    })
  }

  async base64FromPath(blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = this.getFileReader();
      reader.onerror = reject;
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject('method did not return a string');
        }
      };
      reader.readAsDataURL(blob);
    });
  }

  getFile(filename){
    return new Promise<string>((resolve) => {
      Filesystem.getUri({
        path: filename,
        directory: Directory.Cache
      }).then((uri) => {
        resolve(uri.uri);
      })
    });
  }

  deleteFile(filename){
    return new Promise((resolve) => {
      Filesystem.deleteFile({
        path: filename,
        directory: Directory.Cache
      }).then(() => {
        resolve(true);
      })
    });
  }
}
