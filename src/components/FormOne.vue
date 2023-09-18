<template>
  <div></div>

  <div>
    <form action="">
      <el-form-item label="姓名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Resources" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio label="0">男</el-radio> <el-radio label="1">女</el-radio>>
        </el-radio-group>
      </el-form-item>

      图 像 ：<input
        type="file"
        ref="fileInput"
        @change="handleFileUpload"
        hidden
      />
      <img
        :src="imageUrl"
        v-if="imageUrl"
        @click="triggerFileInput"
      /><br /><br /><br /><br />
      <el-form-item label="昵称">
        <el-input v-model="form.nick" />
      </el-form-item>
      <el-form-item label="生日">
        <el-date-picker
          v-model="form.birthdata"
          type="date"
          placeholder="Pick a day"
          :size="size"
        />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.emails" />
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.iphone" />
      </el-form-item>
      <el-form-item label="入职日期">
        <el-date-picker
          v-model="form.indate"
          type="date"
          placeholder="Pick a day"
          :size="size"
        />
      </el-form-item>
      <el-form-item label="个人介绍" prop="desc">
        <el-input type="textarea" v-model="form.mydes" />
      </el-form-item>
      <el-button
        type="primary"
        @click="submitForm(ruleFormRef)"
        style="margin-left: 15vw"
      >
        提交
      </el-button>
    </form>
  </div>
  <router-view />
</template>

<script setup>
import { ref } from "vue";
import { getForm, getImges } from "@/api/http";
import { ElMessage } from "element-plus";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
console.log(route.query.img, "---------------");
const size = ref("default");

const fileInput = ref(null);
const imageUrl = ref("http://47.94.4.201" + route.query.img);
const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};
console.log();
// biaodan
const form = ref({
  name: "",
  sex: "",
  iphone: "",
  userid: 11110,
  img: imageUrl.value,
  nick: "",
  birthdata: "",
  strcity: "1",
  emails: "",
  indate: "",
  mydes: "",
});

async function submitForm() {
  let img = null;
  await getImges(imageUrl.value).then((res) => {
    console.log(res);
    img = "http://47.94.4.201" + res.data.url;
  });
  let sun = {
    name: form.value.name,
    sex: form.value.sex,
    userid: new Date().getTime().toString().substring(8, 12),
    birthdata: dateFun(form.value.birthdata),
    indate: dateFun(form.value.indate),
    nick: form.value.nick,
    emails: form.value.nick,
    iphone: form.value.iphone,
    mydes: form.value.mydes,
    img: img,
  };
  getForm(sun).then((res) => {
    console.log(res);
    console.log(res.code);
    if (res.code === 0) {
      ElMessage(res.msg + "即将跳转...");

      router.push({
        name: "formTo",
        query: {
          img: img,
        },
      });
    }
  });
}
function dateFun() {
  let date = new Date();
  let a1 = date.getFullYear();
  let b = date.getMonth() + 1;
  let c = date.getDate();
  let d = date.getHours().toString().padStart(2, "0");
  let e = date.getMinutes().toString().padStart(2, "0");
  let f = date.getSeconds().toString().padStart(2, "0");
  let tmp = `${a1}-${b}-${c}-${d}:${e}:${f}`;

  return tmp;
}
</script>

<style  scoped>
form {
  text-align: left;
  width: 30%;
  margin: 50px auto;
}
img {
  width: 100px;

  transform: translate(4px, 46px);
}
</style>