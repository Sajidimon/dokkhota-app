import React from 'react';
import { Box, Heading, Text, Input, Button, Flex, Grid, IconButton } from '@chakra-ui/react';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';

const CustomTopBar = () => {
    const navigate = useNavigate();
    return (
        <Flex 
            position="fixed" top="0" w="full" zIndex="50" align="center" justify="space-between" 
            px={6} py={4} bg="rgba(255,255,255,0.8)" backdropFilter="blur(16px)" 
            boxShadow="0 10px 30px -15px rgba(198,255,0,0.3)" bgGradient="linear(to-b, rgba(224,207,252,0.2), transparent)"
        >
            <Flex align="center" gap={4}>
                <IconButton 
                    icon={<Box as="span" className="material-symbols-outlined" fontSize="3xl">arrow_back</Box>}
                    variant="unstyled" color="#C6FF00" _hover={{ transform: 'scale(1.05)' }} _active={{ transform: 'scale(0.95)' }}
                    transition="transform 0.2s" onClick={() => navigate(-1)} aria-label="Go back"
                />
                <Heading as="h1" fontFamily="heading" fontWeight="bold" fontSize="2xl" textTransform="uppercase" letterSpacing="tight" color="#C6FF00">
                    ব্যবহারিক অভিধান
                </Heading>
            </Flex>
        </Flex>
    );
};

