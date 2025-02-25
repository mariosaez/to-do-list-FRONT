/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PagedResponseTaskDTO,
  TaskDTO,
} from '../models/index';
import {
    PagedResponseTaskDTOFromJSON,
    PagedResponseTaskDTOToJSON,
    TaskDTOFromJSON,
    TaskDTOToJSON,
} from '../models/index';

export interface DeleteTaskRequest {
    body: string;
}

export interface GetAllPaginated1Request {
    page: number;
    size: number;
}

export interface GetByTitleRequest {
    title: string;
}

export interface GetTaskByIdRequest {
    id: string;
}

export interface GetTaskByUserIdRequest {
    id: string;
}

export interface RegisterTaskRequest {
    taskDTO: TaskDTO;
}

export interface UpdateTaskRequest {
    taskDTO: TaskDTO;
}

/**
 * 
 */
export class TaskControllerApi extends runtime.BaseAPI {

    /**
     */
    async deleteTaskRaw(requestParameters: DeleteTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskDTO>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling deleteTask().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/tasks/deleteTask`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskDTOFromJSON(jsonValue));
    }

    /**
     */
    async deleteTask(requestParameters: DeleteTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskDTO> {
        const response = await this.deleteTaskRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getAll1Raw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaskDTO>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/tasks/getAllTasks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaskDTOFromJSON));
    }

    /**
     */
    async getAll1(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaskDTO>> {
        const response = await this.getAll1Raw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getAllPaginated1Raw(requestParameters: GetAllPaginated1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedResponseTaskDTO>> {
        if (requestParameters['page'] == null) {
            throw new runtime.RequiredError(
                'page',
                'Required parameter "page" was null or undefined when calling getAllPaginated1().'
            );
        }

        if (requestParameters['size'] == null) {
            throw new runtime.RequiredError(
                'size',
                'Required parameter "size" was null or undefined when calling getAllPaginated1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/tasks/getAllTasksPaginated`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PagedResponseTaskDTOFromJSON(jsonValue));
    }

    /**
     */
    async getAllPaginated1(requestParameters: GetAllPaginated1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedResponseTaskDTO> {
        const response = await this.getAllPaginated1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getByTitleRaw(requestParameters: GetByTitleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskDTO>> {
        if (requestParameters['title'] == null) {
            throw new runtime.RequiredError(
                'title',
                'Required parameter "title" was null or undefined when calling getByTitle().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/tasks/getTaskByTitle/{title}`.replace(`{${"title"}}`, encodeURIComponent(String(requestParameters['title']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskDTOFromJSON(jsonValue));
    }

    /**
     */
    async getByTitle(requestParameters: GetByTitleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskDTO> {
        const response = await this.getByTitleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getTaskByIdRaw(requestParameters: GetTaskByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskDTO>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getTaskById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/tasks/getTaskById/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskDTOFromJSON(jsonValue));
    }

    /**
     */
    async getTaskById(requestParameters: GetTaskByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskDTO> {
        const response = await this.getTaskByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getTaskByUserIdRaw(requestParameters: GetTaskByUserIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaskDTO>>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getTaskByUserId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/tasks/getTasksByUser/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaskDTOFromJSON));
    }

    /**
     */
    async getTaskByUserId(requestParameters: GetTaskByUserIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaskDTO>> {
        const response = await this.getTaskByUserIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async registerTaskRaw(requestParameters: RegisterTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskDTO>> {
        if (requestParameters['taskDTO'] == null) {
            throw new runtime.RequiredError(
                'taskDTO',
                'Required parameter "taskDTO" was null or undefined when calling registerTask().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/tasks/registerTask`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TaskDTOToJSON(requestParameters['taskDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskDTOFromJSON(jsonValue));
    }

    /**
     */
    async registerTask(requestParameters: RegisterTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskDTO> {
        const response = await this.registerTaskRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateTaskRaw(requestParameters: UpdateTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskDTO>> {
        if (requestParameters['taskDTO'] == null) {
            throw new runtime.RequiredError(
                'taskDTO',
                'Required parameter "taskDTO" was null or undefined when calling updateTask().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/tasks/updateTask`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TaskDTOToJSON(requestParameters['taskDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskDTOFromJSON(jsonValue));
    }

    /**
     */
    async updateTask(requestParameters: UpdateTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskDTO> {
        const response = await this.updateTaskRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
