<script setup lang="ts">
import { changesLanguage, type AvaiableLanguages, i18nApplication } from '@/i18n/i18n';
import { type Ref, ref, computed } from 'vue';


const currentLanguage: Ref<AvaiableLanguages> = 
    ref(i18nApplication.global.locale.value);

    const change = ()=> {
        if(currentLanguage.value == 'br'){
            changesLanguage('en');
        }
        else{
            changesLanguage('br');
        }
        currentLanguage.value = i18nApplication.global.locale.value;
    };

const flag = computed(()=> currentLanguage.value == 'br'? 'brazil.png' : 'americ.png');


</script>

<template>
    <header class="flex flex-row align-items-center justify-content-start">
        <img src="/build-a-bot-logo.png" alt="robot logo">
        <nav class="ml-5">
          <RouterLink class="m-4" to="/">Home</RouterLink>
          <RouterLink class="m-4" to="/cart">Cart</RouterLink>
          <RouterLink class="m-4" to="/build">Build</RouterLink>
          <img id="flag" :src="flag" alt="flag" @click="change">
        </nav>
    </header>
</template>

<style scoped lang="scss">
    header{
        height: 5rem;
        width: 40rem;
        img{
            margin-left: 4rem;
            height: 4rem;
        }
        a{
            text-decoration: none;
            font-size: 1.5rem;
            color: var(--app-dark-text-color);
        }
        .router-link-exact-active{
            font-weight: bold;
        }
        #flag{
            height: 2.5rem;
            width: 3.5rem;
            cursor: pointer;
        }
    }
</style>