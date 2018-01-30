<template>
  <el-main>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="昵称">
        <el-input v-model="formInline.nick_name" placeholder="模糊查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border highlight-current-row>
      <el-table-column prop="id" label="用户id">
      </el-table-column>
      <el-table-column prop="openid" label="openid">
      </el-table-column>
      <el-table-column prop="nick_name" label="nick_name">
      </el-table-column>
      <el-table-column label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar_url" height="100" width="100"  />
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="create_time">
      </el-table-column>
      <!-- <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, tableData,scope.row)" type="text" size="small">
            删除
          </el-button>
        </template>
      </el-table-column> -->
    </el-table>
  </el-main>
</template>

  <script>
export default {
  data() {
    return {
      tableData: [],
      formInline: {
        nick_name: ""
      }
    };
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http.get(global.host + "/showUsers").then(
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
      this.$http.post(global.host + "/showUsers", data).then(
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
