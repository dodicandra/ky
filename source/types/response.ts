export interface KyResponse<Res = unknown> extends Response {
	json: <T extends Res>() => Promise<T>;
}
