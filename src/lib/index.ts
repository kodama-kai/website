// --------------------------------------------- 
// ---------------- KODAMA KAI ----------------- 
// --------------------------------------------- 
// Author: Adnan Faize                           
// Copyright (c) Kodama Kai. All rights reserved 
// --------------------------------------------- 
// --------------------------------------------- 

import { writable } from "svelte/store";

export const is_big_screen = writable(true); // Check screen size (see "src/routes/layout.svelte") 
export const is_menu_open = writable(false); // Check menu open (see "lib/components/layout/header.svelte")

// For quick scroll buttons on header
interface HighlightSectionInterface {
  section_element : HTMLElement,
  show_name : string
}

const createHighlightSections = () => {
  const { subscribe, set, update } = writable<HighlightSectionInterface[]>([]);

  return {
    subscribe,
    push : (highlight_section : HighlightSectionInterface) => update((value) => {
      value.push(highlight_section);
      return value;
    }),
    reset : () => set([])
  };
}

const highlight_sections = createHighlightSections();

export {
  highlight_sections,
  type HighlightSectionInterface
}
