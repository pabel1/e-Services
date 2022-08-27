import cogoToast from "cogo-toast";

const EmailRegx = /\S+@\S+\.\S+/;
const MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

// class FormHelper {

   export function IsEmpty(value) {
        return value.length === 0;
    }
    export function IsMobile(value){
        return MobileRegx.test(value);
    }

    export function IsNotEmail(value) {
        return !EmailRegx.test(value);
    }

    export function ErrorToast(msg) {
        cogoToast.error(msg, { position: "bottom-center" });
    }
    export function SuccessToast(msg) {
        cogoToast.success(msg, { position: "bottom-center" });
    }


    export function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }


// }

// export const {
//     IsEmpty,
//     IsMobile,
//     IsNotEmail,
//     ErrorToast,
//     getBase64,
//     SuccessToast
// } = new FormHelper();