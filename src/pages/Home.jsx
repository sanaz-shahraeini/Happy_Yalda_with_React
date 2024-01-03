import { useEffect, useRef, useCallback } from "react";

import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { hexagon, links } from "../constants/particles";
import bg02 from "../assets/bg02.jpg";

const Home = () => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);

  const strings = [
    "امشب را به نور قرن‌ها قدمت، جاری نگه داریم …",
    "شب یلدا ، این شب زایش مهر ، شب زایش نور و روشنایی",
    "بر تو ایرانی مبارک \n",
    "مجتمع فنی تهران نمایندگی مشهد",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["[[ یلدا مبارک ]]"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 10,
      showCursor: false,
    });

    const typedInfo = new Typed(infoEl.current, {
      strings: strings,
      startDelay: 1500,
      typeSpeed: 60,
      backSpeed: 10,
      backDelay: 20,
      loop: true,
      showCursor: false,
    });

    return () => {
      typedName.destroy();
      typedInfo.destroy();
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg02})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",

        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
      />
      <Typography
        ref={nameEl}
        variant="h3"
        color="white"
        sx={{ position: "fixed", top: 100, right: 400 }}
      ></Typography>
      <Typography
        ref={infoEl}
        variant="h4"
        color="whitesmoke"
        sx={{
          textDecoration: "underline",
          textDecorationColor: "#1976d2",
          position: "fixed",
          top: 200,
          right: 100,
        }}
      ></Typography>
    </Box>
  );
};


export default Home;







