// import { App } from "../../App.js";
// import { AtomBinder } from "../../core/AtomBinder.js";
// import { AtomComponent } from "../../core/AtomControl.js";
// import { BindableProperty } from "../../core/BindableProperty.js";
// import Command from "../../core/Command.js";
// import FormattedString from "../../core/FormattedString.js";
// import { refreshInherited, visitDescendents } from "../../core/Hacks.js";
// import WebImage from "../../core/WebImage.js";
// import XNode, { isControl } from "../../core/XNode.js";
// import { TypeKey } from "../../di/TypeKey.js";


// const isAtomControl = isControl;

// // export { default as WebApp } from "../WebApp.js";

// // if (!AtomBridge.platform) {
// //     AtomBridge.platform = "web";
// //     AtomBridge.instance = new AtomElementBridge();
// // } else {
// //     console.log(`Platform is ${AtomBridge.platform}`);
// // }

// const fromHyphenToCamel = (input: string) => input.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

// declare var bridge;
// if (typeof bridge !== "undefined" && bridge.platform) {
//     throw new Error("AtomControl of Web should not be used with Xamarin Forms");
// }

// const defaultStyleSheets: { [key: string]: AtomStyle } = {};

// function setAttribute(name: string) {
//     return (ctrl: AtomControl, e: HTMLElement, value: any) => {
//         e.setAttribute(name, value);
//     };
// }

// function setEvent(name: string) {
//     return (ctrl: AtomControl, e: HTMLElement, value: any) => {
//         (ctrl as any).bindEvent(e, name, value);
//     };
// }

// function setStyle(name: string, applyUnit?: string) {
//     if (applyUnit) {
//         return (ctrl: AtomControl, e: HTMLElement, value: any) => {
//             if (typeof value === "number") {
//                 e.style[name] = value + applyUnit;
//                 return;
//             }
//             e.style[name] = value;
//         };
//     }
//     return (ctrl: AtomControl, e: HTMLElement, value: any) => {
//         e.style[name] = value;
//     };
// }

// function disposeChildren(owner: AtomControl, e: HTMLElement) {
//     if (!e) {
//         return;
//     }
//     let s = e.firstElementChild;
//     while (s) {
//         const c = s as HTMLElement;
//         s = s.nextElementSibling as HTMLElement;
//         const ac = c.atomControl;
//         if (ac) {
//             ac.dispose();
//             c.remove();
//             continue;
//         }
//         disposeChildren(owner, c);
//         owner.unbind(c);
//         owner.unbindEvent(c);
//         c.remove();
//     }
// }


// /**
//  * AtomControl class represents UI Component for a web browser.
//  */
// export class AtomControl extends AtomComponent {

//     public static from<T = AtomControl>(e1: Element | EventTarget): T {
//         let e = e1 as any;
//         while (e) {
//             const { atomControl } = e;
//             if (atomControl) {
//                 return atomControl as T;
//             }
//             e = e._logicalParent ?? e.parentElement;
//         }
//     }

//     public static registerProperty<T = any>(
//         attributeName: string,
//         attributeValue: string,
//         setter: (ctrl: AtomControl, element: HTMLElement, value: T) => void): PropertyRegistration<T> {
//         const setterSymbol = `${attributeName}_${attributeValue}_${propertyId++}`;
//         ElementValueSetters[setterSymbol] = setter;
//         function setterFx(v: T) {
//             return {
//                 [setterSymbol]: v
//             };
//         }
//         setterFx.toString = () => {
//             return setterSymbol;
//         };
//         setterFx.property = setterSymbol;
//         return setterFx as any;
//     }

//     @BindableProperty
//     public renderer: XNode;

//     /**
//      * Gets Parent AtomControl of this control.
//      */


//     protected get factory() {
//         return AtomControl;
//     }

//     constructor(app: App, e: HTMLElement = document.createElement("div")) {
//         super(app, e);
//     }

//     public onPropertyChanged(name: string): void {
//         super.onPropertyChanged(name);
//         switch (name) {
//             case "theme":
//                 this.mCachedTheme = null;
//                 AtomBinder.refreshValue(this, "style");
//                 break;
//             case "renderer":
//                 this.rendererChanged();
//                 break;
//         }
//     }

//     public atomParent(e: HTMLElement): AtomControl {
//         while (e) {
//             const ac = e.atomControl;
//             if (ac) {
//                 return ac;
//             }
//             e = e._logicalParent ?? e.parentElement;
//         }
//     }

