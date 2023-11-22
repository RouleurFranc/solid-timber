<script lang="ts">
const config = useRuntimeConfig()
const WEB3FORMS_ACCESS_KEY = config.public.webformToken

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    }
  },
  methods: {
    async submitForm() {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          message: this.message,
        }),
      })
      const result = await response.json()
      if (result.success) {
        console.log(result)
      }
    },
  },
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
    <section class="relative bg-beige">
      <div
        class="mx-auto max-w-screen-xl px-6 pb-6 pt-4 md:px-8 md:pb-16 md:pt-10 xl:py-24"
      >
        <h1 class="mb-10 text-center text-4xl text-green-dark">Contact</h1>

        <FormKit
          type="form"
          submit-label="Contact"
          @submit="submitForm"
        >
          <FormKit
            v-model="firstName"
            outer-class="required"
            type="text"
            label="Voornaam"
            name="firstName"
            validation="required|length:2,32|matches:/^[\u00C0-\u017Fa-zA-Z\s'-]*$/"
            placeholder="Voornaam”"
          />

          <FormKit
            v-model="lastName"
            outer-class="required"
            type="text"
            label="Achternaam"
            name="lastName"
            placeholder="Achternaam *"
            validation="length:2,32|required|matches:/^[\u00C0-\u017Fa-zA-Z\s'-]*$/"
          />

          <FormKit
            id="email"
            v-model="email"
            outer-class="required"
            type="email"
            label="E-mailadres"
            name="email"
            placeholder="E-mailadres *"
            validation="required|email"
            :delay="1500"
          />
          <FormKit
            v-model="message"
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
      </div>
    </section>
  </div>
</template>
