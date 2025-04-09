<template>

    <v-sheet width="300" class="mx-auto">
        <v-form @submit.prevent="submit">

            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
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
                    <v-col cols="12" md="4">
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

</template>

<script setup lang="ts">
import { ref } from "vue";

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