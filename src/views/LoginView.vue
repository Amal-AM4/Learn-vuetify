<template>
    <v-container fluid>
        <v-overlay :model-value="isLoading"
        class="align-center justify-center">
            <v-progress-circular 
            v-if="isLoading"
            indeterminate color="white" class="pa-1">
            </v-progress-circular>
        </v-overlay>

        <v-row justify="center">
            <v-col cols="5">

                <v-card class="pa-4">
                    <v-card-title class="text-center">Login Here</v-card-title>
                    <v-card-item>
                        <v-sheet>
                            <v-form @submit.prevent="submit">
                                <v-text-field 
                                    variant="solo"
                                    prepend-inner-icon="mdi-email"
                                    v-model="email"
                                    :counter="50"
                                    label="Email"
                                    :rules="[rules.required, rules.email]"
                                    required>
                                </v-text-field>

                                <v-text-field type="password"
                                    variant="solo"
                                    prepend-inner-icon="mdi-key"
                                    v-model="password"
                                    label="Password"
                                    :rules="[rules.required]"
                                    required>
                                </v-text-field>

                                <v-checkbox
                                    v-model="remember"
                                    label="Rember Me"
                                    color="red"
                                    hide-details
                                ></v-checkbox>

                                <v-btn color="red-darken-1" type="submit" block variant="elevated" class="mt-2">Submit</v-btn>
                            </v-form>
                        </v-sheet>
                    </v-card-item>

                    <v-card-action>
                        <div class="mx-4">
                            <v-btn block to="/register">Register</v-btn>
                            <!-- or -->
                            <!-- <RouterLink to="/register">Register</RouterLink> -->
                        </div>
                    </v-card-action>
                </v-card>

            </v-col>
        </v-row>
    </v-container>

</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const email = ref<string>("")
const password = ref<string>("")
const remember = ref<boolean>(false)

const isLoading = ref<boolean>(false)

const rules = {
    required: (value: string) => !!value || 'Required.',
    email: (value: string) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return pattern.test(value) || 'Invalid email.'
    }
}

function submit() {
    
    if (email.value === '' || password.value === '') {
        return
    }

    isLoading.value = true

    setTimeout(() => {
        isLoading.value = false

        alert(JSON.stringify({
            email: email.value,
            password: password.value,
            remember: remember.value
        }, null, 2))
    }, 2000)

}

</script>

<style>

</style>