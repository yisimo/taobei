<template>
  <section class="login-form">
    <div class="g-form">
      <section class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入邮箱">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </section>

      <section class="g-form-line">
        <span class="g-form-label">设定密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入6-8位密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </section>

      <section class="g-form-line">
        <span class="g-form-label">确认密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordComModel" placeholder="请确认密码">
        </div>
        <span class="g-form-error">{{ passwordComErrors.errorText }}</span>
      </section>

      <section class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">注册</a>
        </div>
      </section>

      <p class="error-text">{{ errorText }}</p>
    </div>
  </section>
</template>

<script>
  export default{
    data(){
      return{
        usernameModel:'',
        passwordModel:'',
        passwordComModel:'',
        errorText:''
      }
    },
    computed:{
      userErrors(){
        let errorText,status
        if(!/@/g.test(this.usernameModel)){
          status = false
          errorText = '格式不正确，没有包含@'
        }else{
          status = true
          errorText = ''
        }
        if(!this.userFlag){
          errorText = ''
          this.userFlag = true
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors(){
        let errorText,status
        if(!/^\w{6,8}$/g.test(this.passwordModel)){
          status = false
          errorText = "密码不是6-8位"
        }else{
          status = true
          errorText = ''
        }
        if(!this.passwordFlag){
          errorText = ''
          this.passwordFlag = true
        }
        return{
          status,
          errorText
        }
      },
      passwordComErrors(){
          let errorText,status
        if(this.passwordComModel.length < 1){
          errorText = ''
          this.passwordComFlag = true
        }else if(this.passwordComModel != this.passwordModel){
          status = false
          errorText = "密码与设定密码不一致，请重新输入"
        }else{
          status = true
          errorText = ""
        }

        return{
            status,
            errorText
        }
      }
    },
    methods:{
      onLogin(){
        if(!this.userErrors.status || !this.passwordErrors.status || !this.passwordComErrors){
          this.errorText = '部分选项未通过'
        }else{
          this.errorText = ''
          this.$http.get('api/login')
            .then((res) => {
              this.$emit('has-log', res.data)
            }, (error) => {
              console.log(error)
            })
        }
      }
    }
  }
</script>
