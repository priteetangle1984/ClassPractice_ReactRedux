import Headings from "../../components/Headings";
import DarkMode from "../../components/DarkMode";
import "./styles.css";

export default function UseContextPage() {
  return (
    <>
      <h1> This is the dark mode example of useContext</h1>
      <DarkMode />
      <h1>This is the headings useContext example</h1>
      <Headings />
    </>
  );
}
