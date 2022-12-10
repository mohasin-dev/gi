<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login Component</div>

                    <div class="card-body">
                        I'm an login component.
                    </div>
                    <v-card>
                        <v-card-title>Cafe Badilico</v-card-title>
                        <v-card-text>
                            dfgdfgdf
                        </v-card-text>
                    </v-card>
                    <router-link to="/register">Register</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
