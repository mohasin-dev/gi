<template>
    <v-container :fluid="true">
        <v-row>
            <v-col cols="12" md="6">
                <div class="login-left mt-7 px-md-10 px-sm-10 px-xs-5 pt-12">
                    <v-card width="90%" class="mx-auto" style="box-shadow: none;">
                        <v-card-text>
                            <div class="top-logo d-flex align-center mb-4">
                                <h2>Sign In To</h2>
                                <div class="logo">
                                    <img src="/images/tech-core1.png" alt="Tech Core">
                                </div>    
                            </div>
                            <div class="form-login">
                                
                                <h4 class="field-label">Email Address</h4>
                                <v-text-field
                                    placeholder="Enter Email"
                                    class="field-text"
                                    persistent-hint
                                    variant="outlined"
                                ></v-text-field>
                                <h4 class="field-label">Password</h4>
                                <v-text-field
                                    type="password"
                                    placeholder="Password"
                                    class="field-text"
                                    persistent-hint
                                    variant="outlined"
                                ></v-text-field>
                                <v-container>
                                    <v-row style="margin: 0;" class="align-center">
                                        <v-col col="6">
                                            <div class="d-flex">
                                                <div class="remember-me">
                                                    <input type="checkbox" checked id="checkbox" />
                                                    <label for="checkbox"></label>
                                                </div>
                                                <p class="ml-4" style="color:#3a3535;">Remember Me</p>
                                            </div>
                                            
                                        </v-col>
                                        <v-col class="text-end" col="6">
                                            <v-btn class="select-all-btn" variant="plain">Forget Password?</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                                <div class="recapcha-section mt-3 mb-8">
                                    <vue-recaptcha
                                        sitekey="6LfltW4jAAAAAOtZQT3ah1ZH_7SvGZVjrdeAdLpo"
                                        ref="recaptcha" @verify="onVerify" @expired="onExpired"   
                                    >
                                    </vue-recaptcha>
                                    <!-- <button @click="resetRecaptcha">Reset ReCAPTCHA</button> -->
                                </div>
                                <div class="submit-btn mt-5">
                                    <div class="d-flex">
                                        <v-btn
                                        class="sign-in-btn"
                                        :rounded="0"
                                        color="primary"
                                        >
                                        Sign In
                                        </v-btn>
                                        <v-btn
                                        href="/register"
                                        class="register-btn ml-5"
                                        :rounded="0"
                                        color="primary"
                                        >
                                        Register
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                    
                </div>

            </v-col>
            <v-col cols="12" md="6" style="padding:0!important">
                <div class="d-flex login-right" style="align-items: center;height: 100%;justify-content: center;">
                    <div class="logo-powered-by text-uppercase" style="position: relative;">
                        <p class="powerby-text">powerd by</p>
                        <div class=" d-flex">
                            <div class="company-text">gi  </div>
                        
                            <div class="company-slogan-text ml-2 pl-md-6 pl-sm-6 pl-xs-2 "> 
                                <div class="top-divider" sy></div>
                                responsible <br> contractor <br> portal
                            </div>   
                        </div>
                    
                    </div>
                </div>
               
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            onSubmit: function () {
            this.$refs.invisibleRecaptcha.execute()
            },
            onVerify: function (response) {
            console.log('Verify: ' + response)
            },
            onExpired: function () {
            console.log('Expired')
            },
            resetRecaptcha() {
            this.$refs.recaptcha.reset() // Direct call reset method
            },
        },
    }
</script>
<style>
    body{
        height: 100vh;
    }
    #app,.v-container,.v-row{
        height: 100%;
    }
    .v-container{
        padding: 0 !important;;
    }
</style>
