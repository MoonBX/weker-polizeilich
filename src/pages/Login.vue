<template>
  <div class="login">
    <div class="top">

    </div>
    <div class="bottom">
      <div class="login-box">
        <v-form direction="horizontal"
                :model="model"
                :rules="rules"
                ref="loginForm">
          <v-form-item label=""
                       :label-col="labelCol"
                       :wrapper-col="wrapperCol"
                       prop="name" has-feedback>
            <v-input placeholder="请输入账号" size="large"
                     v-model="model.username">
            </v-input>
          </v-form-item>
          <v-form-item label=""
                       :label-col="labelCol"
                       :wrapper-col="wrapperCol"
                       prop="name" has-feedback>
            <v-input placeholder="请输入密码"
                     type="password" size="large"
                     v-model="model.password">
            </v-input>
          </v-form-item>
          <v-button class="m-b-sm m-r-sm"
                    size="large"
                    type="primary" @click="login"
                    html-type="button" style="width: 100%">
            登&nbsp;&nbsp;&nbsp;录
          </v-button>

        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../fetch/api'
  import md5 from 'js-md5'
  export default {
    name: "login",
    data(){
      return{
        model: {
          username: "",
          password: "",
          clientType: 1
        },
        labelCol: { span: 0 },
        wrapperCol: { span: 24 },
      }
    },
    methods: {
      login(){
        this.model.password = md5(this.model.password);
        this.$router.push('/wk');
        // api.login(this.model).then(res => {
        //   console.log(res);
        //   if(res.success){
        //     localStorage.policeToken = res.data.webToken;
        //     this.$router.push('/wk');
        //   }else{
        //     this.$notification.error({
        //       message: res.message,
        //       duration: 2
        //     });
        //   }
        //
        // })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login{
    .top{
      background: url('../assets/login_bg.png') no-repeat center center;
      width: 100vw;
      height: 40vh;
    }
    .bottom{
      width: 100vw;
      height: 60vh;

      .login-box{
        position: relative;
        top: -49px;
        background: #ffffff;
        width: 460px;
        height: 256px;
        margin: 0 auto;
        padding: 60px 80px;
        border: 1px solid rgba(29,139,247,0.3);
        box-shadow: 3px 3px 5px rgba(0,0,0,0.07), -3px -3px 5px rgba(0,0,0,0.07);
      }
    }
  }
</style>
