
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	LandingPageDesktop_image1: tryRequire('./LandingPageDesktop_image1.png') || require('./questionMark.png'),
	LandingPageDesktop_manworkingonalaptopathisdesk: tryRequire('./LandingPageDesktop_manworkingonalaptopathisdesk.png') || require('./questionMark.png'),
}