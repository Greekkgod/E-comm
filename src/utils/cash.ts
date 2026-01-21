import { load } from '@cashfreepayments/cashfree-js'

let cashfreeInstance: any = null;

export async function getCashfreeInstance() {
    if (!cashfreeInstance) {
        cashfreeInstance = await load({
            mode: 'sandbox', 
        });
    }
    return cashfreeInstance;
}