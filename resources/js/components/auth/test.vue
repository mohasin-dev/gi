/* register */

.top-logo .logo-powered-by{
    color: #052c65;
    position: relative;
}
.powerby-text{  
    padding: 0;
    margin: 0;
    position: absolute;
    left: 0;
    font-size: 12px;
    top: 3%;
}
.logo-powered-by .company-text{
    font-size: 60px;
    font-weight: 500;
    font-family: auto;
    padding-right: 10px;
}
.company-slogan-text{
    font-weight: 500;
    padding-top: 20px;
    padding-left: 10px;
    line-height: 1;
    position: relative;
}
.top-divider{
    height: 55%;
    background: #0000004f;
    position: absolute;
    width: 1px;
    left: 0;
}
.top-logo .logo img{
    height: 50px;
    padding-left: 35px;
}
/* step css */
.step-container{

}
.step-container .step-reg:first-child{
    width: 184px;
    height: 90px;
    margin-right: 0;
    padding: 20px 0px;
    padding-right: 12px;
    background-color: #e1e1e1;
    /* border: 1px solid #c5d7f3; */
    clip-path: polygon(0% 0%, 93% 0%, 100% 50%, 93% 100%, 0% 100%);
    position: relative;
}
.step-container .step-reg:first-child:before{
    width: 182px;
    height: 88px;
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    content: '';
    background-color: #F6FAFF;
    clip-path: polygon(0% 0%, 93% 0%, 100% 50%, 93% 100%, 0% 100%);
    z-index: -1;
}
.step-container .step-reg{
    text-align: center;
    width: 184px;
    height: 90px;
    margin-right: 0;
    padding: 20px 0px;
    padding-left: 12px;
    padding-right: 12px;
    background-color: #e1e1e1;
    /* border: 1px solid #c5d7f3; */
    clip-path: polygon(93% 1%, 100% 50%, 93% 100%, 0% 100%, 7% 50%, 0% 0%);
    position: relative;
}
.step-container .step-reg:before{
    width: 182px;
    height: 88px;
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    content: '';
    background-color: #F6FAFF;
    clip-path: polygon(93% 1%, 100% 50%, 93% 100%, 0% 100%, 7% 50%, 0% 0%);
    z-index: -1;
}
.step-container .step-reg p{
    margin: 0;
}
.step-container .step-reg p:first-child{
    font-weight: 500;
    font-size: 20px;
    color: #3475d9;
    /* letter-spacing: 2px; */
    text-transform: uppercase;
}
.step-container .step-reg p:last-child{
    margin: 0;
    font-size: 14px;
    color: #484848;
}
.step-container .step-reg.step-active:before{
    width: 176px;
    height: 82px;
    top:4px;
    left:4px;
}

/* end step css */

/* form css */
.form-section{
    border: 1px solid #a59f9f;
    border-radius: 5px;
    padding: 51px;
    max-width: 750px;
    margin: auto;
}
.form-title h5{
    margin: 0;
    color: #3475d9;
    font-size: 20px;
    font-weight: 500;
}
.form-title .title-bottom-bar{
  
    border-bottom: 1px dashed #a59f9f;
    margin-left: 10px;
}

.form-container .already-acount{
    text-align: right;
}
.form-container .already-acount p{
    margin: 0;
    color: #817171;
    font-size: 13px;
}
.form-container .already-acount a{
    text-decoration: none;
    font-weight: 700;
}
.form-container .next-button{
    padding: 5px 50px !important;
    border-radius: 3px !important;
    background-color: #0d6efd!important;
    color:#fff!important;
}
.form-container .back-button{
    padding: 5px 40px;
    background-color: #fff!important;
    color:#0d6efd!important;
    border: 1px solid #0d6efd;
} 
.v-field--variant-filled .v-field__overlay {
    background-color: #fff!important;
}
.state-field .v-field__outline{
    display: none;
}
.state-field .v-input__control{
    border: 1px solid #787575;
}
div[aria-required=true].v-input .v-label::after {
    content: " *";
    color: red;
}
.eye-show{
    position: relative;
}
.eye-show .v-input__append{
    position: absolute;
    right: 0;
}
.show-section{
    display: block;
}
.hide-section{
    display: none;
}

