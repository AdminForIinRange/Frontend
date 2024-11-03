import { Box, VStack, Text, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { GoTriangleRight } from "react-icons/go";
import Spark from "../../../../img/svg/Spark.svg";

import Hackathon from "../../../../img/png/Hackathon.jpg";
import backgroundGradient from "../../../../img/png/backgroundGradient.png";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

const InitialLanding = () => {
  return (
    <>
      <Box >
        <HStack 
          justify={"start"}
          align={"start"}
          w={"100%"}
          h={"100%"}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
          //   border={"1px solid red"}
        >
          <VStack mt={"50px"}
            // border={"1px solid blue"}
            align={"start"}
            justify={"start"}
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            h={["100%", "100%", "100%", "100%", "100%", "100%"]}
          >
            <VStack
              mt={"100px"}
              lineHeight={["65px", "65px", "75px", "75px", "95px", "95px"]}
              letterSpacing={"0px"}
              w={"100%"}
              justify={"left"}
              align={"left"}
              gap={"0px"}
            >
              <HStack justify={"center"} align={"start"}>
                <HStack
                  //   data-aos="fade-up"
                  w={"100%"}
                  justify={[
                    "center",
                    "center",
                    "center",
                    "start",
                    "start",
                    "start",
                  ]}
                  align={"center"}
                  h={"100%"}
                >
                  {" "}
                  <HStack
                    h={"40px"}
                    // data-aos="fade-up"
                    rounded={"100px"}
                    justify={"start"}
                    align={"center"}
                    bg={"#1E1E23"}
                    border={"1px solid #666666"}
                    boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 10px"}
                    px={[5, 5, 5, 5, 5, 5]}
                    py={[1, 1, 2, 2, 2, 2]}
                  >
                    <Box>
                      <GoTriangleRight color={"white"} fontSize={"20px"} />
                    </Box>
                    <Box>
                      <Text
                        textShadow={"0px 0px 100px black"}
                        textAlign={"center"}
                        color={"white"}
                        fontSize={[
                          "12px",
                          "12px",
                          "12px",
                          "14px",
                          "14px",
                          "14px",
                        ]}
                        fontWeight={500}
                      >
                        Join The Community
                      </Text>
                    </Box>
                  </HStack>
                </HStack>

                <Box w={["30px", "30px", "35px", "45px", "65px", "95px"]}>
                  <Image src={Spark} alt="spark" />
                </Box>
              </HStack>

              <Text
                fontSize={["55px", "75px", "75px", "65px", "65px", "95px"]}
                fontWeight={600}
                textAlign={[
                  "center",
                  "center",
                  "center",
                  "left",
                  "left",
                  "left",
                ]}
                fontFamily={"Poppins"}
                bgClip="text" // Clip the background to the text
                className="animate__animated animate__fadeInDown"
                data-aos="fade-down"
                color={"white"} // Adding white outline effect
                bgGradient="linear(to-r, green, red)"
                // textShadow={"0px 0px 5px white"}
                as={"span"}
              >
                Learn,
              </Text>

              <Text
                fontSize={["55px", "75px", "75px", "65px", "65px", "95px"]}
                fontWeight={600}
                textAlign={[
                  "center",
                  "center",
                  "center",
                  "left",
                  "left",
                  "left",
                ]}
                fontFamily={"Poppins"}
                bgClip="text" // Clip the background to the text
                className="animate__animated animate__fadeInDown"
                data-aos="fade-down"
                color={"white"} // Adding white outline effect
                bgGradient="linear(to-r, green, red)"
                // textShadow={"0px 0px 5px white"}
                as={"span"}
              >
                Collaborate,
              </Text>

              <Text
                fontSize={["55px", "75px", "75px", "65px", "65px", "95px"]}
                fontWeight={600}
                textAlign={[
                  "center",
                  "center",
                  "center",
                  "left",
                  "left",
                  "left",
                ]}
                fontFamily={"Poppins"}
                bgClip="text" // Clip the background to the text
                className="animate__animated animate__fadeInDown"
                data-aos="fade-down"
                color={"white"} // Adding white outline effect
                bgGradient="linear(to-r, green, red)"
                // textShadow={"0px 0px 5px white"}
                as={"span"}
              >
                Code Your Future
              </Text>
            </VStack>

            <Text
              w={["100%", "100%", "90%", "90%", "80%", "80%"]}
              mt={["25px", "25px", "25px", "50px", "50px", "50px"]}
              fontSize={["20px", "20px", "24px", "24px", "24px", "24px"]}
              fontWeight={300}
              textAlign={["center", "center", "center", "left", "left", "left"]}
              fontFamily={"Poppins"}
              bgClip="text" // Clip the background to the text
              className="animate__animated animate__fadeInDown"
              data-aos="fade-down"
              color={"white"} // Adding white outline effect
              bgGradient="linear(to-r, green, red)"
              // textShadow={"0px 0px 5px white"}
              as={"span"}
            >
              Join a community of developers building, competing, and growing
              through coding events.
            </Text>
          </VStack>

          <VStack mt={"30px"}
      
            // border={"1px solid red"}
            align={"start"}
            justify={"start"}
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            h={["100%", "100%", "100%", "100%", "100%", "100%"]}
          >
            <Box
              w={"100%"}
              h={["400px", "400px", "450px", "600px", "600px", "600px"]}
              bg={"rgba(30,30,35, 0.5)"}
              rounded={"24px"}
              border={"1px solid #666666"}
              p={["10px", "10px", "10px", "20px", "20px", "20px"]}
            >
              {" "}
              <Box
                w={"100%"}
                h={"100%"}
                rounded={"48px"}
                style={{
                  backgroundImage: `url(${Hackathon.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Box>
            <HStack
              wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
              justify={"center"}
              align={"center"}
              w={"100%"}
              h={"100%"}
            >
              <Box
                w={"100%"}
                h={"150px"}
                bg={"rgba(30,30,35, 0.5)"}
                rounded={"24px"}
                border={"1px solid #666666"}
                p={"20px"}
              >
                <HStack justify={"space-between"} align={"start"} w={"100%"}>
                  {" "}
                  <Text
                    fontSize={["22px", "22px", "22px", "22px", "22px", "22px"]}
                    fontWeight={600}
                    textAlign={"left"}
                    fontFamily={"Poppins"}
                    bgClip="text" // Clip the background to the text
                    className="animate__animated animate__fadeInDown"
                    data-aos="fade-down"
                    color={"white"} // Adding white outline effect
                    bgGradient="linear(to-r, green, red)"
                    // textShadow={"0px 0px 5px white"}
                    as={"span"}
                  >
                    Member's
                  </Text>
                  <Text
                    transition={"all 0.5s ease"}
                    _hover={{ cursor: "pointer", transform: "rotate(360deg)" }}
                    bg={"#62E2E9"}
                    rounded={"full"}
                    p={2}
                    color={"black"}
                    fontSize={["22px", "22px", "22px", "22px", "22px", "22px"]}
                  >
                    <GoArrowUpRight />
                  </Text>
                </HStack>

                <HStack
                  justify={"start"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                >
                  <Text
                    fontSize={["22px", "22px", "22px", "22px", "22px", "52px"]}
                    fontWeight={300}
                    textAlign={"left"}
                    fontFamily={"Poppins"}
                    bgClip="text" // Clip the background to the text
                    className="animate__animated animate__fadeInDown"
                    data-aos="fade-down"
                    color={"white"} // Adding white outline effect
                  >
                    100+
                  </Text>
                  <Text
                    fontSize={["22px", "22px", "22px", "22px", "22px", "22px"]}
                    fontWeight={200}
                    textAlign={"left"}
                    fontFamily={"Poppins"}
                    bgClip="text" // Clip the background to the text
                    className="animate__animated animate__fadeInDown"
                    data-aos="fade-down"
                    color={"white"} // Adding white outline effect
                  >
                    Something
                  </Text>
                </HStack>
              </Box>
              <Box
                w={"100%"}
                h={"150px"}
                bg={"rgba(30,30,35, 0.5)"}
                rounded={"24px"}
                border={"1px solid #666666"}
                p={"20px"}
              >
                <HStack justify={"space-between"} align={"start"} w={"100%"}>
                  {" "}
                  <Text
                    fontSize={["22px", "22px", "22px", "22px", "22px", "22px"]}
                    fontWeight={600}
                    textAlign={"left"}
                    fontFamily={"Poppins"}
                    bgClip="text" // Clip the background to the text
                    className="animate__animated animate__fadeInDown"
                    data-aos="fade-down"
                    color={"white"} // Adding white outline effect
                    bgGradient="linear(to-r, green, red)"
                    // textShadow={"0px 0px 5px white"}
                    as={"span"}
                  >
                    Contruabtion's
                  </Text>
                  <Text
                    transition={"all 0.5s ease"}
                    _hover={{ cursor: "pointer", transform: "rotate(360deg)" }}
                    bg={"#0752EA"}
                    rounded={"full"}
                    p={2}
                    color={"black"}
                    fontSize={["22px", "22px", "22px", "22px", "22px", "22px"]}
                  >
                    <GoArrowUpRight />
                  </Text>{" "}
                </HStack>

                <HStack
                  justify={"start"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                >
                  <Text
                    fontSize={["22px", "22px", "22px", "22px", "22px", "52px"]}
                    fontWeight={300}
                    textAlign={"left"}
                    fontFamily={"Poppins"}
                    bgClip="text" // Clip the background to the text
                    className="animate__animated animate__fadeInDown"
                    data-aos="fade-down"
                    color={"white"} // Adding white outline effect
                  >
                    100+
                  </Text>
                  <Text
                    fontSize={["22px", "22px", "22px", "22px", "22px", "22px"]}
                    fontWeight={200}
                    textAlign={"left"}
                    fontFamily={"Poppins"}
                    bgClip="text" // Clip the background to the text
                    className="animate__animated animate__fadeInDown"
                    data-aos="fade-down"
                    color={"white"} // Adding white outline effect
                  >
                    Something
                  </Text>
                </HStack>
              </Box>
            </HStack>
          </VStack>
        </HStack>
      </Box>

      <HStack
        className="animate__animated animate__fadeIn"
        justify={"center"}
        align={"center"}
        px={"5px"}
        position={"absolute"}
        top={["500px", "300px", "250px", "75px", "75px", "75px"]}
        zIndex={"-1"}
        left={["0", "0", "0", "800", "800", "800"]}
        right={0}
        transform={"rotate(0deg)"}
      >
        <Image src={backgroundGradient} alt="BackGround" />
      </HStack>

      <HStack
        className="animate__animated animate__fadeIn"
        justify={"center"}
        align={"center"}
        px={"5px"}
        position={"absolute"}
        top={["700px", "700px", "700px", "75px", "75px", "75px"]}
        zIndex={"-1"}
        left={["0", "0", "0", "800", "800", "800"]}
        right={0}
      >
        <Image src={backgroundGradient} alt="BackGround" />
      </HStack>
    </>
  );
};

export default InitialLanding;
