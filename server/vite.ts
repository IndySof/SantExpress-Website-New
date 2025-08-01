import { createServer } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const PORT = process.env.PORT || 5000;

async function startServer() {
  const vite = await createServer({
    plugins: [
      react(),
      runtimeErrorOverlay(),
      ...(process.env.NODE_ENV !== "production" &&
      process.env.REPL_ID !== undefined
        ? [
            await import("@replit/vite-plugin-cartographer").then((m) =>
              m.cartographer(),
            ),
          ]
        : []),
    ],
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "client", "src"),
        "@assets": path.resolve(process.cwd(), "attached_assets"),
      },
    },
    root: path.resolve(process.cwd(), "client"),
    build: {
      outDir: path.resolve(process.cwd(), "dist/public"),
      emptyOutDir: true,
    },
    server: {
      host: "0.0.0.0",
      port: PORT,
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  });

  await vite.listen();
  console.log(`✅ Vite dev server running on port ${PORT}`);
  vite.printUrls();
}

startServer().catch(console.error);