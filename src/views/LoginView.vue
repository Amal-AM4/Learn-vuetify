<template>

    <v-form @submit.prevent>

        <v-container>

        <v-row>
            <v-col cols="12" md="4">
                <v-text-field
                    variant="solo"
                    v-model="email"
                    :counter="10"
                    label="Email"
                    required>
                </v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="4">
                <v-text-field
                    variant="solo"
                    v-model="password"
                    label="Password"
                    required>
                </v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-col>
        </v-row>
        </v-container>
    </v-form>

</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref<string>("")
const password = ref("")

</script>

<style>

</style>