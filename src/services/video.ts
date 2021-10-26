import { HttpResult } from "~/model/common";
import { LoginParam, User } from "~/model/user";
import { http } from "~/utils";

export async function login(data: LoginParam) {
    const result = await http.post<HttpResult<User>>('/api/sys/login', data);
    return result.data;
}