export default class UserService {
    constructor(restService) {
        this.service = restService;
    }

    getUsers = async (userId) => {
        if (userId) {
            return this.service.get(`/users/${userId}`);
        }
        return this.service.get('/users');
    }
}
