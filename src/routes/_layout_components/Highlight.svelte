<!--
  --------------------------------------------- 
  ---------------- KODAMA KAI ----------------- 
  --------------------------------------------- 
  Author: Adnan Faize                           
  Copyright (c) Kodama Kai, All Rights Reserved 
  --------------------------------------------- 
  --------------------------------------------- 
-->

<script context="module" lang="ts">
  import { gsap, Power3 } from "gsap";

  let highlight : Element;
  
  let links : Element[];
  let active_link : number | null;

  const setActiveLinkIndex = (index : number | null) => {
    active_link = index;
    tweenHighlightArea(getActiveLink());
  }

  const setActiveLink = (id : string | null) => {
    if (!id) {
      active_link = null;
      return;
    }

    links.some((element, index) => {
      if (element.id === id) {
        active_link = index;
        return true;
      }
    });
    
    tweenHighlightArea(getActiveLink());
  }

  const getActiveLinkIndex = () => active_link;

  const getActiveLink = () => active_link !== null ? links[active_link] : null;

  const getTargetArea = (target : Element) => {
    const pos = target.getBoundingClientRect();
    const top = pos.top;
    const left = pos.left;
    const width = pos.width;
    const height = pos.height;
    return { left, height, top, width };
  }
  
  const tweenHighlightArea = (target : Element | null) => {
    if (!target) {
      highlight.classList.add("inactive");
      return;
    }

    highlight.classList.remove("inactive");
    const { left, height, top, width } = getTargetArea(target);
    gsap.to(highlight, { left, top, width, height, ease: Power3.easeInOut, duration: 0.5 });
  }

  const enterHover = (event : Event) => tweenHighlightArea(event.target as Element);
  const exitHover = () => tweenHighlightArea(getActiveLink());

  export {
    setActiveLink,
    setActiveLinkIndex,
    getActiveLinkIndex,
    enterHover,
    exitHover
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";

  export let links_container : Element;
  export let class_name : string = "";

  const setHighlightArea = (target : Element | null) => {
    if (!target) return;
    const { left, height, top, width } = getTargetArea(target);
    gsap.set(highlight, { top, left, width, height });
  } 

  const initHighlight = async () => {
    await links_container;
    links = Array.from(await links_container.getElementsByClassName("link"));
    if (!links.length) return;
    setHighlightArea(getActiveLink());
  }

  onMount(initHighlight);
</script>

<svelte:window on:resize={initHighlight} />

<span bind:this={highlight} class={class_name} />

<style>
  span {
    position: absolute;
    background-color: var(--color-bg-1);
    opacity: 1;
    border-radius: 0.8rem;
  }

  .inactive {
    opacity: 0;
    transition: 0.5s opacity ease-in-out;
  }
</style>