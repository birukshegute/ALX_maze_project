const path = require('path')

module.exports = {
    mode:'development',
    entry:'Scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename:'bundle.js',
    },
watch: true
}