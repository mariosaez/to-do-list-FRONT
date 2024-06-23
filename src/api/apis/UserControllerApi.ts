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
  LoginRequestDTO,
  PagedResponseUserDTO,
  UserDTO,
  UserRegisterDTO,
} from '../models/index';
import {
    LoginRequestDTOFromJSON,
    LoginRequestDTOToJSON,
    PagedResponseUserDTOFromJSON,
    PagedResponseUserDTOToJSON,
    UserDTOFromJSON,
    UserDTOToJSON,
    UserRegisterDTOFromJSON,
    UserRegisterDTOToJSON,
} from '../models/index';

export interface DeleteUserRequest {
    body: string;
}

export interface GetAllPaginatedRequest {
    page: number;
    size: number;
}

export interface GetByEmailRequest {
    email: string;
}

export interface GetByIdRequest {
    id: string;
}

export interface GetByusernameRequest {
    username: string;
}

export interface LoginRequest {
    loginRequestDTO: LoginRequestDTO;
}

export interface RegisterUserRequest {
    userRegisterDTO: UserRegisterDTO;
}

export interface UpdateUserRequest {
    userDTO: UserDTO;
}

export interface UpdateUserListRequest {
    userDTO: Array<UserDTO>;
}

/**
 * 
 */
export class UserControllerApi extends runtime.BaseAPI {

    /**
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTO>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling deleteUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/users/deleteUser`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     */
    async deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTO> {
        const response = await this.deleteUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UserDTO>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/users/getAllUsers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserDTOFromJSON));
    }

    /**
     */
    async getAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UserDTO>> {
        const response = await this.getAllRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getAllPaginatedRaw(requestParameters: GetAllPaginatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedResponseUserDTO>> {
        if (requestParameters['page'] == null) {
            throw new runtime.RequiredError(
                'page',
                'Required parameter "page" was null or undefined when calling getAllPaginated().'
            );
        }

        if (requestParameters['size'] == null) {
            throw new runtime.RequiredError(
                'size',
                'Required parameter "size" was null or undefined when calling getAllPaginated().'
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
            path: `/api/users/getAllUsersPaginated`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PagedResponseUserDTOFromJSON(jsonValue));
    }

    /**
     */
    async getAllPaginated(requestParameters: GetAllPaginatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedResponseUserDTO> {
        const response = await this.getAllPaginatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getByEmailRaw(requestParameters: GetByEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTO>> {
        if (requestParameters['email'] == null) {
            throw new runtime.RequiredError(
                'email',
                'Required parameter "email" was null or undefined when calling getByEmail().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/users/getUserByEmail/{email}`.replace(`{${"email"}}`, encodeURIComponent(String(requestParameters['email']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     */
    async getByEmail(requestParameters: GetByEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTO> {
        const response = await this.getByEmailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getByIdRaw(requestParameters: GetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTO>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/users/getUserById/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     */
    async getById(requestParameters: GetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTO> {
        const response = await this.getByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getByusernameRaw(requestParameters: GetByusernameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTO>> {
        if (requestParameters['username'] == null) {
            throw new runtime.RequiredError(
                'username',
                'Required parameter "username" was null or undefined when calling getByusername().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/users/getUserByUsername/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters['username']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     */
    async getByusername(requestParameters: GetByusernameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTO> {
        const response = await this.getByusernameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async loginRaw(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTO>> {
        if (requestParameters['loginRequestDTO'] == null) {
            throw new runtime.RequiredError(
                'loginRequestDTO',
                'Required parameter "loginRequestDTO" was null or undefined when calling login().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/users/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginRequestDTOToJSON(requestParameters['loginRequestDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     */
    async login(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTO> {
        const response = await this.loginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async registerUserRaw(requestParameters: RegisterUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTO>> {
        if (requestParameters['userRegisterDTO'] == null) {
            throw new runtime.RequiredError(
                'userRegisterDTO',
                'Required parameter "userRegisterDTO" was null or undefined when calling registerUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/users/registerUser`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserRegisterDTOToJSON(requestParameters['userRegisterDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     */
    async registerUser(requestParameters: RegisterUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTO> {
        const response = await this.registerUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTO>> {
        if (requestParameters['userDTO'] == null) {
            throw new runtime.RequiredError(
                'userDTO',
                'Required parameter "userDTO" was null or undefined when calling updateUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/users/updateUser`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserDTOToJSON(requestParameters['userDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     */
    async updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTO> {
        const response = await this.updateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateUserListRaw(requestParameters: UpdateUserListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters['userDTO'] == null) {
            throw new runtime.RequiredError(
                'userDTO',
                'Required parameter "userDTO" was null or undefined when calling updateUserList().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/users/updateUserList`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['userDTO']!.map(UserDTOToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async updateUserList(requestParameters: UpdateUserListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<object>> {
        const response = await this.updateUserListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}