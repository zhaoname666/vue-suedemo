<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="addList">点击发送请求</el-button>
    {{ html }}
    <hr />
    <br /><br />

    <div>
      <input type="file" ref="fileInput" @change="handleFileUpload" hidden />
      <el-button @click="triggerFileInput">选择图片</el-button>
      <el-button type="primary" @click="addImges">上传</el-button><br />
      <div>{{ img }}</div>
      <hr />
      <img :src="imageUrl" v-if="imageUrl" />
    </div>
  </div>
</template>

<script  setup>
import { ref } from "vue";
import { getLogin, getImges } from "@/api/http";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import md5 from "js-md5";
const router = useRouter();
const fileInput = ref(null);
const imageUrl = ref("");
const img = ref("");
const html = ref("");

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
function addImges() {
  getImges(imageUrl.value).then((res) => {
    console.log(res);
    img.value = res.data;
    ElMessage("上传成功");
    router.push({ name: "form", query: { img: res.data.url } });
  });
}
function addList() {
  let res = md5("zhangsanxueshengnbsp123okabcz");
  getLogin({
    name: "zhangsan",
    role: "xuesheng",
    sign: res,
  }).then((res) => {
    console.log(res);
    html.value = res;
    ElMessage(res.msg);
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
