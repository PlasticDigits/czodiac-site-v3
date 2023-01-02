import { useTheme } from "@mui/material";
import Image from 'next/image'

export default function MenuLinkSocialIcon({ href, src, alt, width, height, css }) {
    const theme = useTheme();
    return (
        <a href={href} target="_blank" css={{ paddingTop: 6, '&:hover': { borderBottom: "solid 1px", paddingTop: 7 }, ...css }}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority
            />
        </a>
    )
};