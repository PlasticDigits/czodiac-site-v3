import Image from 'next/image'
import { Open_Sans } from '@next/font/google'
import { Box, Button, Container, Stack, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import MenuLink from '../styled/MenuLink';
import MenuLinkSocialIcon from '../styled/MenuLinkSocialIcon';
import ButtonPrimary from '../styled/ButtonPrimary';


export default function Mission() {
    const theme = useTheme();
    const bp = theme.breakpoints.values;
    const mq = bp => `@media (min-width: ${bp}px)`;
    return (
        <Box css={{
            backgroundColor: "#1F1816",
            padding: 0,
            width: '100%'
        }}>
            <Container >
                <Grid2 container justifyContent="center" alignItems="center" rowSpacing={1} columnSpacing={3} maxWidth={1440}
                    css={{
                        minHeight: "80vh",
                        paddingBottom: 100,
                        [mq(bp.xs)]: { flexDirection: "column-reverse" }, [mq(bp.sm)]: { flexDirection: "row" }
                    }}>
                    <Grid2 item tem xs={12} sm={8} css={{
                        [mq(bp.xs)]: { textAlign: "center" },
                        [mq(bp.sm)]: { textAlign: "left" },
                    }}>
                        <p css={{
                            color: theme.palette.common.white,
                            marginBottom: 20,
                            fontWeight: 'bold',
                            [mq(bp.xs)]: { fontSize: 28 },
                            [mq(bp.md)]: { fontSize: 40 },
                            [mq(bp.lg)]: { fontSize: 64 }
                        }}>Delivering quality products to blockchain customers globally.</p>
                        <ButtonPrimary css={{ margin: 15 }} href="https://cz.cash/#/swap?inputCurrency=BNB&outputCurrency=0x5cd0c2C744caF04cda258Efc6558A3Ed3defE97b" >Trade on CZ.CASH</ButtonPrimary>
                        <ButtonPrimary css={{ margin: 15 }} href="https://cz.farm" >Stake on CZ.FARM</ButtonPrimary>
                    </Grid2>
                    <Grid2 item xs={12} sm={4} css={{
                        [mq(bp.xs)]: { textAlign: "center" },
                        [mq(bp.sm)]: { textAlign: "right" },
                    }}>
                        <Image
                            src="/images/czred-w-bg-simple.svg"
                            alt="CZRED"
                            width={403}
                            height={403}
                            priority
                            css={{ maxWidth: "100%" }}
                        />
                    </Grid2>
                </Grid2>
            </Container>

        </Box >
    )
}