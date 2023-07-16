/* tslint:disable */
/* eslint-disable */
/**
 * Template FastAPI React
 *  ### Description A RESTful API for handling todo items.  Anyone in Equinor are authorized to run these calculations.  * Click **Authorize** to login and start testing.  ### Resources  * [Docs](https://equinor.github.io/template-fastapi-react/)  * [Github](https://github.com/equinor/template-fastapi-react)   For questions about usage or expanding the API, create issue on Github or see docs. 
 *
 * The version of the OpenAPI document: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorResponse } from '../models';
/**
 * HealthCheckApi - axios parameter creator
 * @export
 */
export const HealthCheckApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHealthCheckGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/health-check`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HealthCheckApi - functional programming interface
 * @export
 */
export const HealthCheckApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HealthCheckApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHealthCheckGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHealthCheckGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * HealthCheckApi - factory interface
 * @export
 */
export const HealthCheckApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HealthCheckApiFp(configuration)
    return {
        /**
         * 
         * @summary Get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHealthCheckGet(options?: any): AxiosPromise<string> {
            return localVarFp.getHealthCheckGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HealthCheckApi - object-oriented interface
 * @export
 * @class HealthCheckApi
 * @extends {BaseAPI}
 */
export class HealthCheckApi extends BaseAPI {
    /**
     * 
     * @summary Get
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthCheckApi
     */
    public getHealthCheckGet(options?: any) {
        return HealthCheckApiFp(this.configuration).getHealthCheckGet(options).then((request) => request(this.axios, this.basePath));
    }
}
