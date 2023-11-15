<script setup lang="ts">
console.log('test')
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
          id="name"
          type="text"
          name="name"
          label="Name"
          help="Your full name"
          placeholder="“Jon Doe”"
        />
      </div>
    </section>
  </div>
</template>
