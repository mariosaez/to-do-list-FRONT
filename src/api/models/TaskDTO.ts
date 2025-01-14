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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TaskDTO
 */
export interface TaskDTO {
    /**
     * 
     * @type {string}
     * @memberof TaskDTO
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskDTO
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskDTO
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskDTO
     */
    state?: TaskDTOStateEnum;
    /**
     * 
     * @type {string}
     * @memberof TaskDTO
     */
    userId?: string;
}


/**
 * @export
 */
export const TaskDTOStateEnum = {
    Created: 'CREATED',
    Doing: 'DOING',
    Done: 'DONE'
} as const;
export type TaskDTOStateEnum = typeof TaskDTOStateEnum[keyof typeof TaskDTOStateEnum];


/**
 * Check if a given object implements the TaskDTO interface.
 */
export function instanceOfTaskDTO(value: object): value is TaskDTO {
    return true;
}

export function TaskDTOFromJSON(json: any): TaskDTO {
    return TaskDTOFromJSONTyped(json, false);
}

export function TaskDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'content': json['content'] == null ? undefined : json['content'],
        'state': json['state'] == null ? undefined : json['state'],
        'userId': json['userId'] == null ? undefined : json['userId'],
    };
}

export function TaskDTOToJSON(value?: TaskDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'title': value['title'],
        'content': value['content'],
        'state': value['state'],
        'userId': value['userId'],
    };
}

