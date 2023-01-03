import Image from 'next/image'
import { Box, Container, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

const StatsItem = ({ label, value, href }) => {
    const theme = useTheme();
    const bp = theme.breakpoints.values;
    const mq = bp => `@media (min-width: ${bp}px)`;
    return (<div css={{ [mq(bp.xs)]: { textAlign: "center" }, [mq(bp.lg)]: { textAlign: "left" } }}>
        <a css={{ color: theme.palette.common.white, textDecoration: "none", fontWeight: "bold", '&:hover': { textDecoration: "underline" } }} href={href} target="_blank">
            {label} <Image
                src="/images/icons/LinkOut.svg"
                alt="external link"
                width={12}
                height={12}
                priority
            />
        </a>
        <p css={{ fontSize: 36, fontWeight: "bold", margin: 0 }}>{value}</p>
    </div>)
}

export default function StatsBar() {
    const theme = useTheme();
    return (
        <Box css={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            padding: 0,
            width: '100%'
        }}>
            <Container css={{ paddingTop: 45, paddingBottom: 35 }}>
                <Grid2 container
                    justifyContent="center" alignItems="center" rowSpacing={6} columnSpacing={2} maxWidth={1440}>
                    <Grid2 item xs={12} sm={6} md={4} lg={2}>
                        <StatsItem label="Market Cap" value="$1.98M" href="https://www.coingecko.com/en/coins/czred" />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} md={4} lg={2}>
                        <StatsItem label="Holders" value="10.2K" href="https://bscscan.com/token/0x5cd0c2C744caF04cda258Efc6558A3Ed3defE97b" />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} md={4} lg={2}>
                        <StatsItem label="Twitter Followers" value="12.2K" href="https://twitter.com/zodiacs_c" />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} md={4} lg={2}>
                        <StatsItem label="Telegram Members" value="3.98K" href="https://t.me/CZodiacofficial" />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} md={4} lg={2}>
                        <StatsItem label="Discord Members" value="1.87K" href="https://discord.gg/Tg9JFQxzbs" />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} md={4} lg={2}>
                        <StatsItem label="CMC Watchlist" value="3.07K" href="https://coinmarketcap.com/currencies/czred/" />
                    </Grid2>
                </Grid2>
            </Container>

        </Box>
    )
}