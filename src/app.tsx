import { Calculator } from "./components/Calculator";
import { ExpCards } from "./components/ExpCards";

export function App() {
  return (
    <div class="px-4 py-8 mx-auto min-h-screen flex flex-col gap-6">
      <div class="container mx-auto flex flex-col items-center justify-center gap-6">
        <h1 class="text-4xl font-bold">FFXIV Exp Calculator</h1>
        <Calculator />
        <ExpCards />
      </div>
      <footer class="footer footer-center max-w-sm mx-auto">
        <aside>
          <p>
            made by jkap. if you have problems send me a dm{" "}
            <a class="link" href="https://bsky.app/profile/jkap.gay">
              on bluesky
            </a>
          </p>
          <p>
            this exists solely because I am leveling all my crafters right now
            and couldn't find a single tool that already did this. yeah i could
            pull up the charts and do the math myself but that sucks.
          </p>
        </aside>
      </footer>
    </div>
  );
}
