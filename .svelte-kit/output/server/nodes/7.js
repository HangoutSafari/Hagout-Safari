import * as server from '../entries/pages/profile/_slug_/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/profile/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/7.c1db430b.js","_app/immutable/chunks/index.2921e8e9.js"];
export const stylesheets = [];
export const fonts = [];
