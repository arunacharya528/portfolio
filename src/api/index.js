import { client, q } from "../config/db"

export const getAllExperiences = client
    .query(q.Paginate(q.Match(q.Ref('indexes/all_experience'))))
    .then(response => {
        const ref = response.data;
        const allData = ref.map(ref => {
            return q.Get(ref);
        });
        return client.query(allData).then(data => data.map((item) => item.data));
    })
    .catch(error => console.error('Error: ', error.message));

export const getAllInfo = client
    .query(q.Paginate(q.Match(q.Ref('indexes/all_info'))))
    .then(response => {
        const ref = response.data;
        const allData = ref.map(ref => {
            return q.Get(ref);
        });
        return client.query(allData).then(data => data.map((item) => item.data));
    })
    .catch(error => console.error('Error: ', error.message));