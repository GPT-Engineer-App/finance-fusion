import { Box, Container, Flex, Heading, HStack, Link, Text, VStack, Image, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">Markets</Link>
            <Link href="#" color="white">World</Link>
            <Link href="#" color="white">Opinion</Link>
            <Link href="#" color="white">More</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Top News Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h2" size="xl" mb={4}>Top News</Heading>
          <VStack spacing={8} align="stretch">
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Heading as="h3" size="lg" mt={4}>Headline for Top News Article</Heading>
              <Text mt={2}>Brief description of the news article to give readers an idea of the content.</Text>
            </Box>
            <Divider />
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Heading as="h3" size="lg" mt={4}>Headline for Another News Article</Heading>
              <Text mt={2}>Brief description of the news article to give readers an idea of the content.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Market Data</Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="md">Market Index 1</Heading>
              <Text>Details about market index 1.</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="md">Market Index 2</Heading>
              <Text>Details about market index 2.</Text>
            </Box>
          </VStack>
          <Heading as="h2" size="lg" mt={8} mb={4}>Trending Topics</Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4} borderRadius="md">
              <Text>Trending Topic 1</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Text>Trending Topic 2</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link href="#" color="white">Contact</Link>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;