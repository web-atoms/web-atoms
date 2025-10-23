import { CancelToken, INameValues } from "../../core/types.js";
export class AjaxOptions {
    public dataType?: string;
    public contentType?: string;
    public method?: string;
    public url?: string;
    public data?: any;
    public cancel?: CancelToken;
    public headers?: INameValues;
    public cache?: any;
    public attachments?: any[];
    public responseText?: string;
    public responseHeaders?: string;
    public status?: number;
    public responseType?: string;
}