/* step3 */
.trade-option .trade-switch .v-input__details{
    display: none;
}
.trade-option .v-input{
    flex: none;
    padding: 0px 40px;
}
.trade-option .trade-switch .v-selection-control__input{
    width: 14px;
    height: 10px;
}
.trade-option .trade-switch .v-switch__thumb{
    height: 15px;
    background-color: #fff;
}
.trade-option .trade-switch .v-switch__track{
    border-radius: 14px!important;
    height: 20px!important;
    width: 40px!important;
    background-color: #97b3d7;
}
.trade-option .trade-switch .v-selection-control--dirty .v-switch__track{
    background-color: #0b6be9;
    opacity: 1;
}
.custom-scroll-design{
    border: 1px solid #978e8e!important;
    box-shadow: 0 0 0 0 #fff!important;
    font-size: 18px;
}
.custom-scroll-design .v-list-item-title{
    font-size: 16px;
    color:#605959;
}
.custom-scroll-design .v-list-item{
    /* min-height: 35px!important; */
    border-bottom: 1px solid #f9f3f3;
}
.custom-scroll-design.leftside-scroll .v-icon{
    color: #5d9ef3;
}
.custom-scroll-design.rightside-scroll .v-list-item{
    margin: 10px 10px;
    min-height: 35px;
    box-shadow: 1px 2px 4px 1px #b5b5b5;
    border-radius: 9999px;
}
.custom-scroll-design.rightside-scroll{
    margin-top: 35px;
    margin-left: 15px;
}
.custom-scroll-design.leftside-scroll{
    margin-right: 15px;
}
.select-all-btn{
    opacity: 0.9!important;
    color:#0b6be9!important;
    
}
.select-all-btn .v-btn__content{
    font-size: 11px!important;
}
.custom-title{
    color:#605959; 
}
.custom-scroll-design::-webkit-scrollbar {
    width: 5px;
}
.custom-scroll-design::-webkit-scrollbar-track {
    background: #fff;
    /* border-left: 1px solid #dadada; */
  }
  
  .custom-scroll-design::-webkit-scrollbar-thumb {
    background: #b0b0b0;
    /* border: solid 3px #e6e6e6; */
    border-radius: 7px;
  }
  
  .custom-scroll-design::-webkit-scrollbar-thumb:hover {
    background: black;
  }
/* end step3 */
/* step4 css */
.step4-container{
    border: 1px solid #a9a4a4;
    padding: 20px;
}
.step4-left .leftnavbar-list{
    padding: 10px 20px;
}
.step4-left .leftnavbar-list .v-btn__content{
    font-size: 13px!important;
    color: #fff!important;
}
.step4-left .leftnavbar-list .v-btn__content .mdi:before{
    font-size: 13px!important;
}
.step4-left .leftnavbar-list .v-btn{
    background-color: #0dc115!important;
    opacity: 0.8;
}
.step4-left .leftnavbar-list p{
    color:#3475d9;
    opacity: 0.7;
    font-size: 15px;
}
.step4-left .leftnavbar-list.no-active-list{
    opacity: 0.2;
}
.step4-left .leftnavbar-list.no-active-list p{
    color:#000;
}
.step4-left .leftnavbar-list.no-active-list .v-btn{
    background-color: #000!important;
}
.step4-right{
    /* border: 1px solid #a9a4a4; */
}
.step4-right .step4-title{
    color: #5a5858;
}
.step4-right .step4-title span{
    color: #3475d9;
    opacity: 0.8;
}
.step4-content-container{
    margin-top: 20px;
    border: 1px solid #a9a4a4;
}
.policy-title1{
    text-align: center;
    padding: 20px 0;
    font-size: 18px;
    font-weight: bold;
    color: #181818;
}
.policy-title2{
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #5a5a5a;
    margin-bottom: 20px;
}
.policy-content{
    font-size: 12px;
    color: #4e4848;
    margin-bottom:10px;
}
.policy-title3{
    font-size: 14px;
    color: #181818;
    font-weight: bold;
}
.form-step4-section .next-button{
    padding: 5px 50px !important;
    border-radius: 3px !important;
    background-color: #0d6efd!important;
    color:#fff!important;
}
.form-step4-section .back-button{
    padding: 5px 40px;
    background-color: #fff!important;
    color:#0d6efd!important;
    border: 1px solid #0d6efd;
} 
.text-cus-color{
    color:#0d6efd!important;
}
.policy-footer .v-label{
    font-size: 12px;
    color: #4e4848;
}

.question-title{
    padding: 10px;
    border: 1px solid #bdbdbd;
    background-color: #e8edf1;
    color: #525252;
    font-size: 14px;
    margin: 10px 0;
}
.question-short-description{
    padding: 10px;
    border: 1px solid #bdbdbd;
    background-color: #e8edf1;
    color: #242222;
    font-size: 14px;
    margin: 10px 0;
}
.question-block{
    padding: 15px 10px;
    font-size: 13px;
    margin: 10px 0;
    border: 1px solid #bdbdbd;
    align-items: center;
}
.question-block .v-input__details{
    display: none;
}
.question-block .v-radio-group{
    width: 130px;
}
.question-block .v-selection-control--density-default{
    height: 20px;
}
.question-block .mdi.v-icon{
    font-size: 20px!important;
}
.question-block .v-label{
    font-size: 13px;
}
.question-block .v-selection-control--dirty .mdi.v-icon{
    color:#0d6efd!important;
}
.success-step{
    width: 450px;
    background-color: #F2F7FE!important;
    color: #222222!important;
}
.success-step .v-btn__content{
    font-size: 11px;
    opacity: 0.8;
    text-transform: none;
}
/* end step4 */
/* end register */

