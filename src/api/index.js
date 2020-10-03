import axios from 'axios';
const url = 'https://api.data.charitynavigator.org/v2/Organizations?app_id=ad182320&app_key=9108f67496a93720612916af4fa5a734&pageSize=3&pageNum=4&search=Animals&rated=true&fundraisingOrgs=true&donorPrivacy=true&scopeOfWork=REGIONAL&noGovSupport=true';

export const fetchData = async () => {
    try{
     const {data } = await axios.get(url);
     console.log("hola");
    
        

    } catch (error) {

    }
}

