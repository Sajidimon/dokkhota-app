import React from 'react';
import { Box, Heading, Text, Input, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <Layout>
            <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" pt={4} pb={16}>
                <Box w="full" maxW="md">
                    {/* Asymmetric Header / Branding */}
                    <Box position="relative" mb={12} display="flex" justifyContent="flex-start">
                        {/* Organic Background Blobs */}
                        <Box position="absolute" top="-10" left="-6" w="32" h="32" bg="brand.primary-container" borderRadius="full" filter="blur(24px)" opacity={0.7} mixBlendMode="multiply" pointerEvents="none" />
                        <Box position="absolute" top="4" left="10" w="24" h="24" bg="brand.secondary-container" borderRadius="full" filter="blur(16px)" opacity={0.6} mixBlendMode="multiply" pointerEvents="none" />
                        <Heading as="h1" position="relative" zIndex={10} fontFamily="heading" fontWeight="800" fontSize="5xl" letterSpacing="tighter" color="brand.on-background">
                            দখতা
                        </Heading>
                        {/* Collage Element */}
                        <Box 
                            position="absolute" right="0" top="0" transform="translate(1rem, -1.5rem) rotate(6deg)" w="24" h="24" 
                            bg="brand.surface-container-highest" borderRadius="full" overflow="hidden" boxShadow="0 10px 20px rgba(0,0,0,0.1)" border="4px solid" borderColor="brand.surface"
                            backgroundImage="url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuWRUl6qhksAOQ8eTBt9Zyzi0Zk_jEi9wlOjWZbRlmQTJoHcZUQ8tXh5-Cnr6CMMtcDItmPi5y3ILTNODJ05EHMRhBNpBZZL3BVaUKLGlGBaBEMFAEa9jPqABu9aOGZnkh3fc2CgC910TF3YWk6vxuUbAuJMpD-aCOR59FBLFYACj-mro9Vx_Lbe1UCtHomLwMwn7tw6dEdgZR0B_jJSlHenQP4K9M7NFvuvakd6YI5akruHno_059m0hPf9toRl0Pk6mLLO84')"
                            backgroundSize="cover" backgroundPosition="center"
                        />
                    </Box>

                    {/* Login Card */}
                    <Box bg="brand.surface-container-low" borderRadius="xl" p={{ base: 8, sm: 10 }} boxShadow="0 8px 30px rgba(0,0,0,0.04)" position="relative" overflow="hidden">
                        {/* Inner decorative organic shape */}
                        <Box position="absolute" bottom="-20" right="-20" w="64" h="64" bg="brand.secondary-container" borderRadius="full" filter="blur(3xl)" opacity={0.4} />
                        <Box position="relative" zIndex={10}>
                            <Heading as="h2" fontFamily="heading" fontWeight="bold" fontSize="3xl" mb={8} color="brand.on-surface">
                                লগইন করুন
                            </Heading>
                            <Box as="form" onSubmit={handleSubmit} spaceY={8} sx={{ '& > * + *': { marginTop: '2rem' } }}>
                                {/* Mobile Number Input */}
                                <Box spaceY={3} sx={{ '& > * + *': { marginTop: '0.75rem' } }}>
                                    <Text as="label" display="block" fontFamily="label" fontWeight="bold" fontSize="sm" color="brand.on-surface-variant" textTransform="uppercase" letterSpacing="wider">
                                        মোবাইল নম্বর
                                    </Text>
                                    <Flex position="relative" align="center" bg="brand.surface-container-highest" borderRadius="lg" overflow="hidden" transition="all 0.3s" _focusWithin={{ ring: 2, ringColor: "brand.primary", boxShadow: "0 4px 15px rgba(198,254,0,0.2)" }}>
                                        <Box as="span" pl={5} pr={3} py={4} fontFamily="heading" fontWeight="bold" color="brand.on-surface" borderRight="1px solid" borderColor="rgba(171,173,174,0.2)" bg="rgba(230,232,234,0.5)">
                                            +880
                                        </Box>
                                        <Input 
                                            w="full" bg="transparent" border="none" py={4} px={4} fontFamily="body" fontSize="lg" color="brand.on-surface" _placeholder={{ color: "brand.outline" }} _focus={{ boxShadow: 'none' }}
                                            id="mobile" name="mobile" pattern="[0-9]{10}" placeholder="1XXXXXXXXX" type="tel" required
                                        />
                                    </Flex>
                                </Box>

                                {/* Submit Button */}
                                <Button 
                                    type="submit" w="full" position="relative" role="group" overflow="hidden" bg="brand.primary" color="brand.on-primary" 
                                    fontFamily="heading" fontWeight="bold" fontSize="lg" py={7} px={8} borderRadius="xl" 
                                    transition="all 0.3s" _hover={{ boxShadow: "0 10px 25px rgba(198,254,0,0.4)" }} _active={{ transform: "scale(0.98)" }} mt={4}
                                >
                                    <Box position="absolute" inset="0" bgGradient="linear(to-r, brand.primary, brand.primary-container)" opacity={0} _groupHover={{ opacity: 1 }} transition="opacity 0.3s" />
                                    <Flex position="relative" zIndex={10} align="center" justify="center" gap={2}>
                                        ওটিপি পাঠান
                                        <Box as="span" className="material-symbols-outlined" fontSize="20px">arrow_forward</Box>
                                    </Flex>
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    {/* Footer Link */}
                    <Box mt={8} textAlign="center">
                        <Text fontFamily="body" color="brand.on-surface-variant">
                            আপনার কোনো অ্যাকাউন্ট নেই? 
                            <Box as="a" href="#" fontFamily="heading" fontWeight="bold" color="brand.on-surface" _hover={{ color: "brand.primary", borderColor: "brand.primary" }} transition="colors" borderBottom="2px solid" borderColor="rgba(76,100,0,0.3)" pb={0.5} ml={1}>
                                সাইন আপ করুন
                            </Box>
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
};

export default Login;
