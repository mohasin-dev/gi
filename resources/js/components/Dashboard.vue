<template>
    <v-app>
      <div>
        <v-app-bar title="Application" fixed :clipped-left="true"></v-app-bar>
      </div>
     
        <v-row style="margin-top: 63px;">
          <v-col cols="3">
            <v-card style="overflow:inherit">
              <v-card-text>
                <v-row
                 style="position:relative;padding-bottom:40px;"
                  align="left"
                  justify="center"
                >
                  <v-badge
                    bordered
                    bottom
                    color="deep-purple accent-4"
                    dot
                    offset-x="3"
                    offset-y="30"
                  >
                    <v-avatar size="40" style="border:2px solid;">
                      <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                    </v-avatar>
                  </v-badge>
                  <div class="profile-text pl-3">
                    <h3>Hossain khondokar</h3>
                    <v-btn text style="box-shadow: none;padding:0;min-width:auto;height:auto;font-size: 10px;color:#9d9595;">
                      VIEW PROPILE
                    </v-btn>
                    
                  </div>
                  <v-btn
                    style="position:absolute;right:-15px;bottom:0;"
                    icon
                    fab
                    height="25px"
                    width="25px"
                    dark
                  >
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                </v-row>
                <v-list density="compact" nav>
                  <v-list-item v-for="(item, index) in items" :key="index" :prepend-icon="item.icon" :title="item.title" :value="item.title"></v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
            

       
          </v-col>
          <v-col cols="9">
            <v-card>
              <v-card-text class="py-8">
                <div class="d-flex">
                  <div style="width:15%;"><h2>Hello <span style="color:#0127df">Admin</span></h2></div>
                  <v-divider
                    style="margin-right: 45px !important;"
                      class="mx-6"
                      vertical
                      dark
                    ></v-divider>
                  <div style="width:40%;" class="">
                    <p>Today is</p>
                    <p>December 8,2022, 12:15pm</p>
                  </div>
                  <div style="width:40%;" class="text-right">
                    <p>Last Login</p>
                    <p>December 8,2022 - 12:15pm</p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
            <div style="margin:0;" class="mt-6 d-flex">
              <v-card style="width:33.33%;margin-right: 5px;" class="px-4 py-8">
                <v-card-text>
                  <div class="d-flex justify-space-between">
                    <div>
                      <p>OPEN</p>
                      <p>OPPORTUNITIES</p>
                    </div>
                    <h3>16 345</h3>
                  </div>
                </v-card-text>
              </v-card>
              <v-card style="width:33.33%;margin-left: 5px;margin-right: 5px;" class="px-4 py-8">
                <v-card-text>
                  <div class="d-flex justify-space-between">
                    <div>
                      <p>TOTAL</p>
                      <p>CONTRACTORS</p>
                      <p>IN SYSTEM</p>
                    </div>
                    <h3>16 345</h3>
                  </div>
                </v-card-text>
              </v-card>
              <v-card style="width:33.33%;margin-left: 5px;"  class="px-4 py-8">
                <v-card-text>
                  <h4>OPEN OPPORTUNITIES</h4>
                  <div class="d-flex justify-space-between">
                    <p>MONTH</p>
                    <h3>16 345</h3>
                  </div>
                  <div class="d-flex justify-space-between">
                    <p>YEAR</p>
                    <h3>16 345</h3>
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
    </v-app>
  </template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Documents', icon: 'mdi-file-document' },
        { title: 'Contractors', icon: 'mdi-account' },
        { title: 'Reports', icon: 'mdi-clipboard-outline' },
        { title: 'Administators', icon: 'mdi-account-group-outline' },
        { title: 'Email Log', icon: 'mdi-email-outline' },
        { title: 'Log Out', icon: 'mdi-logout' },
      ],
      rail: false,
    }
  },
}
</script>