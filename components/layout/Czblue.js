import { Box, Container, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import ButtonPrimary from '../styled/ButtonPrimary';


export default function Czblue() {
    const theme = useTheme();
    const bp = theme.breakpoints.values;
    const mq = bp => `@media (min-width: ${bp}px)`;
    return (
        <Box id="CZBLUE" css={{
            width: '100%',
            backgroundColor: '#a8cfff'
        }}>
            <Container css={{ textAlign: 'center', paddingBottom: 100 }} >
                <Grid2 container justifyContent="center" alignItems="center" rowSpacing={1} columnSpacing={3} maxWidth={1440} css={{ marginBottom: 50 }}>
                    <Grid2>
                        <img src="https://cz.cash/images/tokens/CZB.png" css={{ display: 'block', width: 200, paddingTop: 100 }} />
                    </Grid2>
                    <Grid2>
                        <h2 css={{ fontSize: 40, fontWeight: 'bold', textAlign: "left", [mq(bp.xs)]: { paddingTop: 20 }, [mq(bp.md)]: { paddingTop: 80 }, marginTop: 0 }}>
                            250% APR with CZBLUE
                        </h2>
                        <p css={{ fontSize: 20, textAlign: 'left' }}>
                            Arb Bots constantly<br />
                            burn the CZB supply.<br />
                            <a href="https://docs.czodiac.com/czodiac-litepaper/tokens/blue-farms-czblue" target="_blank">learn more</a>
                        </p>
                    </Grid2>

                </Grid2>
                <ButtonPrimary css={{ margin: 15, backgroundColor: 'blue' }} href="https://cz.cash/#/swap?inputCurrency=BNB&outputCurrency=0xD963b2236D227a0302E19F2f9595F424950dc186" >Trade on CZ.CASH</ButtonPrimary>
                <ButtonPrimary css={{ margin: 15, backgroundColor: 'blue' }} href="https://cz.farm" >Stake on CZ.FARM</ButtonPrimary>
            </Container>
        </Box >
    )
}