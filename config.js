var details = {};
/** node server port number **/
details.portNumber = {
    "port": process.env.port ||8080
};

/** database connectivety  **/
details.dbConfig = {
    server: "lttsappipgroup.database.windows.net",
    database: "LSIWebPortalDB",
    user: "lttsappipgroupadmin",
    password: "test@123",
    options : {
        encrypt :true,
        trustedConnection: true,
    }
};
// details.dbConfig = {
//     server: "lttsappipgroup.database.windows.net",
//     database: "lttsappipgroupadmin",
//     user: "sa",
//     password: "test@123"
// };

/** Sparkfly **/
details.BASEURL_SPARKFLY = 'api-staging.sparkfly.com';

/** Prism **/
details.BASEURL_PRISM = 'https://api.prism.com/v2/';

/** Fortinate**/
details.BASEURL_FORTINET = 'http://insight.fortipresence.com/rest/';
//details.BASEURL_FORTINET = 'http://insight.kianaanalytics.com/rest/';
details.BASEURL_FORTINET_RealtimeDensityHeatMap = 'http://146.148.48.30:8080/Localization/rest/';

details.PROXY = 'http://10.9.64.4:8002';


module.exports = details;