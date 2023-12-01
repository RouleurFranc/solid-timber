<script setup lang="ts">
import { reset } from '@formkit/core'
import GET_CONTACT from './getContact.graphql'

const { data: pageData } = await useAsyncQuery(GET_CONTACT, {})
const contactPageData = pageData?.value?.Page
const seoSlug = 'contact'
const pageComponents = contactPageData?.stack
const pageHeader = pageComponents[0]

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
    <Metadata :seo-slug="seoSlug"></Metadata>
    <PageHeader
      :image-small="true"
      :data="pageHeader"
    />
    <div class="mx-auto flex max-w-screen-xl flex-col md:flex-row">
      <section
        class="relative px-6 pb-6 pt-4 md:basis-1/2 md:px-8 md:pb-16 md:pt-10 xl:py-16"
      >
        <div class="pr-8">
          <FormKit
            id="signupForm"
            type="form"
            submit-label="Contact"
            @submit="submitForm"
          >
            <h2 class="text-green-dark">
              Ambitie in Houtbouw? Of wilt u meer informatie?
            </h2>
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
              placeholder="Ambitie in houtbouw? Of wilt u meer informatie? Laat het ons weten!"
              validation="length:0,500"
              validation-visibility="live"
              :validation-messages="{
                length: 'Uw bericht mag korter zijn dan 500 tekens.',
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
      </section>
      <section
        class="relative flex flex-col bg-gray px-6 pb-6 pt-4 after:absolute after:-right-full after:top-0 after:h-full after:w-full after:bg-gray md:basis-1/2 md:px-8 md:pb-16 md:pt-10 xl:py-24"
      >
        <Social :contact-button="false" />
        <div class="my-4 flex flex-col">
          <small>Solid Timber BV</small>
          <small>KvK: 75331020</small>
        </div>
      </section>
    </div>
  </div>
</template>

<style type="text/css" scoped></style>
