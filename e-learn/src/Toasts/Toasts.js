import toast from "react-hot-toast";

export const success = message => {
    toast.success(message, {
        duration: 4000,
        position: 'top-center',
    });
}
export const emailSent = message => {
    toast(message, {
        duration: 8000,
        position: 'top-center',
        style: {
            background: '#fff',
            color: '#0B5ED7',
        },
    });
}

