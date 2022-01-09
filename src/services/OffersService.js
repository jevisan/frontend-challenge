import env from "../settings/env";

const BASE_URL = `${env.root}/directory`;

export const Offers = async () => {
    return await fetch(BASE_URL);
};
