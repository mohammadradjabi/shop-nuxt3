<template>
  <div>
    <Head>
      <Title>ثبت نام</Title>
    </Head>
    <div class="auth-container">
      <div class="auth-title mb-3">ورود به حساب</div>
      <div class="auth-box ui-box">
        <Form
          @submit="loginUser"
          :validation-schema="loginSchema"
          class="auth-form"
          v-slot="{ meta }"
        >
          <base-input
            name="phoneNumber"
            placeholder="ایمیل خود را وارد کنید"
            label="شماره تلفن"
            v-model="loginData.phoneNumber"
            class="my-3"
          ></base-input>
          <base-input
            name="password"
            type="password"
            placeholder="کلمه عبور را وارد کنید"
            label="کلمه عبور"
            v-model="loginData.password"
            class="my-3"
          ></base-input>
          <div class="form-element-row mb-3">
            <base-button
              w-full
              :disabled="meta.valid == false || loading"
              :loading="loading"
              >ورود به حساب</base-button
            >
          </div>
          <div class="form-element-row">
            <span
              >حساب کاربری ندارید؟
              <nuxt-link to="/auth/register">ثبت نام</nuxt-link></span
            >
          </div>
          <div class="form-element-row">
            <div>
              با ورود و یا ثبت نام در سایت شما
              <a href="#" class="link">شرایط و قوانین</a> استفاده از تمام سرویس
              های سایت و <a href="#" class="link">قوانین حریم خصوصی</a> آن را
              می‌پذیرید.
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import * as Yup from "yup";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

import { Login } from "~/services/auth.service";
definePageMeta({
  layout: "auth",
});
const loading = ref(false);
const loginData = reactive({
  phoneNumber: "",
  password: "",
});
const loginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required("شماره تلفن وارد شود")
    .min(11, "شماره تلفن نامعتبر است")
    .max(11, "شماره تلفن نامعتبر است"),
  password: Yup.string().required().min(7),
});
const router=useRouter()
const loginUser = async (data,formEvent) => {
  loading.value=true
  var result=await Login(loginData.phoneNumber,loginData.password);
  loading.value=false
  if (result.isSuccess) {
    localStorage.setItem("authData",JSON.stringify(result.data))
   await router.push("/")
  }else{
   formEvent.setFieldError("phoneNumber","کاربری با مشخصات وارد شده یافت نشد")

 }
};
</script>

<style scoped></style>
