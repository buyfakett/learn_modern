import { appTools, defineConfig } from '@modern-js/app-tools';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
    runtime: {
        router: true,
    },
    plugins: [
        appTools({
            bundler: 'rspack',
        }),
        tailwindcssPlugin(),
    ],
    // 修改html为默认打包
    output: {
        distPath: {
            html: '',
        },
        filename: {
            html: 'index.html',
        },
    },
    html: {
        disableHtmlFolder: true,
    },
});
