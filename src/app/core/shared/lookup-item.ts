export interface LookupItem {
    text: string;
    value: string;
    icon?: null | string;
    hint?: null | string;
  }
  
  export interface GenericLookupItem<T> {
    text: string;
    value: T;
    key?: string;
    icon?: null | string;
    hint?: null | string;
  }
  
  export interface LocaleLookupItem extends LookupItem {
    nativeName: string;
  }
  