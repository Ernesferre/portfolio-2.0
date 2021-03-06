import React from "react";
import Header from "./Header";
import Sections from "./Sections";
import { useContext } from "react";
import Ernesto from "../assets/Ernesto.jpg";
import { FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Image,
  Box,
  VStack,
  Heading,
  Text,
  Grid,
  IconButton,
  Link,
} from "@chakra-ui/react";
import Jump from "react-reveal/Jump";
import Swing from "react-reveal/Swing";
import { useHistory } from "react-router-dom";
import { StoreContext } from "./Context/StoreContext";

const Presentation = () => {
  const history = useHistory();

  const { english } = useContext(StoreContext);

  const handleStart = () => {
    // history.push('/')
    window.location.replace("/");
  };

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Box
        bg={isDark ? "black" : "white"}
        // h="300px"
      >
        <Grid placeItems="center" p={3}>
          <Jump>
            <Link
              textDecoration="none"
              _hover={{
                textdecoration: "none",
              }}
            >
              <Heading
                border="2px"
                borderRadius="full"
                borderColor={isDark ? "white" : "black"}
                bg="yellow.600"
                color="black"
                p={7}
                mb={2}
                letterSpacing={7}
                // boxShadow="dark-lg"
                textDecoration="none"
                size="4xl"
                onClick={handleStart}
                fontFamily="Amatic SC"
                _hover={{
                  boxShadow: "0 0 20px #bcbcbc",
                }}
              >
                EF
              </Heading>
            </Link>
          </Jump>

          <VStack>
            <Swing>
              <Heading
                color={isDark ? "yellow.600" : "black"}
                fontSize="6xl"
                letterSpacing={4}
                fontFamily="Amatic SC"
                fontWeight="700"
                textAlign="center"
              >
                Ernesto Ferreyra
              </Heading>
            </Swing>

            {english ? (
              <Text
                color={isDark ? "gray.400" : "yellow.700"}
                fontSize="2xl"
                fontFamily="Amatic SC"
                fontWeight="700"
                letterSpacing={2}
              >
                Front-End Developer
              </Text>
            ) : (
              <Text
                color={isDark ? "gray.400" : "yellow.700"}
                fontSize="2xl"
                fontFamily="Amatic SC"
                fontWeight="700"
                letterSpacing={2}
              >
                Desarrollador FRONT-END
              </Text>
            )}
          </VStack>
        </Grid>
      </Box>

      <Sections isDark={isDark} />
    </>
  );
};

export default Presentation;
