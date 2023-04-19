import signupUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default async function handleProfileSigup(firstName, lastName, filename) {
    return Promise
        .allSettled([signupUser(firstName, lastName), uploadPhoto(filename)])
        .then((res) => (
            res.map((o) => ({
                status:o.status,
                value: o.status === 'fulfilled' ? o.value : String(o.reason),
            }))
        ));
}