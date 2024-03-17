<!--
  --------------------------------------------- 
  ---------------- KODAMA KAI ----------------- 
  --------------------------------------------- 
  Author: Adnan Faize                           
  Copyright (c) Kodama Kai, All Rights Reserved 
  --------------------------------------------- 
  --------------------------------------------- 
-->

<script>
  import Header from "./Header.svelte";
  import Menu from "./Menu.svelte";

  import { is_menu_open } from "$lib";
</script>

<Header />

<main>
  {#if $is_menu_open}
    <Menu />
  {:else}
    <slot />
  {/if}
</main>