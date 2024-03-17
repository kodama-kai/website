<!--
  --------------------------------------------- 
  ---------------- KODAMA KAI ----------------- 
  --------------------------------------------- 
  Author: Adnan Faize                           
  Copyright (c) Kodama Kai, All Rights Reserved 
  --------------------------------------------- 
  --------------------------------------------- 
-->

<script lang="ts">
  import { 
    EntryPoint,
    DesktopLayout,
    MobileLayout
  } from "./_layout_components/_components";

  import { is_big_screen } from "$lib";
  
  let innerWidth : number;

  $: is_big_screen.set(innerWidth > 640);
</script>

<svelte:window bind:innerWidth /> 

<svelte:head>
  <title>Kodama Kai</title>
  <meta name="description" content="Kodama Kai Website">
</svelte:head>

<EntryPoint />

{#if $is_big_screen}
  <DesktopLayout><slot/></DesktopLayout>
{:else}
  <MobileLayout><slot/></MobileLayout>
{/if}

<style>
  :global(:root) {
    --color-txt-0: #1E272E;
    --color-bg-0: #ECF0F1;
    --color-bg-1: #DCDDE1;

    --width: 5rem;
    --border: 2px solid var(--color-txt-0);
  }

  :global(body) {
    min-height: 100dvh;
    width: 100%;
    margin: 0;
    background-color: #fcfdfd;
    overflow-x: hidden;
  }
</style>