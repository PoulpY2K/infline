<template>
  <BaseContainer class="flex flex-col justify-center items-center bg-black text-white gap-16">
    <TheHeader/>
    <div class="pb-36 flex flex-row w-full">
      <div class="mt-12 ml-24 flex flex-col w-1/2 items-start">
        <h1 class="font-integral uppercase text-5xl font-bold w-[80%] leading-snug">
          LA PLATEFORME n°1 POUR TROUVER UN <span id="hero-title" class="text-black">INFLUENCEUR</span>
        </h1>
        <div class="mt-12 flex flex-row gap-5">
          <BaseButton id="influencer" event-name="influencer" class="bg-white text-black">
            <span class="text-xs">Je suis un influenceur</span>
          </BaseButton>
          <BaseButton id="brand" event-name="brand" class="bg-purple-400 text-white">
            <span class="text-xs">Je suis une marque</span>
          </BaseButton>
        </div>
      </div>
      <div class="flex flex-col w-1/2 justify-center items-center relative">
        <img src="/madame.png" class="absolute object-contain top-0"
             alt="Photo d'influenceuse tenant un téléphone"/>
      </div>
    </div>
  </BaseContainer>
</template>

<style scoped>
span#hero-title {
  -webkit-text-stroke: 1px #B188EA;
}
</style>

<script setup lang="ts">

</script>