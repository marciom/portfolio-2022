const size = {
   mobile: '320px',
   tablet: '481px',
   laptop: '769px',
   desktop: '1025px',
   desktopL: '1100px',
   desktopXL: '1201px',
};

export const device = {
   mobile: `(min-width: ${size.mobile})`,
   tablet: `(min-width: ${size.tablet})`,
   laptop: `(min-width: ${size.laptop})`,
   desktop: `(min-width: ${size.desktop})`,
   desktopL: `(min-width: ${size.desktopL})`,
   desktopXL: `(min-width: ${size.desktopXL})`,
};
