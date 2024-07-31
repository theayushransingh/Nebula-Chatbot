const bcrypt = require('bcrypt')
const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                reject(err)
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err);
                }
                resolve(hash)
            })
        })
    })
}


const comparePassword = async (password, hashed) => {
    try {
        const result = await bcrypt.compare(password, hashed);
        console.log("Password comparison result:", result);
        return result;
    } catch (error) {
        console.log("Error comparing passwords:", error);
        return false;
    }
}

module.exports = {
    hashPassword,
    comparePassword
}