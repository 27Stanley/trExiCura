import axios from "axios";

const apiKey = "87ef9f23-aa8d-4650-88d2-c21b99e38bdb";

const request = axios.create({
  baseURL: `https://api.harvardartmuseums.org`,
});

export const fetchHarDepartments = () => {
  let galleryData = [];
  const totalPages = 3;
  const fetchPages = () => {
    let promises = [];

    for (let page = 1; page <= totalPages; page++) {
      const promise = request
        .get(`/gallery?floor=2&page=${page}&apikey=${apiKey}`)
        .then((response) => {
          galleryData.push(...response.data.records);
        })
        .catch((err) => {
          console.log(
            `Error fetching harvard galleries for page ${page}, error:`,
            err
          );
        });

      promises.push(promise);
    }

    return Promise.all(promises);
  };

  return fetchPages().then(() => {
    return galleryData;
  });
};

export const fetchHarDepartmentObjects = (galleryid) => {
  console.log(`fetching from department no.${galleryid}`);
  return request
    .get(`/object?gallery=${galleryid}&hasimage=1&apikey=${apiKey}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error fetching object, error:", err);
    });
};

// https://api.harvardartmuseums.org/gallery?floor=2&apikey=87ef9f23-aa8d-4650-88d2-c21b99e38bdb

// https://api.harvardartmuseums.org/object?gallery=2700&hasimage=1&apikey=87ef9f23-aa8d-4650-88d2-c21b99e38bdb