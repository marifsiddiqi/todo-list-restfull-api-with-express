const express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const route = express.Router()

const {User} = require("../models")

route.post('/login', async (req, res) => {
    try {
        let data = req.body

        const user = await User.findOne({
            where: {
                email: data.email
            }
        });

        if (!user) {
            return res.status(400).json({
                message: "anda tuh siapaa??"
            })
        }

        if (bcrypt.compareSync(data.password, user.password)) {
            const token = jwt.sign({ id: user.id, email: data.email }, "lashfdalkdhqweioho9472038as")
            return res.json({
                message: "anda berhasil login",
                token
            })
        }

        res.json({
            message: "password anda salah"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Terjadi kesalahan server"
        });
    }

})

route.post('/regis', async (req, res) => {
    try {
        let data = req.body;
        console.log(data);

        // Cek apakah email sudah terdaftar
        const existingUser = await User.findOne({
            where: {
                email: data.email
            }
        });

        if (existingUser) {
            // Jika email sudah terdaftar, kirim respon email sudah terdaftar
            return res.status(400).json({
                message: "Email sudah terdaftar. Gunakan email lain."
            });
        }

        // Email belum terdaftar, lakukan proses pendaftaran
        let saltRounds = 10;
        let hashPassword = bcrypt.hashSync(data.password, saltRounds);

        data.password = hashPassword;
        const createSuccess = await User.create(data);

        res.json({
            message: "Berhasil registrasi",
            data: createSuccess
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Terjadi kesalahan server"
        });
    }
})

module.exports = route
