const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xCHxFQxKquGkQE7wrYilPnIUCAKPcEELv89yn6Un0e5pzp4SkVkrVX1lp7v4I0wwQtUQvGryAvcQ0p6pa0zREYg0kVBKgELPAhhWAM0CrO2rxWrQOdypq1X6vnqXzDxd1cn001UvbC6KRZ0zo5ZM/gwYK8cmPs/QFwpTdptqlf+qVlqnwSVcWs4jjZXQkLJQ+LU+/S5jZzYe6C8gweHSLEJU5DLY9QgkoYL1G7g7j8Hn1e7/fszPXrybE2tKiXcds5jvRg+KKm6lTIJVuoPBm/HJLD9+ifvPVkuoJZ6ZgMv0rITZWOtn2bTjbz/TlEmh/A6c3cXJzZ9Z0+wWGK/LmPUopp+23dl2t+fua1S17FymySSzu79M5EndHVNhg0p2XTxhvD59PAuH5T91RTHXcZkR4Dty+WzegUOXDVehtz1DNSfm0VctFMencs/kp8V35m5fp/dD/Mta198mZLLciqvN3X5b0wamfqLpZtnTNm1AjqPVzFDC9+j756MqbR3LukwXplznGRk2Qmetqo8c0Gq8nleM6axbYhiGu+6ENalX9iaYtrrDtMT2rLvWSjwVJbyNGayf1dD6qFNYK+QbKzm6z0WEyGZM9AdVle1uZham4P/WUxCnKv9veh29uZPDNXto29w83z24uuqJ37YNx/sKBEISa0hBRnabcnj1gA/dpCXonom7rAtStf2MDrvZzVjuyFGRSumRiKL/raHKazURy3i1F9m++Z+TNgQV5mHiIE+QYmNCvbNSIEhoiA8d8/WZCiG333rasm9FkQ4JLQQ1rlcQb9T1M/f0LPy6qUWm3qqd0ClWDMfW0jSnEakk7GKoWlF+EaqRGkBIwDGBP0YIGPauyhDg/E3prut9nKMtqN8ySsVH8BxX1HOcrS9yMuHwgjCaEn3x2iJ5GTxCdXkOSnoT/iZCh5Uh8iwAL80TLdnd86mC3g0rV224X4UuilU7oXOrMmg2a7Jm8uvEuPSuSDMS0rxAIXetcqt7MrSv+AW0pCUpgBP9w7G32mz8Pk5SqH1VLVD7/gvlsKxq9fY0rN/A5PsJXz5iQZgAXJWwJx93JeEAaCwI2kPj8YD7m/yI+mExLm+Y8UUcCCFHangZ4R0lX5sKC77yMKcUy6TthWQl4rmrZUT5XU6LrihIoaKuDLss/ov2frbImGdb/c+zDFi/7IH06j3ZDAeniSXM27m4LB76xBtfJb5flfQMAYRD3lulUYkzPXBuMW/UG8WN3myiiGpkZ7WW0veP541YfBvj3FUSK4MO1h8X6/BS/3+n5Wj84B3awwdrzVEqNZcVItd6I8d9Xeo/NrMfl0VGKcbgxC4kkickPZsdqz51rhVCoof5wLI9fhh3JRRFZzld3ylqLAuEZV0x/qmVFrM25b2deBp7a2vTzvEmNnhB9N+TYU4o9hjN/65fUjaAFGb7Ptw4L/tOor89yD/QXjY1r+JleT46GacEQcycdcxH5goFC0mVIvmZjhb8aa82/yhatcLHgheDx+siCPIQ2yMgFjQBIXAhbEkFDlq2dtnCBCYZKDcV8SJLHfH3B9FiStkucWhfSz1YHSfYZzBI9/AIZAp/kFCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "23353307125",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

