const size = {
    mobile: '320px',
    tablet: '481px',
    laptop: '769px',
    desktop: '1025px',
    desktopL: '1100px',
    desktopXL: '1201px',
};

export const device = {
    mobile: `screen and (min-width: ${size.mobile})`,
    tablet: `screen and  (min-width: ${size.tablet})`,
    laptop: `screen and  (min-width: ${size.laptop})`,
    desktop: `screen and  (min-width: ${size.desktop})`,
    desktopL: `screen and  (min-width: ${size.desktopL})`,
    desktopXL: `screen and  (min-width: ${size.desktopXL})`,
};
