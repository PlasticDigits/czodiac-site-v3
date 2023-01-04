import Image from 'next/image'
import { Open_Sans } from '@next/font/google'
import { Box, Button, Container, Stack, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import MenuLink from '../styled/MenuLink';
import MenuLinkSocialIcon from '../styled/MenuLinkSocialIcon';
import ButtonPrimary from '../styled/ButtonPrimary';
import FeatureCard from '../cards/FeatureCard';


export default function Features() {
    const theme = useTheme();
    const bp = theme.breakpoints.values;
    const mq = bp => `@media (min-width: ${bp}px)`;
    return (
        <Box id="Features" css={{
            backgroundColor: "#AF3532",
            width: '100%',
            position: 'relative',
            "&:before": {
                content: "' '",
                isplay: 'block',
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                opacity: 0.1,
                filter: 'brightness(1.9)',
                backgroundImage: 'url(/images/czred.svg)',
                [mq(bp.xs)]: { backgroundSize: `96px auto` },
                [mq(bp.md)]: { backgroundSize: `192px auto` }
            }

        }}>
            <Container >
                <h2 css={{ marginTop: 0, fontSize: 40, fontWeight: 'bold', color: theme.palette.common.white, textAlign: "center", paddingTop: 80, zIndex: 1, position: "relative" }}>
                    Maximize Returns With Tested DeFi Tools.
                </h2>
                <Grid2 container justifyContent="center" alignItems="stretch" rowSpacing={3} columnSpacing={3} maxWidth={1440}
                    css={{
                        paddingBottom: 100,
                        zIndex: 1,
                        position: "relative",
                        textAlign: "center"
                    }}>
                    <Grid2 item xs={12} sm={6} lg={4} >
                        <FeatureCard
                            title="BurnPay"
                            description="Raising a deflationary token's price floor while generating new community rewards."
                            linkLabel="Learn more from our Whitepaper"
                            link="https://czodiac.gitbook.io/czodiac-litepaper/features-active/fairtribe-productions/working-of-burn-pay"
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} lg={4} >
                        <FeatureCard
                            title="TribePools"
                            description="Automatic demand for products delivered to stakers with minimal marketing expenditure."
                            linkLabel="Stake CZR on CZ.FARM"
                            link="https://cz.farm"
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} lg={4} >
                        <FeatureCard
                            title="FairTribe"
                            description="CZUSD liquidity investments supporting marketing tokens for new product launches."
                            linkLabel="Join the FairTribe Chatroom"
                            link="https://t.me/FairTribe"
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} lg={4} >
                        <FeatureCard
                            title="CZ.CASH"
                            description="Defeat bots with reduced slippage, better swap routing, and built-in CZUSD support."
                            linkLabel="Trade all your favorite coins"
                            link="https://cz.cash"
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} lg={4} >
                        <FeatureCard
                            title="CZ.FARM"
                            description="Stake, swap, and more with trusted DeFi tools for the CZodiac ecosystem of tokens and NFTs."
                            linkLabel="Discover our DeFi Tools"
                            link="https://cz.farm"
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </Box >
    )
}