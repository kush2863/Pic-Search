import axios from "axios";


const SearchImages = async (term) => {
 const response=  await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization:'Client-ID 9Nw4nwl0AfGwzNCyK0GK9AJCaJx8uSy6GGwOsyt-MgE'
        },

        params:{
            query: term,
        }
    });
   
    return response.data.results;
};

export default SearchImages;