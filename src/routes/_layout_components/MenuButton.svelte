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
  import { is_menu_open } from "$lib";

  const openMenu = () => is_menu_open.set(!$is_menu_open);
</script>

<button class:active={$is_menu_open} on:click={openMenu}>
  <span />
  <span />
  <span />
</button>

<style>
  button {
    padding: 0.5rem;
    aspect-ratio: 1;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  span {
    display: block;
    height: 4px;
    margin: 6px;
    border-radius: 6px;
    background-color: var(--color-txt-0);
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      width: 20px;
    }

    &:nth-child(2) {
      width: 30px;
    }

    &:nth-child(3) {
      width: 40px;
    }
  }

  .active span {
    width: 40px;

    &:nth-child(1) {
      translate: 0 10px;
      rotate: 45deg;
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      translate: 0 -10px;
      rotate: -45deg;
    }
  }
</style>