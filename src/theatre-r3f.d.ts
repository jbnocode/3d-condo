declare module '@theatre/r3f' {
  import { ReactNode } from 'react';
  import type { ISheet } from '@theatre/core';

  export const SheetProvider: React.FC<{
    sheet: ISheet;
    children: ReactNode;
  }>;

  export function useCurrentSheet(): ISheet;

  export const editable: {
    [K: string]: any;
    perspectiveCamera: any;
  };

  export const PerspectiveCamera: any;
}
