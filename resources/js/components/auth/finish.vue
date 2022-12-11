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
        <div class="form-section mt-5">
            <div class="d-flex justify-center mb-10">
                <div class="step4-left">
                    <div class="d-flex leftnavbar-list">
                        <v-btn
                            height="18px"
                            width="18px"
                            color="success"
                            icon="mdi-check"
                        ></v-btn>
                        <p class="pl-3">Policy</p>
                    </div>
                    <div class="d-flex leftnavbar-list" >
                        <v-btn
                        height="18px"
                            width="18px"
                            color="success"
                            icon="mdi-check"
                        ></v-btn>
                        <p class="pl-3">Basic Compliance</p>
                    </div>
                    <div class="d-flex leftnavbar-list">
                        <v-btn
                        height="18px"
                            width="18px"
                            color="success"
                            icon="mdi-check"
                        ></v-btn>
                        <p class="pl-3">Certification Worksheet</p>
                    </div>
                    <div class="d-flex leftnavbar-list">
                        <v-btn
                            height="18px"
                            width="18px"
                            color="success"
                            icon="mdi-check"
                        ></v-btn>
                        <p class="pl-3">Sucess</p>
                    </div>
                </div>
            </div>
            <v-card class="mx-auto form-container success-step " width="90%">
                <v-card-text>
                    <h3 class="mb-6 text-center">Congratulations</h3>
                    <p class="mb-6 text-center">Your registration has been submitted successfully.</p>
                    <p class="mb-6">Check your email at email@email.com to confirm your address. Once you confirm,  you will be granted access to the system.
                        (This link in the email will expir in 72 hours.)
                    </p>
                    <p class="mb-6">If you do not receive an email, check your spam folder, or call john at (123) 123-1234.</p>
                    <div class="text-center">
                        <v-btn
                        class="next-button"
                        color="blue-grey"
                        href="/"
                        >
                            Return to Sign In Page
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </div>
       
    </div>

</template>

<script>
    export default {
        name:"finish",
        data () {
            return {
                step:4,
               
                valid: false,
                
            
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
            
            
            
        }
    }
</script>
