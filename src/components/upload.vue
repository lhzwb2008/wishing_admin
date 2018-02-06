<template>
  <el-main>
    <el-upload action="https://wepic.dtxn.net/api/v1/anonymous/images/" list-type="picture-card" :on-preview="handlePictureCardPreview">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      {{dialogImageUrl}}
    </el-dialog>
  </el-main>
</template>

<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handlePictureCardPreview(file) {
        this.dialogImageUrl = 'http://wxxcx-cdn.dtxn.net'+file.response.data;
        this.dialogVisible = true;
      }
    }
  }
</script>
