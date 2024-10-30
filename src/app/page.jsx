import Image from "next/image";
import styles from "./page.module.css";
import { Box, Text, VStack} from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import InitialLanding from "./components/landingPage/initialLanding/initialLanding";
import onePieceOFbackground from "../img/svg/onePieceOFbackground.svg";
export default function Home() {
  return (
    <>
      <Box mx={["10px", "15px", "60px", "60px", "120px", "120px"]}>
        <Navbar />
        <InitialLanding />
      </Box>

      <VStack
        className="animate__animated animate__fadeIn"
        justify={"center"}
        align={"center"}
        px={"5px"}
        position={"absolute"}
        top={"0px"}
        zIndex={"-4"}
        left={0}
        right={0}
      >
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
      </VStack>
    </>
  );
}
