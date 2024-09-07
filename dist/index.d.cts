import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { MutableRefObject } from 'react';

declare function ButtonAria(): react_jsx_runtime.JSX.Element;

interface AriaGridProps {
    rowSelector: string;
    colSelector: string;
    handlers?: {
        onReachStart?: () => void;
        onReachEnd?: () => void;
    };
}

declare function grid(containerNode: HTMLElement, props: AriaGridProps): {
    registerEvents: () => void;
    clearEvents: () => void;
};

interface AriaGridHookProps {
    rowSelector: string;
    colSelector: string;
    onReachStart?: () => void;
    onReachEnd?: () => void;
}
declare function useAriaGrid({ rowSelector, colSelector, onReachEnd, onReachStart }: AriaGridHookProps, depArray: any[], ref?: MutableRefObject<HTMLElement | undefined>): React.MutableRefObject<HTMLElement | undefined>;

export { ButtonAria, grid, useAriaGrid };
