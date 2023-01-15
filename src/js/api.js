const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

const request = () => {
    return fetch(BASE_URL)
        .then(response => {
            if(!response.ok) {
                throw new Error(`${response.status} - ${response.statusText}`);
            }

            return response.json();
        });
};
let imageURL;
export const loadData = async () => {
    imageURL = await request();
    console.log(imageURL, ' url inside the loadData');
    return imageURL;
};

loadData();

// let imageURL = request().then(data => console.log(data[0].url));
console.log(imageURL, 'image URL');



