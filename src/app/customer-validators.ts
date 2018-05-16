import { AbstractControl, Validators } from '@angular/forms';

export class CustomerValidators {
    static positiveNumberValidation(c: AbstractControl) {
        let inputNumber = c.value as number;
        if(inputNumber >= 0) {
          return null;
        } else {
          return {
            positiveNumber:{
              valid: false
            }
          }
        }
      }

}