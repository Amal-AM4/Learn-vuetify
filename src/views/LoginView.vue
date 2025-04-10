<template>
    
    <v-row justify="center">
        <v-col cols="5">

            <v-card class="pa-4">
                <v-card-title class="text-center">Login Here</v-card-title>
                <v-card-item>
                    <v-sheet>
                        <v-form @submit.prevent="submit">

                            <v-container>
                                <v-row>
                                    <v-col cols="12" md="2">
                                        <v-text-field 
                                            variant="solo"
                                            prepend-inner-icon="mdi-email"
                                            v-model="email"
                                            :counter="10"
                                            label="Email"
                                            required>
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" md="2">
                                        <v-text-field type="password"
                                            variant="solo"
                                            prepend-inner-icon="mdi-key"
                                            v-model="password"
                                            label="Password"
                                            required>
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-checkbox
                                    v-model="remember"
                                    label="Rember Me"
                                    color="red"
                                    hide-details
                                ></v-checkbox>

                                <v-row>
                                    <v-col>
                                        <v-btn color="red-darken-1" type="submit" block class="mt-2">Submit</v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>

                        </v-form>
                    </v-sheet>
                </v-card-item>

                <v-card-action>
                    <div class="mx-8">
                        <v-btn block to="/register">Register</v-btn>
                        <!-- or -->
                        <!-- <RouterLink to="/register">Register</RouterLink> -->
                    </div>
                </v-card-action>
            </v-card>

        </v-col>
    </v-row>

</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const email = ref<string>("")
const password = ref<string>("")
const remember = ref<boolean>(false)

function submit() {
    alert(JSON.stringify({
        email: email.value,
        password: password.value,
        remember: remember.value
    }, null, 2))
}

</script>

<style>

</style>