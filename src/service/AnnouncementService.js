import axios from 'axios';


const ANNOUNCEMENT_API_BASE_URL = "http://localhost:8080/api/v1/announcement";

class AnnouncementService {

    getAnnouncments(){
        return axios.get(ANNOUNCEMENT_API_BASE_URL+ '/getAllAnnouncements');
    }

    createAnnouncment(employee){
        return axios.post(ANNOUNCEMENT_API_BASE_URL, employee);
    }


}

export default new AnnouncementService()