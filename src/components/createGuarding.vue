<template>
  <el-main>
    <el-form ref="form" :model="form" class="demo-ruleForm">
      <el-form-item label="buy_user_id" prop="buy_user_id">
        <el-input v-model="form.buy_user_id"></el-input>
      </el-form-item>
      <el-form-item label="选择御守牌" prop="wishing_card_id">
      <el-select v-model="form.guarding_card_id" placeholder="请选择许愿牌">
        <el-option v-for="item in options_card" :key="item.id" :label="item.name" :value="item.id">
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
        buy_user_id: "",
        guarding_card_id: ""
      },
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
      this.$http.post(global.host + "/guard", data).then(
        successCallback => {
          this.$message({
            type: "success",
            message: "创建成功!"
          });
          console.log(successCallback);
          this.$router.push({ path: "/showGuardings" });
        },
        errorCallback => {
          console.log(errorCallback);
        }
      );
    },
    fetchData() {
      this.$http.get(global.host + "/showGuardingCards").then(
        successCallback => {
          this.$data.options_card = successCallback.body.data;
        },
        errorCallback => {
          console.log(errorCallback.body);
        }
      );
    }
  }
};
</script>