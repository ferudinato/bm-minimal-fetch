declare class Fetch {
    private _url;
    private _endpoint;
    private _method;
    private static _instance;
    private constructor();
    static getInstance(url: string): Fetch;
    private _fetch;
    get(endpoint: string): Promise<Response>;
    post(endpoint: string, data: any): Promise<Response>;
}

export { Fetch as default };
