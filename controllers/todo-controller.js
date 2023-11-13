const {Todo} = require("../models");

module.exports = {
    getAllTodo: async (req, res) => {
        const userId = req.payload.id; // Ambil ID pengguna dari token
        const todos = await Todo.findAll({
            where: {
                user_id: userId
            }
        })

        res.status(200).json({
            message: "berhasil mendapatkan data todo",
            data: todos
        })
    },

    getTodoById: async (req, res) => {
        const todoId = req.params.id

        try {
            // Temukan todo berdasarkan ID
            const todo = await Todo.findByPk(todoId);

            if (!todo) {
                return res.status(404).json({
                    message: 'Todo tidak ditemukan'
                });
            }

            res.status(200).json({
                message: 'Berhasil mendapatkan todo',
                data: todo
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    },

    createTodo: async (req, res) => {
        const userId = req.payload.id; // Ambil ID pengguna dari token
        let data = req.body
        data.user_id = userId

        try {
            // input data
            await Todo.create(data)

            // send response
            res.status(201).json({
                message: "berhasil menambahkan todo"
            })

        } catch (error) {
            res.json({
                message: "gagal menambahkan todo",
                error: error.message
            })
        }
    },

    updateTodo: async (req, res) => {
        const todoId = req.params.id;
        const data = req.body;

        try {
            // Temukan todo berdasarkan ID
            const todo = await Todo.findByPk(todoId);

            if (!todo) {
                return res.status(404).json({
                    message: 'Todo tidak ditemukan'
                });
            }

            // Ubah data todo
            await todo.update(data);

            res.json({
                message: 'Todo berhasil diubah',
                data: todo
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    },

    deleteTodo: async (req, res) => {
        const todoId = req.params.id;

        try {
            // Temukan todo berdasarkan ID
            const todo = await Todo.findByPk(todoId);

            if (!todo) {
                return res.status(404).json({
                    message: 'Todo tidak ditemukan'
                });
            }

            // Hapusa todo
            await todo.destroy();

            res.json({
                message: 'Todo berhasil dihapus',
                data: todo
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    }
}