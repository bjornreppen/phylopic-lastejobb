const { http } = require("lastejobb");

const url =
  "http://phylopic.org/api/a/image/list/0/10?options=taxa+string+credit+svgFile+pngFiles+licenseURL";
http.downloadBinary(url, __filename);
