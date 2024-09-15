import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ElementPlus from 'unplugin-element-plus/vite';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        ElementPlus(),
        viteCompression({
            algorithm: "brotliCompress",
            verbose: true,
        })
    ],
    server: {				
          host: '0.0.0.0'	
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        outDir: 'stable-ui' // 打包文件的输出目录
    },
    base: '/stable-ui/'
});
