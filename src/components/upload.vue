<template>
<el-upload
  class="upload-demo"
  action="https://wepic.dtxn.net/api/v1/anonymous/images/"
  :on-preview="handlePreview"
  :on-success="handleSuccess"
  multiple
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</template>
<script>
  export default {
    data() {
      return {
        fileList: []
      }
    },
    methods: {
      handleSuccess(response,file,fileList) {
        if(response.status==200){
          var newfile = {};
          newfile.name = file.name;
          newfile.url = "http://wxxcx-cdn.dtxn.net"+response.data;
          fileList.push(newfile);
        }
      }
    }
  }
</script>
