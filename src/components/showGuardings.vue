<template>
  <el-main>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="buy_user_id">
        <el-input v-model="formInline.user_id" placeholder="buy_user_id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border highlight-current-row>
      <el-table-column prop="id" label="愿望id">
      </el-table-column>
      <el-table-column prop="status" label="状态：1守护中2守护失效3未领取">
      </el-table-column>
      <el-table-column prop="buy_user_id" label="购买人id">
      </el-table-column>
      <el-table-column prop="receive_user_id" label="接收人id">
      </el-table-column>
      <el-table-column prop="buy_time" label="购买时间">
      </el-table-column>
      <el-table-column prop="receive_time" label="接收时间">
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
        user_id: ""
      },
      options: []
    };
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http.get(global.host + "/showGuardings").then(
        successCallback => {
          console.log(successCallback.body);
          this.$data.tableData = successCallback.body.data;
        },
        errorCallback => {
          console.log(errorCallback.body);
        }
      );
    },
    onSubmit() {
      var data = {};
      data = this.$data.formInline;
      this.$http.post(global.host + "/showGuardings", data).then(
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
        .post(global.host + "/deleteGuardingById", {
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
