export interface FilterStateInt {
    status: boolean | null;
}

export interface SizeStateInt {
    active: number;
}

export interface FilterActionInt {
    type: string;
    payload: {
        status: boolean | null;
    };
}

export interface SizeActionInt {
    type: string;
    payload: {
        active: number;
    };
}

export interface ListActionInt {
    type: string;
    payload: {
        id?: number;
        status?: boolean;
        text?: string;
        key?: number;
    };
}

export interface ListStateInt {
    key?: number;
    text?: string;
    status?: boolean;
}