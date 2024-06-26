import { StatusBar } from "expo-status-bar";
import Parallax from "./screens/Parallax";
import Gallery from "./screens/Gallery";

export default function App() {
  return (
    <>
      <StatusBar hidden />
      {/* <Parallax /> */}
      <Gallery />
    </>
  );
}
