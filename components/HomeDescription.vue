<template>
  <BaseContainer class="flex flex-col justify-center items-center bg-purple-400 text-white">
    <div class="pt-32 pb-52 flex flex-col w-full gap-16 justify-center items-center">
      <div class=" flex flex-row justify-center items-center gap-12">
        <img v-for="logo in logos" :key="logo.id" :src="logo.src" class="object-contain" :alt="logo.alt"/>
      </div>
      <p class="w-1/3 text-center text-black text-md font-bold">
        Infline est la plateforme numéro 1 dans la mise en relation entre les influenceurs et les marques en France.
        Finies les recherches interminables, matchez avec le profil parfait
      </p>
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
interface ILogo {
  id: string;
  src: string;
  alt: string;
}

const logos = useState<Array<ILogo>>('logos', () => [
  {
    id: "nike",
    src: "/logoNike.png",
    alt: "Logo de Nike"
  },
  {
    id: "bk",
    src: "/logoBk.png",
    alt: "Logo de Burger King"
  },
  {
    id: "samsung",
    src: "/logoSamsung.png",
    alt: "Logo de Samsung"
  },
  {
    id: "adidas",
    src: "/logoAdidas.png",
    alt: "Logo de Adidas"
  },
  {
    id: "google",
    src: "/logoGoogle.png",
    alt: "Logo de Google"
  },
  {
    id: "kfc",
    src: "/logoKfc.png",
    alt: "Logo de KFC"
  },
]);
</script>