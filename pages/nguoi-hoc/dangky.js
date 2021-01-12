
import dynamic from "next/dynamic";

const Scroll = dynamic(
  () => {
    return import("../../components/scrollToFooter/scroll2");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div style={{ minHeight: "1000px" }}>
      <h1>Home</h1>
      <Scroll />
    </div>
  );
}