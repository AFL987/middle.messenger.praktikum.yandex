export type PropsPage = {
    title: string;
    template: string;
    children?: {[key: string]: any}[],
};

export type Events = {
    [key: string]: {tagEvent: string, callback: ((...args: any) => unknown)}
}
