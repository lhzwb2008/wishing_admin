<template>
  <el-main>
    <el-form ref="form" :model="form" :rules="rules" class="demo-ruleForm">
      <el-form-item label="name" prop="name">
        <el-input v-model="form.name"></el-input>
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
        id:"",
        name: "",
        description: "",
        img_bg: "",
        img_cover: "",
        wishing_card_ids: []
      },
      rules: {
        description: [
          { required: true, message: "请填写description", trigger: "blur" }
        ],
        name: [{ required: true, message: "请填写name", trigger: "blur" }],
        img_bg: [{ required: true, message: "请填写img_bg", trigger: "blur" }],
        img_cover: [
          { required: true, message: "请填写img_cover", trigger: "blur" }
        ],
        wishing_card_ids: [
          { required: true, message: "请关联许愿牌", trigger: "blur" }
        ]
      },
      options: []
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
      var data = {'id':this.$route.params.id};
      this.$http.post(global.host + "/getWishingPoolById",data).then(
        successCallback => {
          var result = successCallback.body.data
          if(result){
            this.$data.form.id = result.id;
            this.$data.form.name = result.name;
            this.$data.form.description = result.description;
            this.$data.form.img_bg = result.img_bg;
            this.$data.form.img_cover = result.img_cover;
            this.$data.form.wishing_card_ids = result.wishing_card_ids.split(',');
           console.log(result.wishing_card_ids.split(','));
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