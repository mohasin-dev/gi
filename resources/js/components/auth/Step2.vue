<template>
    <div class="container">                                                                 
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
            <div class="step2-section">
                <div class="form-title d-flex">
                    <h5>Personal Information</h5>
                    <div style="width: 68%;" class="title-bottom-bar"></div>
                </div>
                <div class="form-container step2-form mt-4">
                
                    <v-form v-model="valid">
                        <v-container>
                            <v-row class="align-end">
                                <v-col
                                cols="12"
                                md="6"
                                sm="6"
                                >
                                    <v-text-field
                                        v-model="firstName"
                                        required
                                    >
                                        <template #label>
                                            First Name  <span style="padding-left:5px;color:red;"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-col>

                                <v-col
                                cols="12"
                                md="6"
                                sm="6"
                                >
                                    <v-text-field
                                        v-model="lastName"
                                        :counter="10"
                                        required
                                    > 
                                        <template #label>
                                            Last Name  <span style="padding-left:5px;color:red;"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                <v-col
                                cols="12"
                                md="6"
                                sm="6"
                                >
                                    <v-text-field
                                        v-model="company"
                                        :counter="10"
                                        required
                                    > 
                                        <template #label>
                                            Company  <span style="padding-left:5px;color:red;"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                <v-col
                                cols="12"
                                md="6"
                                sm="6"
                                >
                                    <v-text-field
                                        v-model="title"
                                        :counter="10"
                                        required
                                    > 
                                        <template #label>
                                            Title  <span style="padding-left:5px;color:red;"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                <v-col
                                cols="12"
                                md="12"
                               
                                >
                                    <v-text-field
                                        v-model="address1"
                                        :counter="10"
                                        required
                                    > 
                                        <template #label>
                                            Address 1  <span style="padding-left:5px;color:red;"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-col>

                                <v-col
                                cols="12"
                                md="12"

                                >
                                    <v-text-field
                                        v-model="address2"
                                        :counter="10"
                                        required
                                    > 
                                        <template #label>
                                            Address 2  <span style="padding-left:5px;color:red;"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                <v-col
                                cols="12"
                                md="6"
                                sm="4"
                                >
                                    <v-text-field
                                        v-model="city"
                                        :counter="10"
                                        required
                                    > 
                                        <template #label>
                                            City  <span style="padding-left:5px;color:red;"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                <v-col 
                                cols="12"
                                md="3"
                                sm="4">
                                    <v-select
                                    class="state-field"
                                    :items="states"
                                    label="State"
                                    density="compact"
                                    ></v-select>
                                    <!-- <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select> -->
                                </v-col>
                                <v-col
                                cols="12"
                                md="3"
                                sm="4"
                                >
                                    <v-text-field
                                        v-model="zip"
                                        :counter="10"
                                        required
                                    > 
                                        <template #label>
                                            Zip  <span style="padding-left:5px;color:red;"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                <v-col
                                cols="12"
                                md="6"
                                sm="6"
                                >
                                    <v-text-field
                                        v-model="phone"
                                        :counter="10"
                                        required
                                    > 
                                        <template #label>
                                            Phone  <span style="padding-left:5px;color:red;"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                <v-col
                                cols="12"
                                md="6"
                                sm="6"
                                >
                                    <v-text-field
                                        v-model="website"
                                        :counter="10"
                                        required
                                    > 
                                        <template #label>
                                            Website  <span style="padding-left:5px;color:red;"><strong>* </strong></span>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                
                               
                               
                                <v-col
                                class="text-start"
                                cols="6"
                                >
                                    <v-btn
                                    class="back-button"
                                    color="blue-grey"
                                    href="/register"
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
                                    href="/register/step3"
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
        name:"step2",
        data () {
            return {
                step:2,
               
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
