import { App } from "../../App.js";
import { Inject } from "../../di/Inject.js";
import { AtomControl } from "./AtomControl.js";
import { AtomItemsControl } from "./AtomItemsControl.js";

export class AtomComboBox extends AtomItemsControl {

    private isChanging: boolean;

    constructor(@Inject app: App, e?: HTMLElement) {
        super(app, e || document.createElement("select"));
        this.allowMultipleSelection = false;
    }

    public onCollectionChanged(key: string, index: number, item: any): void {
        super.onCollectionChanged(key, index, item);
        try {
            this.isChanging = true;
            const se = this.element as HTMLSelectElement;
            se.selectedIndex = this.selectedIndex;
        } finally {
            this.isChanging = false;
        }
    }

    public updateSelectionBindings(): void {
        super.updateSelectionBindings();

        try {
            if (this.isChanging) {
                return;
            }
            this.isChanging = true;
            const se = this.element as HTMLSelectElement;
            se.selectedIndex = this.selectedIndex;
        } finally {
            this.isChanging = false;
        }
    }

    protected preCreate(): void {
        super.preCreate();
        this.itemTemplate = AtomComboBoxItemTemplate;
        this.runAfterInit(() => {
            this.bindEvent(this.element, "change", (s) => {
                if (this.isChanging) {
                    return;
                }
                try {
                    this.isChanging = true;
                    const index = (this.element as HTMLSelectElement).selectedIndex;
                    if (index === -1) {
                        this.selectedItems.clear();
                        return;
                    }
                    this.selectedItem = this.items[index];
                    // this.selectedIndex = (this.element as HTMLSelectElement).selectedIndex;
                } finally {
                    this.isChanging = false;
                }
            });
        });

    }
}

class AtomComboBoxItemTemplate extends AtomControl {

    constructor(app: App, e?: HTMLElement) {
        super(app, e || document.createElement("option"));
    }

    protected create(): void {
        this.bind(this.element, "text", [["data"]], false ,
        (v) => {
            const ip = this.element._templateParent as AtomItemsControl;
            return v[ip.labelPath];
        });
    }
}
