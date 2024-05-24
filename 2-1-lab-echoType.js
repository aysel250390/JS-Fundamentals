function echoType(data) {
    console.log(typeof data);

    if (typeof data === 'string' || typeof data === 'number') {
        console.log(data);
    }else {
        console.log('Parameter is not suitable for printing');
    }

}
echoType('Hello, JavaScript!');
echoType(18);
echoType(null);
echoType(undefined);
echoType({});
echoType(-55);