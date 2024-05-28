import { defineStore } from "pinia";
import { AppStatusCode } from "~/models/ApiResponse";
import type { loginResultDTo } from "~/models/auth/loginResultDTo";
import type { UserDTo } from "~/models/users/userDTo";
import { getCurrentUser } from "~/services/user.service";
export const useAuthStore = defineStore("auth", () => {
  const loginResult: Ref<loginResultDTo | null> = ref(null);
  const currentUser: Ref<UserDTo | null> = ref(null);
  const loading = ref(false);
  const isLogin = computed(() => {
    loginResult.value != null;
  });
  const setCurrentUserValue = async (logindata: loginResultDTo) => {
    const localStorageData = localStorage.getItem("auth-data");
    if (!localStorageData) {
      return;
    }
    const loginData = JSON.parse(localStorageData);
    loginResult.value = logindata;
    loading.value = true;
    var result = await getCurrentUser();
    if (result.isSuccess) {
      currentUser.value = result.data;
    } else if (result.metaData.appStatusCode == AppStatusCode.UnAuthorize) {
      loginResult.value = null;
      localStorage.removeItem("auth-data");
    }
    loading.value = false;
    return { currentUser, loading, isLogin, loginResult, setCurrentUserValue };
  };
});