//     public append(element: AtomControl | HTMLElement | Text): AtomControl {
//         if (element instanceof AtomControl) {
//             this.element.appendChild(element.element);
//         } else {
//             this.element.appendChild(element);
//         }
//         return this;
//     }

//     public updateSize(): void {
//         this.onUpdateSize();
//         visitDescendents(this.element, (e, ac) => {
//             if (ac) {
//                 ac.updateSize();
//                 return false;
//             }
//             return true;
//         });
//     }

//     protected rendererChanged() {
//         disposeChildren(this, this.element);
//         this.element.innerHTML = "";
//         const r = this.renderer;
//         if (!r) {
//             return;
//         }
//         delete this.render;
//         this.render(r);
//     }

//     protected preCreate(): void {
//         // if (!this.element) {
//         //     this.element = document.createElement("div");
//         // }
//     }

//     protected setElementValue(element: HTMLElement, name: string, value: any): void {

//         if (value === undefined) {
//             return;
//         }

//         const setter = ElementValueSetters[name];
//         if (setter !== void 0) {
//             setter(this, element, value);
//             return;
//         }

//         if (/^(data|aria)\-/.test(name)) {
//             if (value === null) {
//                 element.removeAttribute(name);
//                 return;
//             }
//             if (typeof value === "object") {
//                 value = JSON.stringify(value);
//             }
//             if (typeof value !== "string") {
//                 value = value.toString();
//             }
//             element.setAttribute(name, value);
//             return;
//         }

//         if (/^style/.test(name)) {
//             name = name.substring(5);
//             if (name.startsWith("-")) {
//                 name = fromHyphenToCamel(name.substring(1));
//             } else {
//                 name = name.charAt(0).toLowerCase() + name.substring(1);
//             }

//             if (value instanceof WebImage) {
//                 value = `url(${value})`;
//             }
//             element.style[name] = value;
//             return;
//         }

//         if (/^event/.test(name)) {
//             name = name.substring(5);
//             if (name.startsWith("-")) {
//                 name = fromHyphenToCamel(name.substring(1));
//             } else {
//                 name = name.charAt(0).toLowerCase() + name.substring(1);
//             }

//             this.bindEvent(element, name, value);
//             return;
//         }

//         if (name.startsWith("attr-")) {
//             if (value === null) {
//                 element.removeAttribute(name.substring(5));
//                 return;
//             }
//             element.setAttribute(name.substring(5), value);
//         } else {
//             element[name] = value;
//         }
//     }

//     // protected bindElementEvent(element: HTMLElement, name: string, value: any) {
//     //     this.bindEvent(element, name, value);
//     // }

//     protected setElementClass(element: HTMLElement, value: any, clear?: boolean): void {
//         const s = value;
//         if (s && typeof s === "object") {
//             if (!s.className) {
//                 if (clear) {
//                     let sr = "";
//                     for (const key in s) {
//                         if (s.hasOwnProperty(key)) {
//                             const sv = s[key];
//                             if (sv) {
//                                 sr += (sr ? (" " + key) : key);
//                             }
//                         }
//                     }
//                     element.className = sr;
//                     return;
//                 }
//                 for (const key in s) {
//                     if (s.hasOwnProperty(key)) {
//                         const sv = s[key];
//                         if (sv) {
//                             if (!element.classList.contains(key)) {
//                                 element.classList.add(key);
//                             }
//                         } else {
//                             if (element.classList.contains(key)) {
//                                 element.classList.remove(key);
//                             }
//                         }
//                     }
//                 }
//                 return;
//             }
//         }
//         const sv1 = s ? (s.className || s.toString()) : "";
//         element.className = sv1;
//     }

//     protected onUpdateSize(): void {
//         // pending !!
//     }


//     protected createNode(app, e, iterator, creator) {
//         const name = iterator.name;
//         const attributes = iterator.attributes;
//         if (typeof name === "string") {
//             const element = document.createElement(name);
//             if (name === "input") {
//                 if (!attributes.autocomplete) {
//                     this.app.callLater(() => {
//                         (element as HTMLInputElement).autocomplete = "google-stop" as any;
//                     });
//                 }
//             }
//             e?.appendChild(element);
//             this.render(iterator, element, creator);
//             return element;
//         }

//         if (name[isAtomControl]) {
//             const forName = attributes?.for;
//             const ctrl = new (name)(app,
//                 forName ? document.createElement(forName) : undefined);
//             const element = ctrl.element ;
//             e?.appendChild(element);
//             ctrl.render(iterator, element, creator);
//             return element;
//         }

//         throw new Error(`not implemented create for ${iterator.name}`);
//     }


// }

