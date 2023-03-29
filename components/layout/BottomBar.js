import { Box, Container, Stack, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import ButtonPrimary from '../styled/ButtonPrimary';
import MenuLinkSocialIcon from '../styled/MenuLinkSocialIcon';


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
                        <h3 css={{ color: "#702624", fontSize: 36, fontWeight: 600 }}>Persons under US Jurisdiction must not use CZODIAC dapps, tokens, or services.</h3>
                        <p css={{ fontSize: 14, fontWeight: 400 }}>
                            All persons under US jurisdiction must not use CZODIAC dapps, tokens, or services. It is your responsibility to determine if you are under US jurisdiction and remove yourself from the project as czodiac does not have the capability to do so.
                        </p>
                    </Grid2>
                    <Grid2 item xs={12}>
                        <h3 css={{ color: "#702624", fontSize: 18, fontWeight: 600 }}>Legal Disclaimer</h3>
                        <p css={{ fontSize: 14, fontWeight: 400 }}>
                            Nothing on this site or on related channels should be considered a promise by anyone,
                            including but not limited to the developers and promoters of this site,
                            to perform work to generate profits for anyone including but not limited to the following:
                            the users of this site; FairTribe community members; CZF holders; CZR hoders; CZUSD holders;
                            or anyone using any of the sites, smart contracts, social media channels,
                            and any other media or tech related to CZF, CZR, CZUSD, and CZodiac or any of the community members.
                            CZodiac, CZF, CZR, CZUSD, czodiac.com, cz.cash, cz.farm, numis.cz.cash, and related technologies
                            plus media are all experimental and must be used according to your personal financial situation and
                            risk profile. There are no guarantees of profits, but the smart contracts are guaranteed to perform as written on the BSC blockchain.
                        </p>
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