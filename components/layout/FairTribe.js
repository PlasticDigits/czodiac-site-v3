import { Box, Container, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import FairTribeCard from '../cards/FairTribeCard';



export default function FairTribes() {
    const theme = useTheme();
    const bp = theme.breakpoints.values;
    const mq = bp => `@media (min-width: ${bp}px)`;
    return (
        <Box id="Partners" css={{
            backgroundColor: theme.palette.common.white,
            padding: 0,
            width: '100%'
        }}>
            <Container css={{ paddingTop: 40 }}>
                <h2 css={{ fontSize: 40, fontWeight: 'bold' }}>
                    <span css={{ color: theme.palette.primary.main }}>FairTribe Partners - </span><br />
                    Earn Free Products By Holding Deflationary Tokens.
                </h2>
                <Grid2 container justifyContent="center" alignItems="center" rowSpacing={3} columnSpacing={3} maxWidth={1440}
                    css={{
                        paddingBottom: 100
                    }}>
                    <Grid2 item xs={12} sm={6} >
                        <FairTribeCard
                            linkSite="https://rafalovichcoins.com/nfts"
                            linkChat="https://t.me/rafalovichcoins"
                            linkChart="https://www.geckoterminal.com/bsc/pools/0xa98f8b669790b1063c0db3a03a9ecfe4ce602bee"
                            linkTrade="https://cz.cash/#/swap?inputCurrency=BNB&outputCurrency=0xAa83Bb1Be2a74AaA8795a8887054919A0Ea96BFA"
                            srcLogo="/images/fairtribes/lsdt.png"
                            name="CZ Numismatics"
                            ticker="LSDT"
                            descriptionLine1="Collect rare US coinage"
                            descriptionLine2="with 1:1 backed NFTs."
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} >
                        <FairTribeCard
                            linkSite="https://oracle.dogegod.io/"
                            linkChat="https://t.me/dogegod_token"
                            linkChart="https://www.geckoterminal.com/bsc/pools/0xc0b4dcc1d249d177a43bdaa13649f9b2830744a7"
                            linkTrade="https://cz.cash/#/swap?inputCurrency=BNB&outputCurrency=0x99f4cc2bae97f82a823ca80dcae52ef972b7f270"
                            srcLogo="/images/fairtribes/dgod.png"
                            name="DogeGod"
                            ticker="DGOD"
                            descriptionLine1="Earn Dogecoin every second "
                            descriptionLine2="without a single sell."
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} >
                        <FairTribeCard
                            linkChat="https://t.me/GreenMinerr"
                            linkChart="https://www.geckoterminal.com/bsc/pools/0x9321907037fa062b52b3f564b3350adf935bf698"
                            linkTrade="https://cz.cash/#/swap?inputCurrency=BNB&outputCurrency=0x701f1ed50aa5e784b8fb89d1ba05cccd627839a7"
                            srcLogo="/images/fairtribes/gem.png"
                            name="GreenMiner"
                            ticker="GEM"
                            descriptionLine1="Rising price floor with solar"
                            descriptionLine2="and wind GPU mining."
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} >
                        <FairTribeCard
                            linkSite="https://bad.rabbitcatch.com/"
                            linkChat="https://t.me/czluckyrabbit"
                            linkChart="https://www.geckoterminal.com/bsc/pools/0x117c53a2487556bfb1e067b8de35760380342a4b"
                            linkTrade="https://cz.cash/#/swap?inputCurrency=BNB&outputCurrency=0xe95412d2d374b957ca7f8d96abe6b6c1148fa438"
                            srcLogo="/images/fairtribes/lrt.png"
                            name="LuckyRabbit"
                            ticker="LRT"
                            descriptionLine1="Hold LRT to get access to unique "
                            descriptionLine2="cz.farm pools and win NFTs."
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} >
                        <FairTribeCard
                            linkSite="https://bragbull.com/"
                            linkChat="https://t.me/RagingBullNetwork"
                            linkChart="https://www.geckoterminal.com/bsc/pools/0x2b8c51720d5e007163bf83f38c2a72e497f1fb48"
                            linkTrade="https://cz.cash/#/swap?inputCurrency=BNB&outputCurrency=0x48c2bc3d0c63174b811ad4fa09b45cc039578adb"
                            srcLogo="/images/fairtribes/BRAG.png"
                            name="Raging Bull"
                            ticker="BRAG"
                            descriptionLine1="NFT DAO governance and"
                            descriptionLine2="lucrative Bitcoin rewards."
                        />
                    </Grid2>
                </Grid2>
            </Container>

        </Box >
    )
}