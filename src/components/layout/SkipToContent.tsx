export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-3 focus:rounded-lg focus:bg-[#101010] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#c7a86b] focus:ring-offset-2"
    >
      Μετάβαση στο κύριο περιεχόμενο
    </a>
  );
}
