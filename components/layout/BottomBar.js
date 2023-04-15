import { Box, Container, Stack, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import ButtonPrimary from '../styled/ButtonPrimary';
import MenuLinkSocialIcon from '../styled/MenuLinkSocialIcon';

export const LINK_TERMS_OF_USE = "https://czodiac.gitbook.io/czodiac-litepaper/terms-of-use";
export const LINK_PRIVACY_POLICY = "https://czodiac.gitbook.io/czodiac-litepaper/privacy-policy";

export default function BottomBar() {
    const theme = useTheme();
    const bp = theme.breakpoints.values;
    const mq = bp => `@media (min-width: ${bp}px)`;
    return (
        <Box css={{
            backgroundColor: "#FCEFE6",
            padding: "100px 0px",
            width: '100%'
        }}>
            <Container >
                <Grid2 container justifyContent="center" alignItems="center" rowSpacing={3} columnSpacing={3} maxWidth={1440} >
                    <Grid2 item tem xs={12} sm={4} css={{
                        textAlign: "left"
                    }}>
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
                    <Grid2 item xs={12} sm={8} css={{
                        [mq(bp.xs)]: { textAlign: "center" },
                        [mq(bp.sm)]: { textAlign: "right" },
                    }}>
                        <Stack direction="row" spacing={4} alignItems="center" justifyContent="flex-end">
                            <MenuLinkSocialIcon href="https://twitter.com/zodiacs_c"
                                src="/images/icons/Twitter-Red.svg"
                                alt="Twitter"
                                width={30}
                                height={25}
                            />
                            <MenuLinkSocialIcon href="https://t.me/CZodiacofficial"
                                src="/images/icons/TG-Red.svg"
                                alt="Telegram"
                                width={27}
                                height={23}
                            />
                            <MenuLinkSocialIcon href="https://czodiac.medium.com/"
                                src="/images/icons/Medium-Red.svg"
                                alt="Medium"
                                width={30}
                                height={25}
                            />
                            <MenuLinkSocialIcon href="https://github.com/chinese-zodiac"
                                src="/images/icons/Github-Red.svg"
                                alt="Github"
                                width={30}
                                height={25}
                            />
                            <MenuLinkSocialIcon href="https://discord.gg/Tg9JFQxzbs"
                                src="/images/icons/Discord-Red.svg"
                                alt="Discord"
                                width={30}
                                height={25}
                            />
                        </Stack>
                    </Grid2>
                    <Grid2 item xs={12}>
                        <h1 style={{ fontSize: "2em" }}>Terms of Use</h1>
                        <p>
                            By accessing any CZODIAC website, including but not limited to
                            CZODIAC&apos;s decentralized applications and services, and engaging
                            in any activities related to the CZODIAC ecosystem, including
                            buying, selling, trading, holding CZODIAC tokens, or
                            participating in the CZODIAC community, users acknowledge that
                            they have read, understood, and agreed to be bound by the terms
                            and conditions set forth in CZODIAC&apos;s Terms of Use. The Terms of
                            Use, available at{' '}
                            <a style={{ color: '#702624' }} href={LINK_TERMS_OF_USE}>
                                {LINK_TERMS_OF_USE}
                            </a>
                            , constitute a legally binding agreement between users and
                            CZODIAC, and users should review them carefully before engaging
                            in any activities related to the CZODIAC ecosystem. If users do
                            not agree to the terms and conditions set forth in the Terms of
                            Use, they should not access or use CZODIAC&apos;s websites, dapps,
                            tokens, or other offerings. By using any CZODIAC website, users
                            represent and warrant that they have the legal capacity to enter
                            into a binding agreement with CZODIAC and that they comply with
                            all applicable laws and regulations.
                            <br />
                            <br />
                            <a style={{ color: '#702624' }} href={LINK_TERMS_OF_USE}>
                                LINK TO TERMS OF USE
                            </a>
                        </p>
                        <br />
                        <h1 style={{ fontSize: "2em" }}>Privacy Policy</h1>
                        <p>
                            At CZODIAC, we are committed to protecting the privacy and
                            personal information of our users. We encourage you to read our
                            Privacy Policy, which can be found at{' '}
                            <a style={{ color: '#702624' }} href={LINK_PRIVACY_POLICY}>
                                {LINK_PRIVACY_POLICY}
                            </a>
                            . This policy outlines the types of personal information that
                            CZODIAC may collect, the purposes for which this information is
                            used, and the steps taken to ensure the security and
                            confidentiality of your personal data. By using CZODIAC&apos;s
                            websites or services, you acknowledge that you have read and
                            understood our Privacy Policy and consent to the collection,
                            use, and disclosure of your personal information as described
                            therein. If you have any questions or concerns about our privacy
                            practices, please contact us at team@czodiac.com.
                            <br />
                            <br />
                            <a style={{ color: '#702624' }} href={LINK_PRIVACY_POLICY}>
                                LINK TO PRIVACY POLICY
                            </a>
                        </p>

                        <br />
                    </Grid2>
                    <Grid2 item xs={12}>
                        <h3 css={{ color: "#702624", fontSize: 18, fontWeight: 600 }}>Contact</h3>
                        <p css={{ fontSize: 14, fontWeight: 400 }}>
                            official@czodiac.com,<br />
                            team@czodiac.com
                        </p>
                        <ButtonPrimary href="https://czodiac.gitbook.io/czodiac-litepaper/"
                            css={{ marginTop: "15px !important", backgroundColor: "#AF3532", fontSize: 16, borderRadius: 10 }} >Whitepaper</ButtonPrimary>
                    </Grid2>
                    <Grid2 item xs={12}>
                        <p css={{ color: "#B0AAAA", fontSize: 14, fontWeight: 400 }}>
                            © 2023 CZodiac. All rights reserved
                        </p>
                    </Grid2>
                </Grid2>
            </Container>

        </Box >
    )
}