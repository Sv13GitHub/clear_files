const fs = require('fs');
const config = require('./config');


fs.readdir(config.path, 'utf-8', (err, data) => {
    if (err) {
        throw new Error(err);
    }

    data.forEach((file, index, arr) => {
        let pathfile = config.path + "/" + file;

        fs.stat(pathfile, (err, stats) => {
            if (err) {
                throw new Error(err);
            }

            if (stats.isFile()) {
                let regex = new RegExp(`\.${config.files}$`);

                if (regex.test(file)) {
                    fs.unlink(pathfile, (err) => {
                        if (err) {
                            throw new Error(err);
                        }

                        console.log(`Remove ${pathfile}`);
                    })
                }
            }
        });
    });
});
