import { App } from "../App.js";
import { AtomControl } from "../core/AtomControl.js";
import Inject, { RegisterSingleton } from "../di/di.js";
import { BusyIndicatorService } from "./BusyIndicatorService.js";

@RegisterSingleton
export class WebBusyIndicatorService extends BusyIndicatorService {

    @Inject
    private app: App;

    private zIndex: number = 50000;

    public createIndicator(): Disposable {

        const host = document.createElement("div");
        const popup = new AtomControl(this.app, host);
        host.className = "indicator-host";

        const span = document.createElement("i");

        const divStyle = host.style;
        divStyle.position = "fixed";
        divStyle.overflow = "hidden";
        divStyle.left = divStyle.right = divStyle.bottom = divStyle.top = "0";
        divStyle.zIndex = (this.zIndex ++) + "";
        const spanStyle = span.style;
        spanStyle.position = "absolute";
        spanStyle.margin = "auto";
        spanStyle.width = "16px";
        spanStyle.height = "16px";
        spanStyle.overflow = "hidden";
        spanStyle.maxHeight = "100%";
        spanStyle.maxWidth = "100%";
        spanStyle.left = spanStyle.right = spanStyle.bottom = spanStyle.top = "0";
        // span.src = ModuleFiles.src.web.images.busy_gif;
        span.className = "fas fa-spinner fa-spin";

        host.appendChild(span);

        document.body.appendChild(host);

        popup.registerDisposable({
            dispose: () => {
                host.remove();
            }
        });

        return {
            [Symbol.dispose]() {
                popup.dispose();
            }
        }
    }
}
