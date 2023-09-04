<script setup>
const error = useError();
const handleError = () => {
  clearError({
    redirect: '/'
  });
};
</script>

<template>
  <NuxtLayout>
    <div>
      <div v-if="error.statusCode === '404'">
        <h1>{{ error.statusCode }}</h1>
        <p>Oeps de pagina die je zoekt bestaat helaas niet.</p>
      </div>
      <div v-else>
        <h1>{{ error.statusCode }}</h1>
        <p>Oeps er lijkt iets fout te zijn gegaan.</p>
      </div>
      <div>
        <p>
          <strong>{{ error.message }}</strong>
        </p>
        <div @click="handleError">Naar de homepage</div>
      </div>
    </div>
  </NuxtLayout>
</template>
