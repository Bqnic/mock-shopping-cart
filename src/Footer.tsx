export default function Footer() {
  return (
    <footer className="flex justify-center items-center fixed bottom-0 border-t border-black w-screen bg-neutral-100 p-3">
      <p>
        Built by{" "}
        <a
          className="underline hover:text-lg transition-all"
          href="https://github.com/Bqnic"
          target="_blank"
        >
          Bqnic
        </a>{" "}
        |
        <a
          className="underline hover:text-lg transition-all"
          href="https://github.com/Bqnic/mock-shopping-cart"
          target="_blank"
        >
          {" "}
          Source code
        </a>
      </p>
    </footer>
  );
}
