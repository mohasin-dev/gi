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
        <div class="form-step4-section">
            <v-container>
                <v-row class="step4-container">
                    <v-col cols="12" md="3" class="step4-left">
                        <div class="d-flex leftnavbar-list" :class="subStep >= 1 ? '' :'no-active-list'">
                            <v-btn
                                height="18px"
                                width="18px"
                                color="success"
                                icon="mdi-check"
                            ></v-btn>
                            <p class="pl-3">Policy</p>
                        </div>
                        <div class="d-flex leftnavbar-list" :class="subStep >= 2 ? '' :'no-active-list'">
                            <v-btn
                            height="18px"
                                width="18px"
                                color="success"
                                icon="mdi-check"
                            ></v-btn>
                            <p class="pl-3">Basic Compliance</p>
                        </div>
                        <div class="d-flex leftnavbar-list" :class="subStep >= 3 ? '' :'no-active-list'">
                            <v-btn
                            height="18px"
                                width="18px"
                                color="success"
                                icon="mdi-check"
                            ></v-btn>
                            <p class="pl-3">Certification Worksheet</p>
                        </div>
                        <div class="d-flex leftnavbar-list" :class="subStep >= 4 ? '' :'no-active-list'">
                            <v-btn
                                height="18px"
                                width="18px"
                                color="success"
                                icon="mdi-check"
                            ></v-btn>
                            <p class="pl-3">Sucess</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="9" class="step4-right" :class="subStep == 1 ? 'show-section' : 'hide-section'">
                        <div class="step4-title">
                            <h3>Responsible Contractor Entry Survey - <span>Policy</span></h3>
                        </div>
                        <div class="step4-content-container">
                            <v-card
                            
                                class="overflow-y-auto"
                                max-height="400"
                            >
                                <v-card-text>
                                    <div class="policy-title1">
                                        <h3>Responsible Contractor Program & SDVBE Program</h3>
                                    </div>
                                    <div class="policy-title2">
                                        <h4>GI Contractor Central</h4>
                                    </div>

                                    <div class="policy-content">
                                        <span class="policy-title3">Purpose of website :</span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                    <div class="policy-content">
                                        <span class="policy-title3">Opportunities :</span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                    <div class="policy-title2">
                                        <h4>GI Contractor Central's SERVICE-DISABLED</h4>
                                    </div>
                                    <div class="policy-title2">
                                        <h4>VETERAN BUSINESS ENTERPRISE POLICY</h4>
                                    </div>
                                    <div class="policy-content">
                                        <p class="policy-title3">I.PURPOSE</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                                    </div>
                                    <div class="policy-content">
                                        <p class="policy-title3">II.INTRODUCTION</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                                    </div>
                                    <div class="policy-content">
                                        <p class="policy-title3">III.DIFINITION OF A SERVICE-DISABLED VETERAN BUSINESS ENTERPRISE</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                                    </div>
                                    <div class="policy-content">
                                        <p class="policy-title3">IV.DIFINITION OF A REPONSIBLE CONTRACTOR</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                                    </div>
                                    <div class="policy-content">
                                        <p class="policy-title3">V.STATEMENT OF POLICY</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                                    </div>
                                
                                    <div class="policy-title2">
                                        <h4>RESPONSIBLE CONTRACTOR PROGRAM</h4>
                                    </div>
                                    <div class="policy-content">
                                        <p class="policy-title3">VI.PURPOSE</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                                    </div>
                                    <div class="policy-content">
                                        <p class="policy-title3">VII.INTRODUCTION</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                                    </div>
                                    <div class="policy-content">
                                        <p class="policy-title3">VIII.DIFINITION OF A SERVICE-DISABLED VETERAN BUSINESS ENTERPRISE</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                                    </div>
                                </v-card-text>
                            </v-card>
                        </div>
                        <div class="policy-footer">
                            <v-radio-group
                                v-model="policyAgree"
                                column
                                >
                                    <v-radio
                                        label="I will not agree to work under the terms of the polices above."
                                        color="cus-color"
                                        value="no"
                                    ></v-radio>
                                    <v-radio
                                    label="I have read, understand and will agree to work under the terms of the polices above."
                                    color="cus-color"
                                    value="yes"
                                ></v-radio>
                            </v-radio-group>
                        </div>
                        <v-row>
                            <v-col
                                class="text-start"
                                cols="6"
                                >
                                    <v-btn
                                    class="back-button"
                                    color="blue-grey"
                                    href="/register/step3"
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
                                    @click="subStep++"
                                    >
                                        Next
                                    </v-btn>
                                </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="9" class="step4-right" :class="subStep == 2 ? 'show-section' : 'hide-section'">
                        <div class="step4-title">
                            <h3>Responsible Contractor Entry Survey - <span>Basic Compliance</span></h3>
                        </div>
                        <div class="step4-content-container">
                            <v-card
                            
                                class="overflow-y-auto"
                                max-height="400"
                            >
                                <v-card-text>
                                    <div class="question-title">
                                        <p>Please read and answer following questions below.</p>
                                    </div>
                                <div class="question-block d-flex justify-space-between">
                                        <p>I read responsible contractor program policy :</p>
                                        <div >
                                        <v-radio-group inline>
                                            <v-radio height="20px" width="20px" label="Yes" value="1"></v-radio>
                                            <v-radio label="No" value="0"></v-radio>
                                        </v-radio-group>
                                        </div>
                                </div>  
                                </v-card-text>
                            </v-card>
                        </div>
                        
                        <v-row class="mt-6">
                            <v-col
                                class="text-start"
                                cols="6"
                                >
                                    <v-btn
                                    class="back-button"
                                    color="blue-grey"
                                    @click="--subStep"
                                    >
                                        Back
                                    </v-btn>
                                </v-col>
                                <v-col
                                class="text-end"
                                cols="6"
                                >
                                <div class="d-flex justify-end">
                                    <v-btn class="select-all-btn" variant="plain">clear</v-btn>
                                    <v-btn
                                    class="next-button"
                                    color="blue-grey"
                                    @click="subStep++"
                                    >
                                        Next
                                    </v-btn>
                                </div>
                                    
                                </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="9" class="step4-right" :class="subStep == 3 ? 'show-section' : 'hide-section'">
                        <div class="step4-title">
                            <h3>Responsible Contractor Entry Survey - <span>Certification Worksheet</span></h3>
                        </div>
                        <div class="step4-content-container">
                            <v-card
                            
                                class="overflow-y-auto"
                                max-height="400"
                            >
                                <v-card-text>
                                    <div class="question-title">
                                        <p>Please read and answer following questions below.</p>
                                    </div>
                                    <div class="question-short-description">
                                        <p>This worksheet has been provided to assist you with answering questions on the certification of responsible contractor status form.
                                            The responsible contractor program encourages fair wages and benefits, consistent with local market practices.
                                            Please take a few minutes to complete the following questions about your firm and the marketplace in which you operate.</p>
                                    </div>
                                <div class="question-block d-flex justify-space-between">
                                        <p>I read responsible contractor program policy :</p>
                                        <div >
                                        <v-radio-group inline>
                                            <v-radio height="20px" width="20px" label="Yes" value="1"></v-radio>
                                            <v-radio label="No" value="0"></v-radio>
                                        </v-radio-group>
                                        </div>
                                </div>  
                                </v-card-text>
                            </v-card>
                        </div>
                        
                        <v-row class="mt-6">
                            <v-col
                                class="text-start"
                                cols="6"
                                >
                                    <v-btn
                                    class="back-button"
                                    color="blue-grey"
                                    @click="--subStep"
                                    >
                                        Back
                                    </v-btn>
                                </v-col>
                                <v-col
                                class="text-end"
                                cols="6"
                                >
                                <div class="d-flex justify-end">
                                    <v-btn class="select-all-btn" variant="plain">clear</v-btn>
                                    <v-btn
                                    class="next-button"
                                    color="blue-grey"
                                href="/register/finish"
                                    >
                                        Finish & Submit
                                    </v-btn>
                                </div>
                                    
                                </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
    
</template>
<script>
    export default {
        name:"Step4",
        data () {
            return {
                step:4,
                subStep:1,
                policyAgree: 'yes',
                valid: false,
                switch1: true,
                switch2: false,
            }
        }
    }
</script>   