import type { ApiResponse } from "~/models/ApiResponse";
import type { loginResultDTo } from "~/models/auth/loginResultDTo";
import type { RegisterCommandDTo } from "~/models/auth/registerDTo";
import { FetchApi } from "~/utilities/CustomFetchApi";

export function RegisterUser(command: RegisterCommandDTo): Promise<ApiResponse<null>> {
  return FetchApi("/Auth/register", {
    method: "Post",
    body: command,
  });
}
export function Login(phoneNumber:string,password:string): Promise<ApiResponse<loginResultDTo>> {
  return FetchApi("/Auth/login", {
    method: "Post",
    body: {
        phoneNumber:phoneNumber,
        password:password,
    },
  });
}
