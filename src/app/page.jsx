import Image from "next/image";
import styles from "./page.module.css";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Box mx={["0px", "0px", "60px", "60px", "120px", "120px"]}>
        <Navbar />
      </Box>
    </>
  );
}
