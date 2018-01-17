const apiKey = 'yKZBm1xsRo1sfRiG93_WbwabLDdSgQbn1Oln5O0y-DicnpsUhlZOyy77Kpm1-kxXp1mLhGMDZyTViRV-dlGe2QUvHuBZxNl4ShWBXFYsywdPic2NC3qMvvcwbrteWnYx';
const Yelp = {
    search (term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {Authorization: `Bearer ${apiKey}`}
        }).then(response => response.json()).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business =>({

                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count

                }));
            }
            throw new Error ('Request failed! No input Criteria');
        },networkError => console.log(networkError.message));
    }
};

export default Yelp;
