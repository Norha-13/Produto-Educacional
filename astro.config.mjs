// @ts-check
import { defineConfig } from 'astro/config';
import unocss from "@unocss/astro";

// https://astro.build/config
export default defineConfig({
    // basa url
    base: '/Produto-Educacional/',
    outDir: 'docs',
    integrations: [
        unocss({
            injectReset: true
        })
    ],
});
