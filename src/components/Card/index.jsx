import { ChevronDownIcon, Icon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  VStack,
  useBoolean,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaRegStar } from "react-icons/fa";
import { CardResults } from "../CardResults";
import { useRepo } from "../../contexts/RepositoryProvider/index";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export const Card = () => {
  const { totalCount, topics } = useRepo();

  const totalCountFormated = new Intl.NumberFormat().format(totalCount);

  const [starOn, setStarOn] = useBoolean();

  const [isMobile] = useMediaQuery("(max-width: 425px)");

  return (
    <Flex direction="column" maxWidth="800px" px="5">
      {isMobile ? (
        <Flex
          py={2}
          px={5}
          h={["170px", "120px"]}
          border="1px"
          mt="5"
          borderRadius="6"
          borderColor="gray.400"
          mb="5"
          align="flex-start"
        >
          <Image
            src={
              "https://yt3.ggpht.com/ytc/AMLnZu82yCgPSY0dJOZcqw7uwBAZj5Lps9Vmmx9JQ2pr=s900-c-k-c0x00ffffff-no-rj"
            }
            w="62px"
            h="62px"
          />
          {topics.map((item, index) => {
            return index === 0 ? (
              <VStack align="left" ml="4" mr="4" w="80%">
                <Heading as="h3" size="lg" key={index}>
                  {item.display_name}
                </Heading>
                <Text key={item.display_name} fontSize="12px">
                  {item.short_description}
                </Text>
                <Button
                  mt="4"
                  color="gray.500"
                  borderWidth="1px"
                  borderColor="gray.400"
                  leftIcon={<FaRegStar />}
                  h="30px"
                  w="50%"
                  fontSize="xs"
                  onClick={setStarOn.toggle}
                  _hover={{
                    bg: "gray.50",
                  }}
                >
                  {starOn ? "Unstar" : "Star"}
                </Button>
              </VStack>
            ) : null;
          })}
        </Flex>
      ) : (
        <Flex
          py={2}
          px={5}
          h={["", "150px", "160px", "120px"]}
          border="1px"
          mt="5"
          borderRadius="6"
          borderColor="gray.400"
          mb="5"
          align="flex-start"
        >
          <Image
            src={
              "https://yt3.ggpht.com/ytc/AMLnZu82yCgPSY0dJOZcqw7uwBAZj5Lps9Vmmx9JQ2pr=s900-c-k-c0x00ffffff-no-rj"
            }
            w="62px"
            h="62px"
          />
          {topics.map((item, index) => {
            return index === 0 ? (
              <VStack align="left" ml="4" mr="4" w="80%">
                <Heading as="h3" size="lg" key={index}>
                  {item.display_name}
                </Heading>
                <Text key={item.display_name}>{item.short_description}</Text>
              </VStack>
            ) : null;
          })}

          <Button
            color="gray.500"
            borderWidth="1px"
            borderColor="gray.400"
            leftIcon={<FaRegStar />}
            h="30px"
            fontSize="xs"
            onClick={setStarOn.toggle}
            _hover={{
              bg: "gray.50",
            }}
          >
            {starOn ? "Unstar" : "Star"}
          </Button>
        </Flex>
      )}
      <Flex
        justify={["center", "center", "space-between"]}
        align="center"
        mb="5"
        direction={["column", "column", "row"]}
        w={["300", "500", "800"]}
      >
        <HStack align="center">
          <Text as="h4" fontWeight="bold">
            Showing {totalCountFormated} available repository results
          </Text>
          <Icon as={AiOutlineQuestionCircle} />
        </HStack>

        <Menu>
          <MenuButton
            fontSize="10px"
            as={Button}
            w="50"
            rightIcon={<ChevronDownIcon />}
          >
            Sort: Best Match
          </MenuButton>
          <MenuList>
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="desc">Descending</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Flex>
      <CardResults />
    </Flex>
  );
};
