import Image from "next/image";
import Profile from "../components/profile";


export default function Home() {
  
  return (
    <div>
      <center><p>Ilmuan yang luar biasa</p></center>
      <div className="columns-3"><Profile/ >
      <Profile/ >
      <Profile/ >
      </div>
    </div>
  );
}
