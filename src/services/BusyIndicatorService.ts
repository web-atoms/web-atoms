import { RegisterSingleton } from "../di/di.js";

export interface IBackgroundTaskInfo {
    title?: string;
    description?: string;
    icon?: string;
}

@RegisterSingleton
export class BusyIndicatorService {

    public createIndicator(info?: IBackgroundTaskInfo): Disposable {
        return {
            [Symbol.dispose]() {
                // do nothing.
            }
        };
    }

}
