export interface ISweetAlertService {
    setOptions(options: {}): SweetAlertService;
    showAlert(title: string, text: string): void;
}

export class SweetAlertService
    implements ISweetAlertService {
    private sweetAlertOptions;
    private usableOptions;
    private callBack;
    constructor() {
        this.sweetAlertOptions = {
           type: "success",   
           showCancelButton: false,   
           confirmButtonColor: "#DD6B55",   
           confirmButtonText: "Ok!",   
           cancelButtonText: "No, cancel plx!",   
           closeOnConfirm: false,   
           closeOnCancel: false
        }
    }

    setOptions(options): SweetAlertService {
        this.usableOptions = angular.extend({}, this.sweetAlertOptions, options);
        return this;
    }
    
    setCommonCallback(fnc): SweetAlertService {
        this.callBack = fnc;
        return this;
    }

    showAlert(title: string, text: string): void {
        if (title)
            this.usableOptions.title = title;
        if (text)
            this.usableOptions.text = text;
        swal(this.usableOptions, this.callBack);
        
        this.clearData();
    }
    
    private clearData(): void {
        this.usableOptions = {};
        this.callBack = () => {};
    }
}


angular.module('app.core.services.alert.sweet', [])
    .service('SweetAlertService', SweetAlertService);