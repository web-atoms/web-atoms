import { App } from "../App.js";
import { BusyIndicatorService } from "../services/BusyIndicatorService.js";
import { NavigationService } from "../services/NavigationService.js";
import { WebBusyIndicatorService } from "./services/WebBusyIndicatorService.js";
import { WindowService } from "./services/WindowService.js";

declare var UMD: any;

export default class WebApp extends App {

    public readonly initPromise: Promise<void>;

    public get parentElement(): HTMLElement {
        return document.body;
    }

    private mRoot: any;
    public get root(): any {
        return this.mRoot;
    }

    public set root(v: any) {
        const old = this.mRoot;
        if (old) {
            old.dispose();
        }
        this.mRoot = v;
        if (!v) {
            return;
        }
        const pe = this.parentElement;
        const de: HTMLElement[] = Array.from(pe.children) as HTMLElement[];
        for (const iterator of de) {
            iterator.remove();
        }
        pe.appendChild(v.element);
    }

    constructor() {
        super();

        this.put(NavigationService, this.resolve(WindowService));

        this.put(WebApp, this);

        this.put(BusyIndicatorService, this.resolve(WebBusyIndicatorService));

        this.initPromise = new Promise<void>((resolve, reject) => {
            this.onReady(resolve);
        });
    }


    protected invokeReady(): void {
        if (document.readyState === "complete") {
            super.invokeReady();
            return;
        }
        document.addEventListener("readystatechange", (e) => {
            super.invokeReady();
        });
    }

}
