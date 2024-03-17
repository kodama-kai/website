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
  import Highlight, {
    setActiveLink, 
    setActiveLinkIndex, 
    getActiveLinkIndex, 
    enterHover, 
    exitHover
  } from "./Highlight.svelte";
  import MenuButton from "./MenuButton.svelte";

  import { onMount } from "svelte";

  import { highlight_sections, type HighlightSectionInterface } from "$lib";

  import "$lib/res/font/clash-display/clash-display.css";
  import kodama_kai_logo_small from "$lib/res/icons/svg/kodama-kai_logo-small.svg";

  let height : number;
  let links_container : Element;
  let prevent_scroll_action = false;

  onMount(() => setActiveLink(null));

  const scrollToSection = (event : Event, id : string) => {
    event.preventDefault();
    prevent_scroll_action = true;
    const top = document.getElementById(id)!.offsetTop - height; 
    window.scrollTo({ top, behavior: 'smooth' });
    setActiveLink(id + "_link");

    const checkIfScrollToIsFinished = setInterval(() => {
      if (top === window.scrollY) {
        prevent_scroll_action = false;
        clearInterval(checkIfScrollToIsFinished);
      }
    }, 25);
  }
  
  const waitForHighlightElement = () => {
    return new Promise<HighlightSectionInterface[]>(resolve => {
      if ($highlight_sections !== undefined) return resolve($highlight_sections);

      const observer = new MutationObserver(_ => {
        if ($highlight_sections !== undefined) {
          observer.disconnect;
          resolve($highlight_sections);
        }
      });
    });
  }

  const changeHiglight = async () => {
    if (prevent_scroll_action || !$highlight_sections.length) return;

    let active_link = getActiveLinkIndex();

    if (active_link !== null) {
      let current_element = await(await waitForHighlightElement()).at(active_link)!.section_element;
      let offset_top = current_element.offsetTop - height;
      let offset_bottom = offset_top + current_element.offsetHeight;
      if (offset_top <= window.scrollY && offset_bottom > window.scrollY) return;
    }
    
    let element_found = null;
    
    $highlight_sections.some((value, index) => {
      let current_element = value.section_element;
      let offset_top = current_element.offsetTop - height;
      let offset_bottom = offset_top + current_element.offsetHeight;

      if (offset_top <= window.scrollY && offset_bottom > window.scrollY) {
        element_found = index;
        return true;
      }
    });
    
    setActiveLinkIndex(element_found);
  }
</script>

<svelte:window on:scroll={changeHiglight} />

<header bind:offsetHeight={height}>
  <nav>
    <a href="/" class="kodama-kai">
      <img src={kodama_kai_logo_small} alt="Kodama Kai logo" />
      <h1>Kodama Kai</h1>
    </a>
    <Highlight links_container={links_container} />
    <ul class="highlights" bind:this={links_container}>
      {#each $highlight_sections as link}
        <li>
          <a href={'#' + link.section_element.id} class="link" id={link.section_element.id + "_link"} 
          on:click={(e) => scrollToSection(e, link.section_element.id)} 
          on:mouseenter={enterHover} on:mouseleave={exitHover}>
            {link.show_name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <aside>
    <MenuButton />
  </aside>
</header>

<style>
  header {
    display: grid;
    position: sticky;
    top: 0;
    grid-template-columns: auto var(--width);
    grid-template-rows: var(--width);
    font-family: 'Clash Display';
    background-color: var(--color-bg-0);
    border-bottom: var(--border);
    z-index: 100;

    &  nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.5rem;
    }

    & aside {
      display: flex;
      justify-content: center;
      align-items: center;
      border-left: var(--border);
    }
  }

  .kodama-kai {
    display: flex;
    align-items: center;
    padding: 0.55rem;
    text-decoration: none;

    & img {
      width: 3.25rem;
      margin-right: 1rem;
    }

    & h1 {
      margin: 0;
      font-size: 2.5rem;
      font-weight: 400;
      letter-spacing: 0.25rem;
      color: var(--color-txt-0);
      text-transform: uppercase;
    }  
  }

  .highlights {
    display: flex;
    padding: 0.75rem 0.85rem;
    list-style: none;
    z-index: 1;

    & li {
      margin-left: 1rem;
      padding: 0.8rem 0;

      &:first-child {
        margin-left: 0;
      }

      & a {
        padding: 0.9rem 0.8rem 0.8rem 1.05rem;
        color: var(--color-txt-0);
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.25rem;
        font-weight: 400;
        font-size: 1rem;
      }
    }
  }
</style>