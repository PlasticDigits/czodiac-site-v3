import Image from 'next/image'
import { Box, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import ButtonPrimary from '../styled/ButtonPrimary';

export default function FairTribeCard({ linkSite, linkChat, linkChart, linkTrade, srcLogo, name, ticker, descriptionLine1, descriptionLine2 }) {
    const theme = useTheme();
    const bp = theme.breakpoints.values;
    const mq = bp => `@media (min-width: ${bp}px)`;
    return (<Box css={{ borderRadius: 26, [mq(bp.xs)]: { padding: 10 }, [mq(bp.sm)]: { padding: 20 }, [mq(bp.md)]: { padding: 40 }, backgroundColor: theme.palette.primary.light }}>
        <Grid2 container justifyContent="center" alignItems="center" css={{ [mq(bp.xs)]: { flexDirection: "column-reverse" }, [mq(bp.md)]: { flexDirection: "row" } }}>
            <Grid2 item xs={12} md={8}>
                <h3 css={{ fontSize: 24, fontWeight: 600, marginTop: 0 }}>{name} ({ticker})</h3>
                <p css={{ fontSize: 18 }}>{descriptionLine1}<br />{descriptionLine2}</p>
                {!!linkSite && (<ButtonPrimary href={linkSite} css={{ backgroundColor: theme.palette.primary.dark }}>
                    Visit website
                    <Image
                        src="/images/icons/LinkOut.svg"
                        alt="external link"
                        width={12}
                        height={12}
                        priority
                        css={{ paddingLeft: 5 }}
                    />
                </ButtonPrimary>)}
                <div css={{ display: "inline-block", margin: "0", padding: "0" }}>
                    <a href={linkChat} target="_blank" css={{ position: "relative", top: 14, marginLeft: (!!linkSite ? 10 : 0) }}>
                        <Image
                            src="/images/icons/TG-Red-Circle.svg"
                            alt={ticker + " Chat"}
                            width={38}
                            height={38}
                            priority
                        />
                    </a>
                    <a href={linkChart} target="_blank" css={{ position: "relative", top: 14, marginLeft: 10 }}>
                        <Image
                            src="/images/icons/Chart-Red-Circle.svg"
                            alt={ticker + " Chart"}
                            width={38}
                            height={38}
                            priority
                        />
                    </a>
                    <a href={linkTrade} target="_blank" css={{ position: "relative", top: 14, marginLeft: 10 }}>
                        <Image
                            src="/images/icons/Buy-Red-Circle.svg"
                            alt={"Buy " + ticker}
                            width={38}
                            height={38}
                            priority
                        />
                    </a>
                </div>
            </Grid2>
            <Grid2 item xs={12} md={4}>
                <Image
                    src={srcLogo}
                    alt="external link"
                    width={160}
                    height={160}
                    priority
                    css={{ [mq(bp.xs)]: { width: 54, height: 54 }, [mq(bp.sm)]: { width: 120, height: 120 }, [mq(bp.lg)]: { width: 160, height: 160 } }}
                />
            </Grid2>
        </Grid2>
    </Box>)
}