import RestAPI     from './rest-api';
import UserService from './user-service'

export const restAPI = new RestAPI();
export const userService = new UserService(restAPI);
