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
  import Footer from "./Footer.svelte";
  
  import { page } from "$app/stores";

  import { is_menu_open } from "$lib";
</script>

{#key $page.url.pathname}
  <Header />
{/key}

<main>
  <aside>
    <!-- TODO: top part -> search button that makes appear a text form -->
    <!-- TODO: bottom part -> to top button -->
  </aside>

  <div>
    {#if $is_menu_open} 
      <Menu /> 
    {:else} 
      <slot/> 
    {/if}
  </div>

  <aside>
    <!-- TODO: bottom part -> profile -->
  </aside>
</main>

<Footer />

<style>
  main {
    display: grid;
    grid-template-columns: var(--width) auto var(--width);
    min-height: calc(100vh - var(--width));
    
    & aside {
      &:first-child {
        border-right: var(--border);
      }
      &:last-child {
        border-left: var(--border);
      }
    }
  }
</style>