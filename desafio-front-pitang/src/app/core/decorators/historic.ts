import { Utils } from '@core/utils/utils';

export default function historic() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            Utils.handleSessionStorage('searchWord', args[0]);
            originalMethod.apply(this, args);
        }
        return descriptor;
    }
}