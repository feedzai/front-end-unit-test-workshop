export function findMax(list) {
    let max = 0;

    for (let i = 0; i < list.length; i++) {
        const element = list[i];

        if (element > max) {
            max = element;
        }
    }

    return max;
}

export function removeAttributes(obj, attributeKeys) {
    for (let i = 0; i < attributeKeys.length; i++) {
        const key = attributeKeys[i];

        delete obj[key];
    }

    return obj;
}

export function loadUserName({loggedIn}) {
    return new Promise((resolve) => {
        if (!loggedIn) {
            resolve(null);
        } else {
            resolve("mary");
        }
    });
}
