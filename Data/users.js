import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456@admin', 10),
        isAdmin: true,
        address: "Hà Nội",
        gender: "Nam"
    },
    {
        name: 'demo1',
        email: 'demo1@gmail.com',
        password: bcrypt.hashSync('123456@demo1', 10),
        address: "Hà Nội",
        gender: "Nam"
    }
]

export default users
