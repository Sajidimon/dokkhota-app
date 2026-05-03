import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Flex, Grid, Image, Button, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';

const Quizzes = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/quizzes')
            .then(res => {
                setQuizzes(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load quizzes", err);
                setLoading(false);
            });
    }, []);

    const dailyQuiz = quizzes.find(q => q.is_daily);
    const otherQuizzes = quizzes.filter(q => !q.is_daily);
    return (
        <Layout>
            <Box pb={8} spaceY={8} sx={{ '& > * + *': { marginTop: '2rem' } }}>
                {/* Hero / Stats Section */}
                <Box as="section" mt={2} position="relative" overflow="hidden" borderRadius="xl" bg="brand.secondary-container" p={6} boxShadow="0 10px 40px -10px rgba(44, 47, 48, 0.1)">
                    <Box position="absolute" top="0" right="0" w="48" h="48" opacity={0.2} transform="translate(3rem, -3rem)">
                        <Image 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuGaDSaeVoxHnmBT2qFoh-OZ9YDztMx5bKRxLpFbMnH08x8mfN6AaFuxiufqHEXVQ-k8RHcJOuuPippUwhaQNpTi5rSivHIezbNghspQKjnQZoqfy74erQwkvmph7BFPJPIMKy0ABOtLD9l4hHhXlj4jNOYueZR23V06SeDP0LobvnZa9dCVTB5fY2olJAc73oX-5TwcbYX22zhRNutINcPb9nuurWC6Mwj5o5PQcjniuPEHbHV4tVUTXXeszHxMCVKE6nqNeB" 
                            w="full" h="full" objectFit="cover" mixBlendMode="overlay" 
                        />
                    </Box>
                    <Heading as="h2" fontFamily="heading" fontSize="3xl" fontWeight="bold" color="brand.on-secondary-container" mb={6} position="relative" zIndex={10}>
                        কুইজ মাস্টারি
                    </Heading>
                    <Grid templateColumns="repeat(3, 1fr)" gap={4} position="relative" zIndex={10}>
                        <Flex bg="rgba(245, 246, 247, 0.5)" backdropFilter="blur(12px)" borderRadius="lg" p={4} flexDir="column" align="center" justify="center" textAlign="center">
                            <Box as="span" className="material-symbols-outlined fill-icon" fontSize="4xl" color="brand.primary" mb={2}>star</Box>
                            <Text fontFamily="heading" fontSize="2xl" fontWeight="bold" color="brand.on-secondary-container">1240</Text>
                            <Text fontSize="sm" fontWeight="medium" color="rgba(79, 67, 104, 0.8)" textTransform="uppercase" letterSpacing="wider">এক্সপি</Text>
                        </Flex>
                        <Flex bg="rgba(245, 246, 247, 0.5)" backdropFilter="blur(12px)" borderRadius="lg" p={4} flexDir="column" align="center" justify="center" textAlign="center">
                            <Box as="span" className="material-symbols-outlined fill-icon" fontSize="4xl" color="brand.secondary" mb={2}>military_tech</Box>
                            <Text fontFamily="heading" fontSize="2xl" fontWeight="bold" color="brand.on-secondary-container">12</Text>
                            <Text fontSize="sm" fontWeight="medium" color="rgba(79, 67, 104, 0.8)" textTransform="uppercase" letterSpacing="wider">ব্যাজ</Text>
                        </Flex>
                        <Flex bg="rgba(245, 246, 247, 0.5)" backdropFilter="blur(12px)" borderRadius="lg" p={4} flexDir="column" align="center" justify="center" textAlign="center">
                            <Box as="span" className="material-symbols-outlined fill-icon" fontSize="4xl" color="brand.error-container" mb={2}>local_fire_department</Box>
                            <Text fontFamily="heading" fontSize="2xl" fontWeight="bold" color="brand.on-secondary-container">5</Text>
                            <Text fontSize="sm" fontWeight="medium" color="rgba(79, 67, 104, 0.8)" textTransform="uppercase" letterSpacing="wider">স্ট্রিক</Text>
                        </Flex>
                    </Grid>
                </Box>

                {/* Daily Challenge Card */}
                {loading ? (
                    <Text color="brand.on-surface-variant">লোড হচ্ছে...</Text>
                ) : dailyQuiz && (
                    <Box as="section" bg="brand.surface-container-highest" borderRadius="xl" p={6} position="relative" overflow="hidden" boxShadow="0 10px 40px -10px rgba(44, 47, 48, 0.1)">
                        <Flex position="absolute" top="-6" right="-4" w="32" h="32" align="center" justify="center" zIndex={0}>
                            {/* Organic Blob implementation as a simple circle for chakra */}
                            <Box position="absolute" inset={0} bg="brand.primary-container" borderRadius="full" opacity={0.6} filter="blur(16px)" />
                            <Image 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRK6nR3p7lKIyrMzqoBsK45cZz1DPFyW5UCAqYpWARjrJYWvXqy3Y7J_GVxDv5q95yhc0B-q2ux3VunPAiGd8GwhUOP6XXE5nJIbVnSwTDL97HDdkgfb70VrAoTTCGSklzHdJgtzW1lw1xuRi5DNMtYXJH55zLgukj1XmvNOSsSQC_R58GAqA_6kiAuYBXAVrYM773heY2ZqQ__enIvndLavbM-yBoHYZcQ-RgEmVcLXucg_xLk33U_SgDzW_JRdgjqSe4fRyC" 
                                w="16" h="16" borderRadius="full" objectFit="cover" mixBlendMode="multiply" filter="drop-shadow(4px 4px 0px rgba(44,47,48,1))" position="relative" zIndex={10}
                            />
                        </Flex>
                        <Box position="relative" zIndex={10} maxW="80%">
                            <Flex display="inline-flex" align="center" gap={2} bg="brand.primary-container" color="brand.on-primary-fixed" px={3} py={1} borderRadius="full" fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="widest" mb={4}>
                                <Box as="span" className="material-symbols-outlined" fontSize="16px">bolt</Box>
                                প্রতিদিনের চ্যালেঞ্জ
                            </Flex>
                            <Heading as="h3" fontFamily="heading" fontSize="2xl" fontWeight="bold" color="brand.on-surface" mb={2}>{dailyQuiz.title}</Heading>
                            <Text color="brand.on-surface-variant" fontSize="sm" mb={6}>{dailyQuiz.description}</Text>
                            <Button as={Link} to={`/quiz/${dailyQuiz.id}`} bg="brand.primary" color="brand.on-primary" fontWeight="bold" py={6} px={6} borderRadius="xl" _hover={{ opacity: 0.9 }} transition="opacity 0.2s" rightIcon={<Box as="span" className="material-symbols-outlined">arrow_forward</Box>}>
                                চ্যালেঞ্জ শুরু করুন
                            </Button>
                        </Box>
                    </Box>
                )}

                {/* Categories List */}
                <Box as="section" spaceY={6} sx={{ '& > * + *': { marginTop: '1.5rem' } }}>
                    <Heading as="h2" fontFamily="heading" fontSize="2xl" fontWeight="bold" color="brand.on-surface" borderBottom="2px solid" borderColor="brand.primary-container" pb={2} display="inline-block">বিভাগসমূহ</Heading>
                    {loading ? null : otherQuizzes.map((quiz, idx) => (
                        <Flex key={quiz.id} as={Link} to={`/quiz/${quiz.id}`} bg="brand.surface-container-low" borderRadius="lg" p={5} align="center" justify="space-between" role="group" _hover={{ bg: 'brand.surface-container' }} transition="colors" cursor="pointer" mt={4}>
                            <Flex align="center" gap={4}>
                                <Flex w="14" h="14" bg={idx % 2 === 0 ? "brand.secondary-container" : "brand.tertiary-container"} borderRadius="lg" align="center" justify="center" filter="drop-shadow(4px 4px 0px rgba(44,47,48,1))" _groupHover={{ transform: idx % 2 === 0 ? 'rotate(3deg)' : 'rotate(-3deg)' }} transition="transform">
                                    <Box as="span" className="material-symbols-outlined" fontSize="3xl" color={idx % 2 === 0 ? "brand.on-secondary-container" : "brand.tertiary"}>
                                        {idx % 2 === 0 ? "devices" : "work"}
                                    </Box>
                                </Flex>
                                <Box>
                                    <Heading as="h4" fontFamily="heading" fontWeight="bold" fontSize="lg" color="brand.on-surface">{quiz.title}</Heading>
                                    <Text fontSize="sm" color="brand.on-surface-variant">{quiz.category}</Text>
                                </Box>
                            </Flex>
                            <Flex align="center" gap={2}>
                                <Box as="span" className="material-symbols-outlined" color="brand.on-surface-variant" _groupHover={{ color: 'brand.primary' }} transition="colors">chevron_right</Box>
                            </Flex>
                        </Flex>
                    ))}
                </Box>
            </Box>
        </Layout>
    );
};

export default Quizzes;
