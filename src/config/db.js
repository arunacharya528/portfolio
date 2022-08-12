import faunadb from 'faunadb';
const client = new faunadb.Client({
    secret: process.env.REACT_APP_FAUNA_SECRET
});
const q = faunadb.query;
export { client, q };