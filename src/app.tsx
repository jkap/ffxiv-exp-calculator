import { Calculator } from "./components/Calculator";

export function App() {
  return (
    <div class="px-4 py-8 mx-auto min-h-screen flex flex-col gap-6">
      <div class="container mx-auto flex flex-col items-center justify-center gap-6">
        <h1 class="text-4xl font-bold">
          FFXIV Exp Calculator
        </h1>
        <Calculator />
      </div>
      <footer class="footer footer-center">
        <aside>
          <p>
            made by jkap. if you have problems send me a dm{" "}
            <a class="link" href="https://bsky.app/profile/jkap.gay">
              on bluesky
            </a>
          </p>
        </aside>
      </footer>
    </div>
  );
}
