<template>
  <el-main>
    <el-form ref="form" :model="form" class="demo-ruleForm">
      <el-form-item label="user_id" prop="user_id">
        <el-input v-model="form.user_id"></el-input>
      </el-form-item>
      <el-form-item label="content" prop="content">
        <el-input v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="选择许愿牌" prop="wishing_card_id">
      <el-select v-model="form.wishing_card_id" placeholder="请选择许愿牌">
        <el-option v-for="item in options_card" :key="item.id" :label="item.name" :value="item.id">
        </el-option>
      </el-select>
      </el-form-item>
      <el-form-item label="选择许愿池" prop="wishing_pool_id">
      <el-select v-model="form.wishing_pool_id" placeholder="请选择许愿池">
        <el-option v-for="item in options_pool" :key="item.id" :label="item.name" :value="item.id">
        </el-option>
      </el-select>
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
        user_id: "",
        content: "",
        wishing_pool_id: "",
        wishing_card_id: ""
      },
      options_pool: [""],
      options_card: [""]
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    onSubmit() {
      var data = {};
      data = this.$data.form;
      this.$http.post(global.host + "/wish", data).then(
        successCallback => {
          this.$message({
            type: "success",
            message: "创建成功!"
          });
          console.log(successCallback);
          this.$router.push({ path: "/showWishings" });
        },
        errorCallback => {
          console.log(errorCallback);
        }
      );
    },
    fetchData() {
      this.$http.get(global.host + "/showWishingCards").then(
        successCallback => {
          this.$data.options_card = successCallback.body.data;
        },
        errorCallback => {
          console.log(errorCallback.body);
        }
      );
      this.$http.get(global.host + "/getWishingPools").then(
        successCallback => {
          this.$data.options_pool = successCallback.body.data;
        },
        errorCallback => {
          console.log(errorCallback.body);
        }
      );
    }
  }
};
</script>