<template>
  <div class="my-upload">

    <el-upload
      ref="upload"
      :auto-upload="false"
      class="upload-demo"
      :action="uploadPath"
      :limit="10"
      name="file"
      :drag="true"
      :multiple="true"
      :on-change="change"
      :file-list="fileList"
      list-type="picture">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击选择</em></div>
    </el-upload>
  </div>


</template>

<script>
  export default {
    name: 'my-upload',
    data() {
      return {
        fileList: []
      }
    },
    props:['uploadPath'],
    mounted() {

    },
    methods: {
      clearFiles(){
        this.$refs.upload.clearFiles();
      },
      submit(){
        this.$refs.upload.submit();
      },
      change(res) {
        var that = this;
        // console.log(res);
        if (!res.response) {
          return; //不是上传返回没有response
        }
        this.$emit('upload-response',res.response);
        /*if (res.response.hasOwnProperty('uploadResult')) {
          if (res.response.uploadResult == 'success') {
            this.$message({
              message: '上传成功',
              type: 'success'
            })

          } else if (res.response.uploadResult == 'warning') {
            this.$message({
              message: res.response.msg,
              type: 'warning'
            })
            this.$refs.upload.clearFiles()
          } else {
            this.$message({
              message: res.response.msg,
              type: 'error'
            })
            this.$refs.upload.clearFiles()
          }
        } else {
          this.$message({
            message: '后台返回错误',
            type: 'error'
          })
        }*/
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row {
    padding-top: 10px;
  }
</style>
<style>
  .el-upload-list--picture .el-upload-list__item {
    width: 90%;
  }
</style>
