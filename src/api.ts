import { TaskControllerApi, UserControllerApi } from "./api/apis";
import { Configuration } from "./api/runtime";

export const API_BASE_URL = "http://localhost:8080";

const configuration = new Configuration({
    basePath: API_BASE_URL,
});

export const userControllerApi = new UserControllerApi(configuration);
export const taskControllerApi = new TaskControllerApi(configuration);