import React from "react";
import {
  Box,
  Heading,
  HStack,
  Flex,
  SimpleGrid,
  IconButton,
  Image,
  VStack,
  Text,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { FaReact, FaHtml5, FaGithub, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import Zoom from "react-reveal/Zoom";
import GoBack from "../GoBack";
import Title from "../Title";
import { StoreContext } from "../Context/StoreContext";
import { useContext } from "react";

const Skills = ({ isDark }) => {
  const { english } = useContext(StoreContext);

  return (
    <Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <GoBack isDark={isDark} />
        </GridItem>

        <GridItem colSpan={1} colStart={[3]} colEnd={[4]}>
          <Title title={english ? "Skills" : "Habilidades"} />
        </GridItem>
      </Grid>

      <Box
        textAlign="center"
        mt={8}
        mb="6rem"
        bg={isDark ? "black" : "white"}
        color={isDark ? "white" : "black"}
        id="skills"
      >
        <SimpleGrid
          columns={{ sm: 2, md: 5 }}
          spacing="8"
          p="10"
          textAlign="center"
          rounded="lg"
        >
          <Zoom>
            <VStack p="2">
              <Text>React Js</Text>

              <FaReact size={60} />
            </VStack>
          </Zoom>

          <Zoom>
            <VStack p="2">
              <Text>JavaScript</Text>

              <IoLogoJavascript size={60} />
            </VStack>
          </Zoom>

          <Zoom>
            <VStack p="2">
              <Text>Bootstrap</Text>

              <FaBootstrap size={60} />
            </VStack>
          </Zoom>

          <Zoom>
            <VStack p="2">
              <Text>Git & GitHub</Text>

              <FaGithub size={60} />
            </VStack>
          </Zoom>

          <Zoom>
            <VStack p="2">
              <Text>HTML5</Text>

              <FaHtml5 size={60} />
            </VStack>
          </Zoom>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Skills;