const Dictionary = () => {
    return (
        <Layout topBar={<CustomTopBar />}>
            <Box pb={8} spaceY={12} sx={{ '& > * + *': { marginTop: '3rem' } }}>
                {/* Hero/Search Section */}
                <Box position="relative">
                    <Box position="absolute" inset="-4" bg="brand.primary-fixed" opacity={0.2} filter="blur(3xl)" borderRadius="4rem" zIndex={0} />
                    <Box position="relative" zIndex={10} bg="brand.surface-container-highest" borderRadius="xl" p={8} display="flex" flexDir="column" gap={6} boxShadow="2xl" overflow="hidden">
                        <Box position="absolute" right="-10" bottom="-10" w="48" h="48" bg="brand.primary" borderRadius="full" filter="blur(2xl)" opacity={0.4} />
                        <Heading as="h2" fontFamily="heading" fontSize="4xl" fontWeight="bold" color="brand.on-surface" zIndex={10} position="relative">
                            শব্দের অর্থ খুঁজুন<br/><Box as="span" color="brand.primary">দ্রুত ও সহজে</Box>
                        </Heading>
                        <Flex position="relative" zIndex={10} w="full" maxW="xl" role="group">
                            <Box as="span" className="material-symbols-outlined" position="absolute" left="6" top="50%" transform="translateY(-50%)" color="brand.on-surface-variant" zIndex={20}>search</Box>
                            <Input 
                                w="full" pl={16} pr={24} py={8} borderRadius="full" bg="brand.surface-container-lowest" border="none" 
                                _focus={{ ring: 2, ringColor: 'brand.primary', outline: 'none' }} boxShadow="lg" fontSize="lg" color="brand.on-surface" fontWeight="semibold" 
                                _placeholder={{ color: 'rgba(89,92,93,0.5)' }} placeholder="টার্ম খুঁজুন..." transition="all 0.2s"
                            />
                            <Button 
                                position="absolute" right="2" top="50%" transform="translateY(-50%)" bg="brand.primary" color="brand.on-primary-fixed" 
                                px={6} py={6} borderRadius="full" fontWeight="bold" _hover={{ transform: 'translateY(-50%) scale(1.05)' }} transition="transform 0.2s" 
                                boxShadow="4px 4px 0px 0px rgba(0,0,0,1)" border="2px solid black"
                            >
                                খুঁজুন
                            </Button>
                        </Flex>
                    </Box>
                </Box>

                {/* Featured Categories */}
                <Box spaceY={4} sx={{ '& > * + *': { marginTop: '1rem' } }}>
                    <Heading as="h3" fontFamily="heading" fontSize="xl" fontWeight="bold" color="brand.on-surface">ক্যাটাগরি</Heading>
                    <Flex wrap="wrap" gap={3}>
                        <Button bg="brand.secondary-container" color="brand.on-secondary-container" borderRadius="full" px={6} py={6} fontWeight="bold" fontSize="sm" _hover={{ transform: 'scale(1.05)' }} transition="transform 0.2s">সবগুলো</Button>
                        <Button bg="brand.surface-container-low" color="brand.on-surface" borderRadius="full" px={6} py={6} fontWeight="bold" fontSize="sm" border="1px solid" borderColor="rgba(171,173,174,0.15)" _hover={{ bg: 'brand.surface-container-highest' }} transition="colors 0.2s">ব্যবসায়িক</Button>
                        <Button bg="brand.surface-container-low" color="brand.on-surface" borderRadius="full" px={6} py={6} fontWeight="bold" fontSize="sm" border="1px solid" borderColor="rgba(171,173,174,0.15)" _hover={{ bg: 'brand.surface-container-highest' }} transition="colors 0.2s">প্রযুক্তি</Button>
                        <Button bg="brand.surface-container-low" color="brand.on-surface" borderRadius="full" px={6} py={6} fontWeight="bold" fontSize="sm" border="1px solid" borderColor="rgba(171,173,174,0.15)" _hover={{ bg: 'brand.surface-container-highest' }} transition="colors 0.2s">ফ্রিল্যান্সিং</Button>
                        <Button bg="brand.surface-container-low" color="brand.on-surface" borderRadius="full" px={6} py={6} fontWeight="bold" fontSize="sm" border="1px solid" borderColor="rgba(171,173,174,0.15)" _hover={{ bg: 'brand.surface-container-highest' }} transition="colors 0.2s">ডিজাইন</Button>
                    </Flex>
                </Box>

                {/* Dictionary List */}
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
                    {/* Card 1 */}
                    <Box as="article" bg="brand.surface-container-lowest" borderRadius="lg" p={6} position="relative" overflow="hidden" role="group" _hover={{ transform: 'translateY(-4px)' }} transition="transform 0.3s" boxShadow="sm" border="1px solid" borderColor="rgba(171,173,174,0.15)">
                        <Box position="absolute" top="0" right="0" w="16" h="16" bg="brand.secondary-container" borderBottomLeftRadius="full" mt="-8" mr="-8" _groupHover={{ transform: 'scale(1.5)' }} transition="transform 0.5s" zIndex={0} />
                        <Flex position="relative" zIndex={10} flexDir="column" h="full" gap={4}>
                            <Flex justify="space-between" align="flex-start">
                                <Box>
                                    <Heading as="h3" fontFamily="heading" fontSize="2xl" fontWeight="bold" color="brand.on-surface" mb={1}>Stakeholder</Heading>
                                    <Text color="brand.primary" fontWeight="bold" fontSize="lg">অংশীজন</Text>
                                </Box>
                                <IconButton variant="unstyled" color="brand.on-surface-variant" _hover={{ color: 'brand.primary' }} transition="colors" icon={<Box as="span" className="material-symbols-outlined">bookmark_add</Box>} aria-label="Bookmark" />
                            </Flex>
                            <Text color="brand.on-surface-variant" fontSize="base" lineHeight="relaxed" mt="auto">
                                যে কোনো ব্যক্তি, গোষ্ঠী বা প্রতিষ্ঠান যাদের কোনো প্রজেক্ট বা ব্যবসার ফলাফলের উপর স্বার্থ বা প্রভাব রয়েছে।
                            </Text>
                            <Flex align="center" gap={2} mt={4} pt={4} borderTop="1px solid" borderColor="brand.surface-container-high">
                                <Box px={3} py={1} bg="brand.surface-container-low" borderRadius="full" fontSize="xs" fontWeight="bold" color="brand.on-surface-variant">ব্যবসায়িক</Box>
                            </Flex>
                        </Flex>
                    </Box>

                    {/* Card 2 */}
                    <Box as="article" bg="brand.surface-container-lowest" borderRadius="lg" p={6} position="relative" overflow="hidden" role="group" _hover={{ transform: 'translateY(-4px)' }} transition="transform 0.3s" boxShadow="sm" border="1px solid" borderColor="rgba(171,173,174,0.15)">
                        <Box position="absolute" top="0" right="0" w="16" h="16" bg="brand.primary-container" borderBottomLeftRadius="full" mt="-8" mr="-8" opacity={0.5} _groupHover={{ transform: 'scale(1.5)' }} transition="transform 0.5s" zIndex={0} />
                        <Flex position="relative" zIndex={10} flexDir="column" h="full" gap={4}>
                            <Flex justify="space-between" align="flex-start">
                                <Box>
                                    <Heading as="h3" fontFamily="heading" fontSize="2xl" fontWeight="bold" color="brand.on-surface" mb={1}>Algorithm</Heading>
                                    <Text color="brand.primary" fontWeight="bold" fontSize="lg">অ্যালগরিদম</Text>
                                </Box>
                                <IconButton variant="unstyled" color="brand.on-surface-variant" _hover={{ color: 'brand.primary' }} transition="colors" icon={<Box as="span" className="material-symbols-outlined">bookmark_add</Box>} aria-label="Bookmark" />
                            </Flex>
                            <Text color="brand.on-surface-variant" fontSize="base" lineHeight="relaxed" mt="auto">
                                কোনো সমস্যা সমাধানের জন্য ধাপে ধাপে নির্দেশাবলীর একটি সেট, যা সাধারণত কম্পিউটার প্রোগ্রামিংয়ে ব্যবহৃত হয়।
                            </Text>
                            <Flex align="center" gap={2} mt={4} pt={4} borderTop="1px solid" borderColor="brand.surface-container-high">
                                <Box px={3} py={1} bg="brand.surface-container-low" borderRadius="full" fontSize="xs" fontWeight="bold" color="brand.on-surface-variant">প্রযুক্তি</Box>
                            </Flex>
                        </Flex>
                    </Box>

                    {/* Card 3 */}
                    <Box as="article" bg="brand.surface-container-lowest" borderRadius="lg" p={6} position="relative" overflow="hidden" role="group" _hover={{ transform: 'translateY(-4px)' }} transition="transform 0.3s" boxShadow="sm" border="1px solid" borderColor="rgba(171,173,174,0.15)">
                        <Box position="absolute" top="0" right="0" w="16" h="16" bg="brand.secondary-container" borderBottomLeftRadius="full" mt="-8" mr="-8" _groupHover={{ transform: 'scale(1.5)' }} transition="transform 0.5s" zIndex={0} />
                        <Flex position="relative" zIndex={10} flexDir="column" h="full" gap={4}>
                            <Flex justify="space-between" align="flex-start">
                                <Box>
                                    <Heading as="h3" fontFamily="heading" fontSize="2xl" fontWeight="bold" color="brand.on-surface" mb={1}>Freelancing</Heading>
                                    <Text color="brand.primary" fontWeight="bold" fontSize="lg">ফ্রিল্যান্সিং</Text>
                                </Box>
                                <IconButton variant="unstyled" color="brand.on-surface-variant" _hover={{ color: 'brand.primary' }} transition="colors" icon={<Box as="span" className="material-symbols-outlined">bookmark_add</Box>} aria-label="Bookmark" />
                            </Flex>
                            <Text color="brand.on-surface-variant" fontSize="base" lineHeight="relaxed" mt="auto">
                                কোনো নির্দিষ্ট প্রতিষ্ঠানের স্থায়ী কর্মী না হয়ে স্বাধীনভাবে বিভিন্ন ক্লায়েন্টের জন্য চুক্তির ভিত্তিতে কাজ করা।
                            </Text>
                            <Flex align="center" gap={2} mt={4} pt={4} borderTop="1px solid" borderColor="brand.surface-container-high">
                                <Box px={3} py={1} bg="brand.surface-container-low" borderRadius="full" fontSize="xs" fontWeight="bold" color="brand.on-surface-variant">ক্যারিয়ার</Box>
                            </Flex>
                        </Flex>
                    </Box>

                    {/* Card 4 */}
                    <Box as="article" bg="brand.surface-container-lowest" borderRadius="lg" p={6} position="relative" overflow="hidden" role="group" _hover={{ transform: 'translateY(-4px)' }} transition="transform 0.3s" boxShadow="sm" border="1px solid" borderColor="rgba(171,173,174,0.15)">
                        <Box position="absolute" top="0" right="0" w="16" h="16" bg="brand.primary-container" borderBottomLeftRadius="full" mt="-8" mr="-8" opacity={0.5} _groupHover={{ transform: 'scale(1.5)' }} transition="transform 0.5s" zIndex={0} />
                        <Flex position="relative" zIndex={10} flexDir="column" h="full" gap={4}>
                            <Flex justify="space-between" align="flex-start">
                                <Box>
                                    <Heading as="h3" fontFamily="heading" fontSize="2xl" fontWeight="bold" color="brand.on-surface" mb={1}>Typography</Heading>
                                    <Text color="brand.primary" fontWeight="bold" fontSize="lg">টাইপোগ্রাফি</Text>
                                </Box>
                                <IconButton variant="unstyled" color="brand.on-surface-variant" _hover={{ color: 'brand.primary' }} transition="colors" icon={<Box as="span" className="material-symbols-outlined">bookmark_add</Box>} aria-label="Bookmark" />
                            </Flex>
                            <Text color="brand.on-surface-variant" fontSize="base" lineHeight="relaxed" mt="auto">
                                টেক্সট বা অক্ষরগুলোকে সুন্দর, পাঠযোগ্য এবং আকর্ষণীয়ভাবে সাজানোর শিল্প ও কৌশল।
                            </Text>
                            <Flex align="center" gap={2} mt={4} pt={4} borderTop="1px solid" borderColor="brand.surface-container-high">
                                <Box px={3} py={1} bg="brand.surface-container-low" borderRadius="full" fontSize="xs" fontWeight="bold" color="brand.on-surface-variant">ডিজাইন</Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Grid>
            </Box>
        </Layout>
    );
};

export default Dictionary;
