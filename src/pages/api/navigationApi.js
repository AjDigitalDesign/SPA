import client from "../../client";

const getData = async () => {
    const q = `
        {
            "customize": *[_type == "customize"][0]
        
        }
    `;
    const data = await client.fetch(q);
    return data;

};


export default async (req, res) => {
    res.send(await getData());
}

