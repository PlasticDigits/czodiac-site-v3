import Image from 'next/image'
import { Open_Sans } from '@next/font/google'
import { Box, Button, Container, Stack, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import MenuLink from '../styled/MenuLink';
import MenuLinkSocialIcon from '../styled/MenuLinkSocialIcon';
import ButtonPrimary from '../styled/ButtonPrimary';
import FeatureCard from '../cards/FeatureCard';
import RoadmapCard from '../cards/RoadmapCard';


export default function Roadmap() {
    const theme = useTheme();
    const bp = theme.breakpoints.values;
    const mq = bp => `@media (min-width: ${bp}px)`;
    return (
        <Box id="Roadmap" css={{
            backgroundColor: "#883F3D",
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
                opacity: 0.04,
                filter: 'brightness(0.85)',
                backgroundImage: 'url(/images/czred.svg)',
                [mq(bp.xs)]: { backgroundSize: `192px auto` },
                [mq(bp.md)]: { backgroundSize: `384px auto` }
            }

        }}>
            <Container >
                <h2 css={{ fontSize: 40, fontWeight: 'bold', color: theme.palette.common.white, textAlign: "center", paddingTop: 110, zIndex: 1, position: "relative" }}>
                    Maximize Returns With Tested DeFi Tools.
                </h2>
                <Grid2 container justifyContent="center" alignItems="stretch" rowSpacing={3} columnSpacing={3} maxWidth={1440}
                    css={{
                        paddingBottom: 100,
                        zIndex: 1,
                        position: "relative",
                        textAlign: "center"
                    }}>
                    <Grid2 item xs={12} sm={6} md={4}>
                        <RoadmapCard
                            iconSrc="/images/icons/CZLend.svg"
                            title="CZLend"
                            description="Borrow CZUSD against your FairTribe token collateral."
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} md={4}>
                        <RoadmapCard
                            iconSrc="/images/icons/Redchain.svg"
                            title="Red Chain"
                            description="Our own community blockchain powered by CZR."
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} md={4}>
                        <RoadmapCard
                            iconSrc="/images/icons/CZInsure.svg"
                            title="CZInsure"
                            description="Stake CZUSD and earn high APR while insuring CZodiac DApps."
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </Box >
    )
}