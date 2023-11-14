const jwt = require('jsonwebtoken')

require('dotenv').config()

const verifyToken = (req, res, next) => {
    const header = req.headers.authorization

    if (!header) {
        res.json({
            message: "undefined header"
        })
        return
    }

    const token = header.split(" ")[1]
    // const token = header

    if (!token) {
        res.json({
            message: "invalid token"
        })
        return
    }

    try {
        // Verifikasi token dan ekstrak informasi pengguna
        const payload = jwt.verify(token, process.env.JWT_KEY)

        // Set informasi pengguna di objek permintaan (request)
        req.payload = payload
        console.log(req.payload)

        // Lanjutkan ke middleware atau penanganan rute berikutnya
        next();
    } catch (error) {
        console.error(error);
        res.status(403).json({
            message: "Token tidak valid"
        });
    }
}

module.exports = verifyToken