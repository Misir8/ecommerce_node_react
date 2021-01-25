import bcrypt from 'bcrypt';

const users = [
    {
        name: 'Admin user',
        email: 'misir@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Kamil',
        email: 'kamil@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    }
];

export default users;
