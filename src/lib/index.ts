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
