import { Gallery } from "@/components/gallery";
import Profile from "../components/profile";


export default function Bio() {
  
  return (
    // <div>
    //   <center><p>Ilmuan yang luar biasa</p></center>
    //   <Gallery />
    // </div>
  <div>
    <div className="intro">
      <h1>Selamat datang di website saya!</h1>
    </div>
      <p className="summary">
        Anda dapat membaca uneg-unegku di sini.
        <br /><br />
        <b>Juga ada <i>foto</i> ilmuwan!</b>
      </p>
  </div>
  );
}
