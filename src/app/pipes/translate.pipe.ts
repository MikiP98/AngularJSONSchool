import { Pipe, PipeTransform } from '@angular/core';
import { language_eng } from './translate.languages/eng';
import { language_pl } from './translate.languages/pl';

export interface LanguageDictionary {
    [key: string]: string | NestedDictionary;
}
interface NestedDictionary {
  [key: string]: NestedNestedDictionary;
}
interface NestedNestedDictionary {
  [key: string]: string;
}

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  transform(
              key: string, 
              language: string, 
              op_arg_1: string | undefined = undefined,
              op_arg_2: string | undefined = undefined
            ): string | NestedDictionary {
    
    // If key inside correct language dictionary, return it,
    // otherwise return from language_eng dictionary
    let value;
    if (language === 'pl' && language_pl[key]) {
      value = language_pl[key];
    }

    // DEFAULT
    if (value === undefined || value === null) {
      value = language_eng[key];
    }


    if (typeof value === 'string') {
      return value;
    }
    else if (typeof value === 'object') {
      if (op_arg_1 !== undefined && value[op_arg_1] !== undefined) {
        if (op_arg_2 !== undefined && value[op_arg_1][op_arg_2] !== undefined) {
          return value[op_arg_1][op_arg_2];
        }
      }
      return value;
    }
    return key;
  }
}