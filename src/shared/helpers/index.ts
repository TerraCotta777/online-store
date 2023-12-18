import { AxiosResponse } from "axios";

export const isOKResponse = (res: AxiosResponse<any>) =>
    Boolean(res.status === 200 || res.status === 201 || res.status === 204);