<template>
  <el-main>
    <el-form ref="form" :model="form" :rules="rules" class="demo-ruleForm">
      <el-form-item label="name" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="price（单位分）" prop="price">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="img" prop="img">
        <el-input v-model="form.img"></el-input>
      </el-form-item>
      <el-form-item label="description" prop="description">
        <el-input v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="valid_time" prop="valid_time">
        <el-input v-model="form.valid_time"></el-input>
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
        id:"",
        name: "",
        description: "",
        img: "",
        valid_time: "",
        price: ""
      },
      rules: {
        description: [
          { required: true, message: "请选择description", trigger: "blur" }
        ],
        name: [{ required: true, message: "请填写name", trigger: "blur" }],
        price: [{ required: true, message: "请填写price", trigger: "blur" }],
        img: [{ required: true, message: "请填写img", trigger: "blur" }],
        valid_time: [
          { required: true, message: "请填写valid_time", trigger: "blur" }
        ]
      }
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
          var data = {};
          data = this.$data.form;
          this.$http.post(global.host + "/createWishingCard", data).then(
            successCallback => {
              this.$message({
                type: "success",
                message: "添加成功!"
              });
              this.$router.push({ path: "/showWishingCards" });
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
      var data = {'id':this.$route.params.id};
      this.$http.post(global.host + "/getWishingCardById",data).then(
        successCallback => {
          var result = successCallback.body.data
          if(result){
            this.$data.form.id = result.id;
            this.$data.form.name = result.name;
            this.$data.form.description = result.description;
            this.$data.form.img = result.img;
            this.$data.form.valid_time = result.valid_time;
            this.$data.form.price = result.price;
          }
        },
        errorCallback => {
          console.log(errorCallback.body);
        }
      );
    }
  }
};
</script>