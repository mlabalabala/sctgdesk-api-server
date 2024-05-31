/* tslint:disable */
/* eslint-disable */
/**
 * sctgdesk-api-server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AbGetResponse } from '../models';
import { AbRequest } from '../models';
/**
 * AddressBookLegacyApi - axios parameter creator
 * @export
 */
export const AddressBookLegacyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Set the user's address book
         * @param {AbRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ab: async (body: AbRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling ab.');
            }
            const localVarPath = `/api/ab`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authorization required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This function is an API endpoint that allows an authenticated user to retrieve their legacy address book. <br> The Legacy Address Book is the address book that was used in the previous version of SCTGDesk. <br> Rustdesk client uses the legacy address book if it cannot find the new one <br> It is tagged with \"address book legacy\" for OpenAPI documentation.  ## Parameters  - none  ## Returns  If successful, this function returns a `Json<AbGetResponse>` object, which includes the legacy address book information.  <br> If the user is not authorized, this function returns a `status::Unauthorized` error.  <br>  ## Errors  This function will return an error if the user is not authorized.
         * @summary Get the User's Legacy Address Book
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        abGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/ab`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authorization required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AddressBookLegacyApi - functional programming interface
 * @export
 */
export const AddressBookLegacyApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Set the user's address book
         * @param {AbRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ab(body: AbRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await AddressBookLegacyApiAxiosParamCreator(configuration).ab(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This function is an API endpoint that allows an authenticated user to retrieve their legacy address book. <br> The Legacy Address Book is the address book that was used in the previous version of SCTGDesk. <br> Rustdesk client uses the legacy address book if it cannot find the new one <br> It is tagged with \"address book legacy\" for OpenAPI documentation.  ## Parameters  - none  ## Returns  If successful, this function returns a `Json<AbGetResponse>` object, which includes the legacy address book information.  <br> If the user is not authorized, this function returns a `status::Unauthorized` error.  <br>  ## Errors  This function will return an error if the user is not authorized.
         * @summary Get the User's Legacy Address Book
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async abGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AbGetResponse>>> {
            const localVarAxiosArgs = await AddressBookLegacyApiAxiosParamCreator(configuration).abGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AddressBookLegacyApi - factory interface
 * @export
 */
export const AddressBookLegacyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Set the user's address book
         * @param {AbRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ab(body: AbRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return AddressBookLegacyApiFp(configuration).ab(body, options).then((request) => request(axios, basePath));
        },
        /**
         * This function is an API endpoint that allows an authenticated user to retrieve their legacy address book. <br> The Legacy Address Book is the address book that was used in the previous version of SCTGDesk. <br> Rustdesk client uses the legacy address book if it cannot find the new one <br> It is tagged with \"address book legacy\" for OpenAPI documentation.  ## Parameters  - none  ## Returns  If successful, this function returns a `Json<AbGetResponse>` object, which includes the legacy address book information.  <br> If the user is not authorized, this function returns a `status::Unauthorized` error.  <br>  ## Errors  This function will return an error if the user is not authorized.
         * @summary Get the User's Legacy Address Book
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async abGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AbGetResponse>> {
            return AddressBookLegacyApiFp(configuration).abGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AddressBookLegacyApi - object-oriented interface
 * @export
 * @class AddressBookLegacyApi
 * @extends {BaseAPI}
 */
export class AddressBookLegacyApi extends BaseAPI {
    /**
     * Set the user's address book
     * @param {AbRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressBookLegacyApi
     */
    public async ab(body: AbRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return AddressBookLegacyApiFp(this.configuration).ab(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This function is an API endpoint that allows an authenticated user to retrieve their legacy address book. <br> The Legacy Address Book is the address book that was used in the previous version of SCTGDesk. <br> Rustdesk client uses the legacy address book if it cannot find the new one <br> It is tagged with \"address book legacy\" for OpenAPI documentation.  ## Parameters  - none  ## Returns  If successful, this function returns a `Json<AbGetResponse>` object, which includes the legacy address book information.  <br> If the user is not authorized, this function returns a `status::Unauthorized` error.  <br>  ## Errors  This function will return an error if the user is not authorized.
     * @summary Get the User's Legacy Address Book
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressBookLegacyApi
     */
    public async abGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AbGetResponse>> {
        return AddressBookLegacyApiFp(this.configuration).abGet(options).then((request) => request(this.axios, this.basePath));
    }
}
