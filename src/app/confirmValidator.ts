import { FormGroup } from '@angular/forms';

export function ConfirmedValidator(password: string, cnfPassword:string){
    return(formGroup: FormGroup)=>{
        const pass = formGroup.controls[password];
        const cnfPass = formGroup.controls[cnfPassword];
        if(cnfPass.errors&& !cnfPass.errors.confirmedValidator){
            return;
        }

        if(pass.value!=cnfPass.value){
            cnfPass.setErrors({confirmedValidator:true})
        }else{
            cnfPass.setErrors(null);
        }
    }
}