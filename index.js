const receivesAFunction = (callback) => callback();

const returnsANamedFunction = () => {
    return function func(){}
}; 

const returnsAnAnonymousFunction = () => function(){};