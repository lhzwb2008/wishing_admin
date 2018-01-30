<template>
  <el-main>
    <el-form ref="form" :model="form" :rules="rules" class="demo-ruleForm">
      <el-form-item label="name" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="status（0免费1收费）" prop="status">
        <el-input v-model="form.status"></el-input>
      </el-form-item>
      <el-form-item label="description" prop="description">
        <el-input v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="关联许愿牌" prop="wishing_card_ids">
      <el-checkbox-group v-model="form.wishing_card_ids">
        <el-checkbox v-for="item in options" :label="item.id">{{item.name}}</el-checkbox>
      </el-checkbox-group>
      </el-form-item>
      <el-form-item label="img_bg" prop="img_bg">
        <el-input v-model="form.img_bg"></el-input>
      </el-form-item>
      <el-form-item label="img_cover" prop="img_cover">
        <el-input v-model="form.img_cover"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        description: "",
        img_bg: "",
        img_cover: "",
        wishing_card_ids: [""]
      },
      rules: {
        description: [
          { required: true, message: "请填写description", trigger: "blur" }
        ],
        name: [{ required: true, message: "请填写name", trigger: "blur" }],
        status: [{ required: true, message: "请填写status", trigger: "blur" }],
        img_bg: [{ required: true, message: "请填写img_bg", trigger: "blur" }],
        img_cover: [
          { required: true, message: "请填写img_cover", trigger: "blur" }
        ],
        wishing_card_ids: [
          { required: true, message: "请关联许愿牌", trigger: "blur" }
        ]
      },
      options: [""]
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    onSubmit() {
      this.$refs["form"].validate(valid => {
        console.log(valid);
        if (valid) {
          console.log("submit!!");
          var data = {};
          data = this.$data.form;
          this.$http.post(global.host + "/createWishingPool", data).then(
            successCallback => {
              this.$message({
                type: "success",
                message: "创建成功!"
              });
              console.log(successCallback);
              this.$router.push({ path: "/showWishingPools" });
            },
            errorCallback => {
              console.log(errorCallback);
            }
          );
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    fetchData() {
      this.$http.get(global.host + "/showWishingCards").then(
        successCallback => {
          this.$data.options = successCallback.body.data;
        },
        errorCallback => {
          console.log(errorCallback.body);
        }
      );
    }
  }
};
</script>