import { useAuthStore } from "~/stores/authStore";
export default defineNuxtPlugin((nuxtApp) => {
  //Doing something with
  console.log("object");
  const authStore = useAuthStore();
});
