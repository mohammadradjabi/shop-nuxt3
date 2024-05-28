import { useAuthStore } from "./../stores/authStore";
import { AppStatusCode, type ApiResponse } from "./../models/ApiResponse";
import type { FetchError, FetchOptions } from "ofetch";
export async function FetchApi<T>(
  url: string,
  config: FetchOptions = {}
): Promise<ApiResponse<T>> {
  config = {
    baseURL: "https://shop-api.codeyad-project.ir/api",
    ...config,
  };
  const authStore = useAuthStore();
if (!config.headers) {
    config.headers={}
}
  if (authStore && authStore.isLogin) {
    var loginData = authStore.loginResult;
    console.log(loginData);
    config.headers["Authorization"] = `Bearer ${loginData.token}`;
    
  }
  return $fetch<ApiResponse<T>>(url, config)
    .then((res) => {
      return res;
    })
    .catch((e: FetchError) => {
      return {
        data: null,
        isSuccess: false,
        metaData: {
          appStatusCode: AppStatusCode.ServerError,
          message: e.response?._data?.MetaData ?? "مشکلی در عملیات رخ داده",
        },
      };
    });
}
