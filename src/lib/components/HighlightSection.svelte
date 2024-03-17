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
  import { onMount, onDestroy } from "svelte";

  import { highlight_sections } from "$lib";

  export let id : string;
  export let show_name : string = id;
  export let dir : string = "";

  let section_element : HTMLElement;
  
  onMount(() => highlight_sections.push({ section_element, show_name }));
  onDestroy(() => highlight_sections.reset());
</script>

<section id={id} bind:this={section_element}>
  <header>

    {#if dir}
    <aside>
      <a href={dir}>
        Show More &#62;
      </a>
    </aside>
    {/if}
  </header>
  <slot />
</section>

<style>
  section {
    min-height: 200vh;
  }
</style>