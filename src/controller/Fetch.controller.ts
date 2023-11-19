import { ContentTypes, HttpMethods, Methods } from '../Types';

class Fetch {
	private _url: string = '';
	private _endpoint: string = '';
	private _method: Methods = HttpMethods.GET;

	private static _instance: Fetch | null = null;

	private constructor(url: string) {
		this._url = url;
	}

	public static getInstance(url: string): Fetch {
		if (!Fetch._instance) {
			Fetch._instance = new Fetch(url);
		}
		return Fetch._instance;
	}

	private _fetch({ _data }: { _data?: any } = {}): Promise<Response> {
		return fetch(`${this._url}${this._endpoint}`, {
			method: this._method,
			...(_data &&
				this._method === HttpMethods.POST && {
					headers: { 'Content-Type': ContentTypes.JSON },
				}),
			...(this._method === HttpMethods.POST && {
				body: JSON.stringify(_data),
			}),
		})
			.then((response) => response.json())
			.catch((error) => error);
	}

	public get(endpoint: string): Promise<Response> {
		this._endpoint = endpoint;
		this._method = HttpMethods.GET;
		return this._fetch();
	}

	public post(endpoint: string, data: any): Promise<Response> {
		this._endpoint = endpoint;
		this._method = HttpMethods.POST;
		return this._fetch(data);
	}
}

export default Fetch;
