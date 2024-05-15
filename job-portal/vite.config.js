import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})



// import { defineConfig, ConfigEnv } from 'vite';

// export default defineConfig((_configEnv) => {
//     return {
//         server: {
//             port: 3000,
//             strictPort: true,
//             hmr: {
//                  protocol: 'ws',
//                  host: 'localhost'
//             },
//         },
//         base: './'    
//     }
// });