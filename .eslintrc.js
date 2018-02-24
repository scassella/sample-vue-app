module.exports = {
    root: true, //makes it so the rules apply to the whole project
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    extends: 'standard',
    //this is required to lint all vue files
    plugins: [
        'html' //for linting scripts in html files.
    ]
};
