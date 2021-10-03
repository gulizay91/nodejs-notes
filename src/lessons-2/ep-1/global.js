console.log(global);

const getTimeSecond = () => {
    return new Date().getSeconds();
};

setTimeout(() => {
    console.log('in the timeout: ' + getTimeSecond());
}, 3000);

setTimeout(() => {
    console.log(__dirname);
    console.log(__filename);
    clearInterval(int);
}, 5000);

const int = setInterval(() => {
    console.log('in the interval : ' + getTimeSecond());
}, 1000);


