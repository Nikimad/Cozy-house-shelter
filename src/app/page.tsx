import Banner from "./_components/Banner";
import About from "./_sections/about";
import Help from "./_sections/help/Help";

const Home = () => (
  <>
<script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.7/iframeResizer.min.js"></script>
<iframe onload="iFrameResize({ log: false, checkOrigin: false })" src="https://2ca6c9d19ad94bfc9105c1e4c89fc4cc.elf.site" style="border: none; width: 100%" allow="fullscreen"></iframe>
    <Banner />
    <About />
    <Help />
  </>
);

export default Home;
