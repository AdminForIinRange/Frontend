"use client";

import {
  Switch,
  Box,
  Divider,
  HStack,
  Text,
  Spacer,
  Icon,
  Center,
  useMediaQuery,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UPC_logo from "../../../img/png/UPC_logo.png";
import UPC_logo_Trans from "../../../img/png/UPC_logo_Trans.png";
import UPC_logo_full_Trans from "../../../img/png/UPC_logo_full_Trans.png";
import {
  FaDiscord,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaBars,
  FaSearch,
} from "react-icons/fa";
import Image from "next/image";

const Navbar = ({ setRent, rent }) => {
  const [isTablet] = useMediaQuery("(max-width: 767px)");
  const [night, setNight] = useState(true);
  const [yValue, setYvalue] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 525) {
        setYvalue(true);
      } else {
        setYvalue(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("yValue updated:", yValue);
  }, [yValue]);

  const links = [
    {
      name: "About Us",
      link: "#aboutUs",
      onClick: null,
    },
    { name: "Events  ", link: "#events", onClick: null },
    { name: "Open Source", link: "#openSource", onClick: null },

    { name: "sponsors", link: "#sponsors", onClick: null },
    {
      name: "Contact",
      link: "",
      onClick: () => {
        isOpen ? onClose() : onOpen();
      },
      speicals: true,
    },
    {
      name: "Join Us",
      link: "",
      onClick: () => {
        isOpen ? onClose() : onOpen();
      },
      speicals: true,
    },
    {
      name: "Login",
      link: "",
      onClick: () => {
        isOpen ? onClose() : onOpen();
      },
      speicals: true,
    },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      {isTablet ? (
        <Box>
          <HStack
            zIndex={"5"}
            position={"fixed"}
            justify={"space-between"}
            w={"100%"}
            py={"3"}
            px={"5"}
          >
            <HStack w={"100%"} h={"100%"} justify={"left"} align={"start"}>
              {" "}
              <Box w={["50px", "50px", "50px", "50px", "50px", "50px"]}>
                <a href="/airbnb">
                  {" "}
                  <Image
                    src={UPC_logo_Trans}
                    width={"100%"}
                    height={"100%"}
                    alt="logo"
                  />
                </a>
              </Box>{" "}
            </HStack>
            <HStack
              h={"100%"}
              zIndex={"5"}
              w={"100%"}
              justify={"right"}
              align={"start"}
            >
              <Box
                backdropFilter="blur(2.5px)"
                bg={"white"}
                border={"1px solid rgb(0, 0, 0,0.25)"}
                boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 10px"}
                rounded={"15px"}
                w={"35px"}
                h={"30px"}
                borderRadius={"10px"}
              >
                <HStack
                  w={"100%"}
                  h={"100%"}
                  justify={"center"}
                  align={"center"}
                >
                  <FaBars size={"15px"} color={"black"} />
                </HStack>
              </Box>
            </HStack>
          </HStack>
        </Box>
      ) : (
        <Box px={["0px", "0px", "0px", "0px", "120px", "120px"]}>
          <HStack
            transform={[
              yValue ? "translateX(0%)" : "translateX(0%)",
              yValue ? "translateX(0%)" : "translateX(0%)",
              yValue ? "translateX(0%)" : "translateX(0%)",
              yValue ? "translateX(0%)" : "translateX(0%)",
              yValue ? "translateX(25%)" : "translateX(0%)",
              yValue ? "translateX(50%)" : "translateX(0%)",
              yValue ? "translateX(50%)" : "translateX(0%)",
            ]}
            transition={"all 0.5s ease-in-out"}
           w={["100%", "100%", "100%", "100%", "765px", "825px"]}
            mt={"5px"}
            mb={"106.5px"}
            zIndex={"5"}
            position={"fixed"}
            justify={[
              "center",
              "center",
              "center",
              "center",
              "center",
              "center",
            ]}
            align={"center"}
          >
            <HStack
              transition={"all 0.3s ease-in-out"}
              h={"100%"}
              justify={[
                "center",
                "center",
                "center",
                "center",
                "center",
                "center",
              ]}
              align={"center"}
              mt={"24.5px"}
              mb={"16.5px"}
              _hover={{
                w: ["95%", "95%", "95%", "90%", "90%", "90%"],
              }}
            >
              <Box
                rounded={"15px"}
                transition={"all 0.5s ease-in-out"}
                _hover={{
                  h: "65",
                }}
                h={"60px"}
              >
                <HStack
                  transition={"all 0.5s ease-in-out"}
                  rounded={"24px"}
                  border={"1px solid #666666"}
                  bg={"rgba(30,30,35, 0.5)"}
                  backdropFilter="blur(2.5px)"
                  w={
                  "100%"
                  }
                  boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 10px"}
                  // bg={"white"}
                  p={"30px"}
                  h={"100%"}
                  justify={"center"}
                  align={"center"}
                  fontFamily={"Poppins"}
                >
                  <Box
                    mr={["0px", "0px", "0px", "0px", "25px", "25px"]}
                    w={["50px", "50px", "50px", "50px", "50px", "50px"]}
                  >
                    <a href="/airbnb">
                      {" "}
                      <Image src={UPC_logo_Trans} width={"100%"} alt="logo" />
                    </a>
                  </Box>

                  {links.map(({ name, link, speicals, onClick }, index) => (
                    <>
                      <HStack
                        display={[
                          "none",
                          "none",
                          "flex",
                          "flex",
                          "flex",
                          "flex",
                        ]}
                        color={"white"}
                        // border={"1px solid #666666"}
                        rounded={"15px"}
                        px={[3, 3, 3, 3, 3, 3]}
                        py={[2, 2, 2, 2, 2, 2]}
                        animation={" all 0.3s ease-in-out"}
                        _hover={{
                          bg: "black",
                          color: speicals
                            ? name === "Join Us"
                              ? "#FFC107"
                              : name === "Login"
                                ? "#2FC107"
                                : name === "FAQ"
                                  ? "#4B8CF9"
                                  : name === "Contact"
                                    ? "#FF69B4"
                                    : "#7EB8F1"
                            : "#7EB8F1",
                          cursor: "pointer",
                        }}
                        key={index}
                        justify={"end"}
                        align={"end"}
                        onClick={onClick}
                        bgClip={speicals ? "text" : "none"}
                        bgGradient={
                          speicals
                            ? name === "Join Us"
                              ? "linear(to-r, blue, yellow)"
                              : name === "Login"
                                ? "linear(to-r, pink, green)"
                                : name === "FAQ"
                                  ? "linear(to-r, green, blue)"
                                  : name === "Contact"
                                    ? "linear(to-r, yellow, pink)"
                                    : "none"
                            : "none"
                        }
                      >
                        <Text
                          whiteSpace={"nowrap"}
                          fontSize={[
                            "12px",
                            "12px",
                            "12px",
                            "12px",
                            "14px",
                            "16px",
                          ]}
                        >
                          <Link href={link}>{name}</Link>
                        </Text>
                      </HStack>
                    </>
                  ))}
                </HStack>
              </Box>
            </HStack>
          </HStack>
        </Box>
      )}

      <Modal isOpen={isOpen} onClose={onClose} size={"3xl"} height={"100%"}>
        <ModalOverlay />
        <ModalContent bgColor={"#FBFCFD"}>
          <ModalBody>
            <>
              <Box p={0} rounded={"lg"} h={"700px"} w={"100%"}>
                <iframe
                  style={{ width: "100%", height: "100%", border: "none" }}
                  src="https://calendly.com/bhattaraianjesh123"
                ></iframe>
              </Box>
            </>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;
