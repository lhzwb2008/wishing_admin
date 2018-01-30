<template>
  <el-main>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="user_id">
        <el-input v-model="formInline.user_id" placeholder="填写user_id"></el-input>
      </el-form-item>
      <el-form-item label="许愿池">
        <el-select v-model="formInline.wishing_pool_id" placeholder="选择许愿池">
          <el-option v-for="item in options" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border highlight-current-row>
      <el-table-column prop="id" label="愿望id">
      </el-table-column>
      <el-table-column prop="content" label="愿望内容">
      </el-table-column>
      <el-table-column prop="user_id" label="许愿人id">
      </el-table-column>
      <el-table-column prop="blessing_user_ids" label="祝福人ids">
      </el-table-column>
      <el-table-column prop="blessing_count" label="祝福人数">
      </el-table-column>
      <el-table-column prop="wishing_pool_id" label="许愿池id">
      </el-table-column>
      <el-table-column prop="wishing_card_id" label="许愿牌id">
      </el-table-column>
      <el-table-column prop="create_time" label="create_time">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, tableData,scope.row)" type="text" size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

  <script>
export default {
  data() {
    return {
      tableData: [],
      formInline: {
        user_id: "",
        wishing_pool_id: ""
      },
      options: [""]
    };
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http.get(global.host + "/showWishings").then(
        successCallback => {
          console.log(successCallback.body);
          this.$data.tableData = successCallback.body.data;
        },
        errorCallback => {
          console.log(errorCallback.body);
        }
      );
      this.$http.get(global.host + "/getWishingPools").then(
        successCallback => {
          this.$data.options = successCallback.body.data;
        },
        errorCallback => {
          console.log(errorCallback.body);
        }
      );
    },
    onSubmit() {
      var data = {};
      data = this.$data.formInline;
      this.$http.post(global.host + "/showWishings", data).then(
        successCallback => {
          this.$data.tableData = successCallback.body.data;
        },
        errorCallback => {
          console.log(errorCallback.body);
        }
      );
    },
    deleteRow(index, tableData, row) {
      tableData.splice(index, 1);
      this.$http
        .post(global.host + "/deleteWishingById", {
          id: row.id
        })
        .then(
          successCallback => {},
          errorCallback => {
            console.log(errorCallback.body);
          }
        );
    }
  }
};
</script>
