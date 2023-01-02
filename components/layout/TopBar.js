import Image from 'next/image'
import { Open_Sans } from '@next/font/google'
import { Box, Button, Container, Stack, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import MenuLink from '../styled/MenuLink';
import MenuLinkSocialIcon from '../styled/MenuLinkSocialIcon';
import ButtonPrimary from '../styled/ButtonPrimary';

export default function TopBar() {
    const theme = useTheme();
    return (
        <Box css={{
            backgroundColor: theme.palette.primary.light,
            padding: 0,
            width: '100%'
        }}>
            <Container >
                <Grid2 container justifyContent="center" alignItems="center" rowSpacing={1} columnSpacing={2} maxWidth={1440} css={{
                    minHeight: 120,
                    paddingTop: 18,
                    paddingBottom: 18
                }}>
                    <Grid2 item tem xs={12} sm={4} lg={4} >
                        <a href="https://czodiac.com">
                            <Image
                                src="/images/czodiac.png"
                                alt="Czodiac.com"
                                width={180}
                                height={64}
                                priority
                            />
                        </a>
                    </Grid2>
                    <Grid2 item xs={12} sm={8} lg={5}>
                        <Stack spacing={2} direction="row" alignItems="center" justifyContent={"flex-end"} css={{ flexWrap: "wrap" }}>
                            <MenuLink href="#Partners">
                                Partners
                            </MenuLink>
                            <MenuLink href="#Features">
                                Features
                            </MenuLink>
                            <MenuLink href="#Testimonials">
                                Testimonials
                            </MenuLink>
                            <MenuLink href="#Roadmap">
                                Roadmap
                            </MenuLink>
                        </Stack>
                    </Grid2>
                    <Grid2 item xs={12} lg={3}>
                        <Stack spacing={2} direction="row" alignItems="center" justifyContent={"flex-end"} css={{ flexWrap: "wrap" }}>
                            <MenuLinkSocialIcon href="https://twitter.com/zodiacs_c"
                                src="/images/icons/Twitter.svg"
                                alt="Twitter"
                                width={26}
                                height={21}
                            />
                            <MenuLinkSocialIcon href="https://t.me/CZodiacofficial"
                                src="/images/icons/Telegram.svg"
                                alt="Telegram"
                                width={23}
                                height={20}
                            />
                            <ButtonPrimary href="https://cz.cash/#/swap?inputCurrency=BNB&outputCurrency=0x5cd0c2C744caF04cda258Efc6558A3Ed3defE97b"
                                css={{ marginTop: "15px !important", position: "relative", top: -7 }} >Buy CZR</ButtonPrimary>
                        </Stack>

                    </Grid2>
                </Grid2>
            </Container>

        </Box>
    )
}