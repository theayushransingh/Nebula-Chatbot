const User = require("../Models/User")
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require('../Helpers/auth')
const test = (req, res) => {
    res.json('test is working')
}

const signupUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        if (!firstName) {
            return res.json({
                error: 'FirstName Required'
            })
        }
        if (!lastName) {
            return res.json({
                error: 'LastName Required'
            })
        }
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be at least 6 character long'
            })
        }
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: "Email already exists"
            })
        }
        const hashedPassword = await hashPassword(password)
        const user = await User.create({
            firstName, lastName, email, password: hashedPassword,

        });

        return res.json(user)
    } catch (err) {
        console.log(err);
    }
};



const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
                error: "No User Found with this Email Address!"
            });
        }

        comparePassword(password, user.password)
            .then((match) => {
                if (match) {
                    jwt.sign({ email: user.email, firstName: user.firstName, id: user.id }, process.env.JWT_SECRET, {}, (err, token) => {
                        if (err) {
                            throw err;
                        }
                        res.cookie('token', token).json(user);
                    });
                } else {
                    // Incorrect Password
                    return res.json({
                        error: "Invalid Password!"
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                return res.json({
                    error: "Internal Server Error"
                });
            });
    } catch (error) {
        console.log(error);
        return res.json({
            error: "Internal Server Error"
        });
    }
};

const getProfile = (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) {
                throw err;
            }
            res.json(user)
        })
    } else {
        res.json(null)
    }
}

module.exports = {
    test,
    signupUser,
    loginUser,
    getProfile
}