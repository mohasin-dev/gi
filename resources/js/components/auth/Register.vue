<template>
    <div class="container">   
        <div class="top-logo-section">
            <div class="top-logo d-flex justify-center align-center">
                <div class="logo-powered-by text-uppercase">
                    <p class="powerby-text">powerd by</p>
                    <div class=" d-flex">
                        <div class="company-text">gi  </div>
                    
                        <div class="company-slogan-text"> 
                            <div class="top-divider"></div>
                            responsible <br> contractor <br> portal</div>   
                    </div>
                
                </div>
                <div class="logo">
                    <img src="/images/tech-core1.png" alt="Tech Core">
                </div>
            </div>
        </div>                                                              
        
        <div class="step-container mb-5">
            <div class="d-flex justify-center">
                <div class="step-reg" :class="step == 1 ? 'step-active' : ''" :style="'opacity:'+ (step >= 1 ? 1 : 0.4)">
                    <p>Step 1</p> 
                    <p>Account Basics</p>  
                </div>
                <div class="step-reg" :class="step == 2 ? 'step-active' : ''" :style="'opacity:'+ (step >= 2 ? 1 : 0.4)">
                    <p>Step 2</p>
                    <p>Personal Information</p>
                </div>
                <div class="step-reg" :class="step == 3 ? 'step-active' : ''" :style="'opacity:'+ (step >= 3 ? 1 : 0.4)">
                    <p>Step 3</p>
                    <p>Markets</p>
                </div>
                <div class="step-reg" :class="step == 4 ? 'step-active' : ''" :style="'opacity:'+ (step == 4 ? 1 : 0.4)">
                    <p>Step 4</p>
                    <p>Agreements</p>
                </div>
            </div>
        </div>
        <div class="form-section">
            <div class="step1-section">
                <div class="form-title d-flex">
                    <h5>Account Basic</h5>
                    <div style="width: 78%;" class="title-bottom-bar"></div>
                </div>
                <div class="form-container mt-4">
                
                    <v-form v-model="valid">
                        <v-container>
                            <v-row>
                                <v-col
                                cols="12"
                                md="6"
                                sm="6"
                                >
                                    <v-text-field
                                        v-model="email"
                                        required
                                    >
                                        <template #label>
                                            Email  <span style="padding-left:5px;color:red;"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-col>

                                <v-col
                                cols="12"
                                md="6"
                                sm="6"
                                >
                                    <v-text-field
                                        v-model="userName"
                                        :counter="10"
                                        required
                                    > 
                                        <template #label>
                                            User Name  <span style="padding-left:5px;color:red;"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-col>

                                <v-col
                                cols="12"
                                md="6"
                                sm="6"
                                >
                                    <v-text-field
                                    class="eye-show"
                                    v-model="password"
                                    :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="passwordShow ? 'text' : 'password'"
                                    @click:append="passwordShow = !passwordShow"
                                    >
                                        <template #label>
                                            Password  <span style="padding-left:5px;color:red;"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                <v-col
                                cols="12"
                                md="6"
                                sm="6"
                                >
                                    <v-text-field
                                    class="eye-show"
                                    v-model="confirmPassword"
                                    :append-icon="passwordShow2 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="passwordShow2 ? 'text' : 'password'"
                                    @click:append="passwordShow2 = !passwordShow2"
                                    
                                    >
                                        <template #label>
                                            Confirm Password  <span style="padding-left:5px;color:red;"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                <v-col
                                cols="12"
                                md="6"
                                sm="6"
                                >
                                    <vue-recaptcha
                                    class="g_h_capt"
                                        sitekey="6LfltW4jAAAAAOtZQT3ah1ZH_7SvGZVjrdeAdLpo"
                                        ref="recaptcha" @verify="onVerify" @expired="onExpired"   
                                    >
                                    </vue-recaptcha>
                                </v-col>
                                <v-col
                                class="already-acount"
                                cols="12"
                                md="6"
                               
                                >
                                    <p>Already have a account ?</p>
                                    <a href="#">Sign in here</a>
                                </v-col>
                                <v-col
                                class="text-start"
                                cols="6"
                                >
                                    <v-btn
                                    href="/"
                                    class="back-button"
                                    color="blue-grey"
                                    @click=""
                                    >
                                        Back
                                    </v-btn>
                                </v-col>
                                <v-col
                                class="text-end"
                                cols="6"
                                >
                                    <v-btn
                                    class="next-button"
                                    color="blue-grey"
                                    href="/register/step2"
                                    >
                                        Next
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>

                    
                    
                </div>
            </div>
           
        </div>
       
    </div>

</template>

<script>
    export default {
        name:"register",
        data () {
            return {
                step:1,
               
                valid: false,
                recaptcha: '',
                passwordShow: false,
                passwordShow2: true,
                email: '',
                userName:'',
                password: '',
                confirmPassword:''
            
            }
        },
        computed: {
            image() {
                return `/images/tech-core1.png`;
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            
            
            validate () {
                this.$refs.form.validate()
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
            onCaptchaVerified: function (recaptchaToken) {
                this.recaptcha = recaptchaToken
                // this.validateCaptcha = true
            },
            onCaptchaExpired: function () {
            this.$refs.recaptcha.reset();
            },
        }
    }
</script>
