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
  import MenuButton from "../MenuButton.svelte";

  import "$lib/res/font/clash-display/clash-display.css";
  import kodama_kai_logo_small from "$lib/res/icons/svg/kodama-kai_logo-small.svg";
</script>

<header>
  <a href="/">
    <img src={kodama_kai_logo_small} alt="Kodama Kai logo" />
    <h1>Kodama Kai</h1>
  </a>
  <aside>
    <MenuButton />
  </aside>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: var(--width) auto var(--width);
    grid-template-rows: var(--width);
    font-family: 'Clash Display';
    background-color: var(--color-bg-0);
    border-bottom: var(--border);
    z-index: 100;
  }

  a, aside {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  img {
    width: 3.25rem;
  }

  h1 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: 0.25rem;
    color: var(--color-txt-0);
    text-transform: uppercase;
  }
</style>