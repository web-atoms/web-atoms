import { BindableProperty } from "../../core/BindableProperty.js";
import { IClassOf } from "../../core/types.js";
import { AtomControl } from "./AtomControl.js";

export class AtomTemplateControl extends AtomControl {

    public contentTemplate: IClassOf<AtomControl>;

    private content: AtomControl;

    public onPropertyChanged(name: string): void {
        if (name === "contentTemplate") {
            this.createContent();
        }
    }

    public onUpdateUI(): void {
        super.onUpdateUI();
        if (this.content) {
            return;
        }
        if (this.contentTemplate) {
            this.createContent();
        }
    }

    protected preCreate() {
        this.contentTemplate = null;
        this.content = null;
    }

    protected createContent(): void {
        const t = this.contentTemplate;
        if (!t) {
            return;
        }

        const tc = this.content;
        if (tc) {
            tc.dispose();
            this.content = null;
        }

        const ntc = this.content = new (t)(this.app);

        this.append(ntc);
    }

}
