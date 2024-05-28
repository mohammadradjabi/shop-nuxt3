import type { ApiResponse } from "~/models/ApiResponse";
import type { UserDTo } from "~/models/users/userDTo";
import { FetchApi } from "~/utilities/CustomFetchApi";

export const getCurrentUser=():Promise<ApiResponse<UserDTo>>=>{
    return FetchApi("/users/current")
}
