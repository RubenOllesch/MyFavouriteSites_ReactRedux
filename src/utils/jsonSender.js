export default jsonMessage => new Promise((resolve, reject) => {
    try {
        chayns.intercom.sendMesssageToPage(jsonMessage)
        .then(() => {
            resolve();
        });
    } catch (error) {
        reject(error);
    }
});
