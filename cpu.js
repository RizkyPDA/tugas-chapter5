const os = require("os");
const fs = require("fs");

const cpuInfo = os.cpus();

const cpu2JSON = (data) => {
  fs.writeFile("./cpu2.json", JSON.stringify(data, null, "\t"), (err) => {
    if (err) throw err;
    return data;
  });
};

cpu2JSON(cpuInfo);
