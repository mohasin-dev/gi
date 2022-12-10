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
            <div class="form-title d-flex">
                <h5>Markets</h5>
                <div style="width: 86%;" class="title-bottom-bar"></div>
            </div>
            <div class="form-container mt-4">
                
                <v-form v-model="valid">
                    <v-container>
                        <div class="trade-option d-flex align-center">
                            <div class="custom-title">
                                <h3>Trades :</h3>
                            </div>
                            <v-switch
                             class="trade-switch"
                            v-model="switch1"
                            inset
                            label="Service"
                            ></v-switch>
                            <v-switch
                            class="trade-switch"
                            v-model="switch2"
                            inset
                            label="Contruction"
                            ></v-switch>
                        </div>
                        <div class="markets custom-title mt-6">
                            <h4>Geographic Markets :</h4>
                        </div>
                        <v-row>
                            
                            <v-col col="12" md="6">
                                <div class="text-end">
                                    <v-btn class="select-all-btn" variant="plain">Select All</v-btn>
                                </div>
                               
                                <v-card
                                    
                                    max-width="300"
                                    v-scroll.self="onScroll"
                                    class="overflow-y-auto custom-scroll-design leftside-scroll"
                                    max-height="300"
                                >
                                    <v-list>
                                        <v-list-item
                                            v-for="item in items"
                                            :key="item.title"
                                            :title="item.title"
                                        >
                                            <template v-slot:append>
                                                <v-btn
                                                    height="20px"
                                                    width="20px"
                                                    color="grey-lighten-1"
                                                    icon="mdi-plus"
                                                    variant="text"
                                                ></v-btn>
                                            </template>
                                        </v-list-item>

                                    </v-list>
                                </v-card>
                            </v-col>
                            <v-col col="12" md="6">
                                <v-card
                                    
                                    max-width="300"
                                    v-scroll.self="onScroll"
                                    class="overflow-y-auto custom-scroll-design rightside-scroll"
                                    max-height="300"
                                >
                                    <v-list>
                                        <v-list-item
                                            v-for="item in items"
                                            :key="item.title"
                                            :title="item.title"
                                        >
                                            <template v-slot:append>
                                                <v-btn
                                                    height="20px"
                                                    width="20px"
                                                    color="grey-lighten-1"
                                                    icon="mdi-close"
                                                    variant="text"
                                                ></v-btn>
                                            </template>
                                        </v-list-item>

                                    </v-list>
                                </v-card>
                            </v-col>
                            <v-col
                            class="text-start"
                            cols="12"
                            md="6"
                            >
                                <v-btn
                                class="back-button"
                                color="blue-grey"
                                @click=""
                                >
                                    Back
                                </v-btn>
                            </v-col>
                            <v-col
                            class="text-end"
                            cols="12"
                            md="6"
                            >
                                <v-btn
                                class="next-button"
                                color="blue-grey"
                                @click="step++"
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
        
</template>
<script>
    export default {
        name:"Step3",
        data () {
            return {
                step:3,
               
                valid: false,
                switch1: true,
                switch2: false,
                items: [
                    
                    {
                        title: 'Connectiout',
                        value: 1,
                        props: {
                            appendIcon: 'mdi-plus',
                        },
                    },
                    {
                        title: 'Delware',
                        value: 2,
                        props: {
                            appendIcon: 'mdi-plus',
                        },
                    },
                    {
                        title: 'District Of Columbia',
                        value: 3,
                        props: {
                            appendIcon: 'mdi-plus',
                        },
                    },
                    {
                        title: 'Florida',
                        value: 4,
                        props: {
                            appendIcon: 'mdi-plus',
                        },
                    },
                    {
                        title: 'Georgia',
                        value: 5,
                        props: {
                            appendIcon: 'mdi-plus',
                        },
                    },
                    {
                        title: 'Hawaii',
                        value: 6,
                        props: {
                            appendIcon: 'mdi-plus',
                        },
                    },
                    {
                        title: 'Florida2',
                        value: 7,
                        props: {
                            appendIcon: 'mdi-plus',
                        },
                    },
                    
                ],
            }
        },
        mounted() {
            console.log(this.items)
        },
        methods: {
            onScroll () {
                
            },
        },
    }
</script>