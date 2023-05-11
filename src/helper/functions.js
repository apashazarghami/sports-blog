const validateText = (text, characteres) => {
    if(text.trim().length > characteres) {
        return true;
    } else {
        return false;
    }
}

const validateEmail = email => {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return pattern.test(email);
}

export { validateText, validateEmail };