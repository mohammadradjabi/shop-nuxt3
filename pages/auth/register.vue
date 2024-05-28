<template>
  <div>
    <Head>
      <Title>ثبت نام</Title>
    </Head>
    <div class="auth-container">
      <div class="auth-title mb-3">ثبت نام</div>
      <div class="auth-box ui-box">
        <Form
          @submit="register"
          :validation-schema="registerSchema"
          class="auth-form"
          v-slot="{ meta }"
        >
          <base-input
            name="phoneNumber"
            placeholder="شماره تلفن خود را وارد کنید"
            label="شماره تلفن"
            v-model="registerData.phoneNumber"
            class="my-3"
          />
          <base-input
            name="password"
            type="password"
            placeholder="کلمه عبور را دوباره وارد کنید"
            v-model="registerData.password"
            :disabled="loading"
            label="کلمه عبور"
            class="my-3"
          />
          <base-input
            name="passwordConfirm"
            type="password"
            placeholder="کلمه عبور را وارد کنید"
            v-model="registerData.passwordConfirm"
            label="کلمه عبور"
            class="my-3"
          />
          <div class="form-element-row mb-3">
            <base-button
              type="submit"
              :disabled="meta.valid == false || loading"
              wFull
              :loading="loading"
              >ثبت نام</base-button
            >
          </div>
          <div class="form-element-row">
            <span
              >قبلا ثبت نام کرده اید؟
              <nuxt-link to="/auth/login">وارد شوید</nuxt-link></span
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
import { reactive, ref } from "vue";
import type { RegisterCommandDTo } from "~/models/auth/registerDTo";
import { RegisterUser } from "~/services/auth.service";
import * as Yup from "yup";
import { useRouter } from "vue-router";
definePageMeta({
  layout: "auth",
});
const loading = ref(false);
const registerSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required("شماره تلفن وارد شود")
    .min(11, "شماره تلفن نامعتبر است")
    .max(11, "شماره تلفن نامعتبر است"),
  password: Yup.string().required().min(7),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password")],
    "کلمه عبور مطابقت ندارد"
  ),
});
const registerData: RegisterCommandDTo = reactive({
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
});
const router = useRouter();
const register = async () => {
  loading.value = true;
  var result = await RegisterUser(registerData);
  loading.value = false;
  if (result.isSuccess) {
    router.push("/auth/login");
    //toast
  } else {
    //toast
    alert(result.metaData.message);
  }
};
</script>

<style scoped></style>
