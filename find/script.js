const ret = [12, 34, 53, 63, 34, 65]

const result = ret.find((e, i) => {
    if (e == 63) {
        return e;
    }
});