/* login */
.login-right{
    color: #052c65;
    background-color: #F2F7FE;
}
.login-right .company-text{
    font-size: 150px;
    font-weight: 700;
}
.login-right .company-slogan-text{
    font-size: 38px;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 38.5px;
    padding-top: 53px;
}
.login-right .top-divider{
    height: 55%;
    width: 3px;
}
.login-right .powerby-text{
    font-size: 18px;
    top: 7%;
    letter-spacing: 3px;
}
.form-login .field-label{
    padding: 10px 5px;
    color:#484848;
}
.form-login .v-input__details{
    display: none;
}
.form-login .v-field__input{
    min-height: 25px!important;
    padding: 10px 5px !important;
    background-color: #FBFCFD;
}
.remember-me{
    position: relative;
}
.remember-me label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 22px;
    left: 0;
    position: absolute;
    top: 0;
    width: 22px;
  }
  .remember-me label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 5px;
    opacity: 0;
    position: absolute;
    top: 5px;
    transform: rotate(-45deg);
    width: 10px;
  }
  .remember-me input[type="checkbox"] {
    visibility: hidden;
  }
  .remember-me input[type="checkbox"]:checked + label {
    background-color: #66bb6a;
    border-color: #66bb6a;
  }
  
  .remember-me input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
  .form-login .sign-in-btn{
    background-color: #246DCB!important;
    font-size: 13px!important;
    text-transform: none;
  }
  .form-login .register-btn{
    background-color: #EBF4FF!important;
    color:#444242!important;
    font-size: 13px!important;
    text-transform: none;
  }
  .login-left .top-logo h2{
    color: #052C65;
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 5px;
  }
  .login-left .top-logo .logo img{
    height: 35px;
  }
/* end login */







/* responsive */
  /* register */
  @media (max-width:959px) and (min-width:600px){
    .form-section{
        max-width: 80%;
    }
    .step-container .step-reg:first-child{
        width: 125px;
        height: 80px;
        padding: 5px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .step-container .step-reg:first-child::before{
        width: 123px;
        height: 78px;
    }
    .step-container .step-reg{
        padding: 5px 0px;
        width: 125px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .step-container .step-reg::before{
        width: 123px;
        height: 78px;
    }
    .step-container .step-reg p:first-child{
        font-size: 15px;
    }
    .step-container .step-reg p:last-child{
        font-size: 12px;
    } 

    .step2-form .v-input__details{
        display: none;
    }
    .step2-form .v-col-12{
        padding-top:0;
        padding-bottom:0;
    }
    .form-section.step3-form{
        padding: 10px;
    }
    .trade-option .v-input {
        padding: 0px 35px;
    }
    .step4-container{
        margin: 0 20px!important;
    }
  }

  @media (max-width:600px){
 
    .logo-powered-by .company-text {
        font-size: 45px;
        font-weight: 500;
        font-family: auto;
        padding-right: 5px;
    }
    .company-slogan-text {
        font-weight: 400;
        padding-top: 15px;
        padding-left: 10px;
        line-height: 1;
        position: relative;
        font-size: 13px;
    }
    .powerby-text {
        padding: 0;
        margin: 0;
        position: absolute;
        left: 0;
        font-size: 10px;
        top: -2%;
    }
    .top-logo .logo img {
        height: 35px;
        padding-left: 20px;
    }
    .form-section{
        max-width: 80%;
        padding: 10px;
    }
    .step-container .step-reg:first-child{
        width: 80px;
        height: 80px;
        padding: 5px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .step-container .step-reg:first-child::before{
        width: 78px;
        height: 78px;
    }
    .step-container .step-reg{
        padding: 5px 0px;
        width: 80px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .step-container .step-reg::before{
        width: 78px;
        height: 78px;
    }
    .step-container .step-reg p:first-child{
        font-size: 15px;
    }
    .step-container .step-reg p:last-child{
        font-size: 12px;
    }
    .g_h_capt div:first-child{
        width: 100% !important;;
    }
    .g_h_capt div:first-child div:first-child iframe:first-child{ 
        width: 100% !important;;
    }
    .rc-anchor-pt{
        display: none;
    }
    .step2-form .v-input__details{
        display: none;
    }
    .step2-form .v-col-12{
        padding:0;
    }

    .trade-option .trade-switch .v-switch__track {
        border-radius: 9px!important;
        height: 20px!important;
        width: 33px!important;
        background-color: #97b3d7;
    }
    .trade-option .v-input{
        padding: 0px 5px;
    }
    .v-switch .v-label {
        font-size: 12px;
    }
    .custom-title {
        font-size: 11px;
    }
    .step4-container{
        margin: 0 20px!important;
    }
    .form-step4-section .back-button {
        padding: 5px 10px;
        font-size: 11px;
    }
    .form-step4-section .next-button {
        padding: 5px 1px !important;
    }
    .form-step4-section .next-button .v-btn__content{
        font-size: 11px;
    }
    .login-left .top-logo h2{
        letter-spacing: 3px;
    }
    .login-right .company-slogan-text {
        font-size: 21px;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 18.5px;
        padding-top: 21px;
    }
    .login-right .logo-powered-by .company-text {
        font-size: 61px;
        font-weight: 500;
        font-family: auto;
        padding-right: 0px;
    }
    .login-right .logo-powered-by{
        padding-top: 15px;
    }
  }
  /* register */
/* end responsive */