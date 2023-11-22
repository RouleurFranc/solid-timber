<script setup lang="ts">
import { reset } from '@formkit/core'

const config = useRuntimeConfig()
const showSuccess = ref(false)
const WEB3FORMS_ACCESS_KEY = config.public.webformToken
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
})

const submitForm = async () => {
  const { data, error, status } = await useFetch(
    'https://api.web3forms.com/submit',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: 'Nieuw Solid Timber contactformulier op de website ingevuld',
        firstName: formData.value.firstName,
        lastName: formData.value.lastName,
        email: formData.value.email,
        message: formData.value.message,
      }),
    },
  )
  if (status.value === 'success') {
    showSuccess.value = true
  }
  if (!data || error.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Er is iets mis gegaan met het contactformulier.',
    })
  }
  reset('signupForm')
}
</script>
<template>
  <div>
    <head>
      <Title>Ambitie in Houtbouw? Neem contact op! - Solid Timber</Title>
      <Meta
        name="description"
        content="Ambitie in houtbouw? Neem dan contact met ons op! Dan kijken we mee naar de kansen in uw bouwproject."
      />
    </head>
    <section class="relative bg-beige-light">
      <div
        class="mx-auto max-w-screen-lg px-6 pb-6 pt-4 md:px-8 md:pb-16 md:pt-10 xl:py-24"
      >
        <h1 class="mb-10 text-center text-4xl text-green-dark md:text-5xl">
          Contact
        </h1>
        <div class="flex flex-col md:flex-row">
          <div class="mr-12 md:mr-16">
            <FormKit
              id="signupForm"
              type="form"
              submit-label="Contact"
              @submit="submitForm"
            >
              <h2>Ambitie in Houtbouw? Of wilt u meer informatie?</h2>
              <input
                type="hidden"
                name="from_name"
                value="Solid Timber contact"
              />
              <FormKit
                v-model="formData.firstName"
                outer-class="required"
                type="text"
                label="Voornaam"
                name="firstName"
                validation="required|length:2,32|matches:/^[\u00C0-\u017Fa-zA-Z\s'-]*$/"
                placeholder="Voornaam *"
              />

              <FormKit
                v-model="formData.lastName"
                outer-class="required"
                type="text"
                label="Achternaam"
                name="lastName"
                placeholder="Achternaam *"
                validation="length:2,32|required|matches:/^[\u00C0-\u017Fa-zA-Z\s'-]*$/"
              />

              <FormKit
                id="email"
                v-model="formData.email"
                outer-class="required"
                type="email"
                label="E-mailadres"
                name="email"
                placeholder="E-mailadres *"
                validation="required|email"
                :delay="1500"
              />
              <FormKit
                v-model="formData.message"
                type="textarea"
                name="message"
                label="Uw bericht"
                placeholder="Ambitie in houtbouw? Of wilt u meer informatie? Laat het ons weten!."
                validation="length:0,220"
                validation-visibility="live"
                :validation-messages="{
                  length: 'Instructions cannot be more than 220 characters.',
                }"
              />
            </FormKit>
            <div
              v-if="showSuccess"
              class="my-4 flex items-center py-2 font-semibold text-[#198754]"
            >
              <Icon
                name="material-symbols:check-circle"
                class="mr-1 transition-all hover:opacity-80 hover:transition-all"
                size="26"
              />
              Het contactformulier is succesvol verzonden!
            </div>
          </div>
          <Social :contact-button="false" />
        </div>
      </div>
    </section>
  </div>
</template>
