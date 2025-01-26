import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgbModalWindow implements OnInit, OnDestroy {
    private _document;
    private _elRef;
    private _zone;
    private _injector;
    private _closed$;
    private _elWithFocus;
    private _dialogEl;
    animation: boolean;
    ariaLabelledBy: string;
    ariaDescribedBy: string;
    backdrop: boolean | string;
    centered: string;
    fullscreen: string | boolean;
    keyboard: boolean;
    role: string;
    scrollable: string;
    size: string;
    windowClass: string;
    modalDialogClass: string;
    dismissEvent: EventEmitter<any>;
    shown: Subject<void>;
    hidden: Subject<void>;
    get fullscreenClass(): string;
    dismiss(reason: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    hide(): Observable<any>;
    private _show;
    private _enableEventHandling;
    private _disableEventHandling;
    private _setFocus;
    private _restoreFocus;
    private _bumpBackdrop;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgbModalWindow, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgbModalWindow, "ngb-modal-window", never, { "animation": { "alias": "animation"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "ariaDescribedBy": { "alias": "ariaDescribedBy"; "required": false; }; "backdrop": { "alias": "backdrop"; "required": false; }; "centered": { "alias": "centered"; "required": false; }; "fullscreen": { "alias": "fullscreen"; "required": false; }; "keyboard": { "alias": "keyboard"; "required": false; }; "role": { "alias": "role"; "required": false; }; "scrollable": { "alias": "scrollable"; "required": false; }; "size": { "alias": "size"; "required": false; }; "windowClass": { "alias": "windowClass"; "required": false; }; "modalDialogClass": { "alias": "modalDialogClass"; "required": false; }; }, { "dismissEvent": "dismiss"; }, never, ["*"], true, never>;
}