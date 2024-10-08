import { Model , Document } from "mongoose";
import { Params, ServiceAddons } from '@feathersjs/feathers';

import {
    Product_QUERY as Query,
    Product_POST as Body_POST,
    Product_FIND as Data,
    Product_GET as Datum,
    Product_PATCH as Body_Patch,
} from '../interfaces/ProductInterface';
import { Product } from "../product.class";

export class ProductDBOperations {
    private static _service: Product & ServiceAddons<any>;
    static _model: Model<Document<any>>;
    static _servicePath = 'v1/product';

    /**
     * Initialize service
     * @param service - Service value.
     */
    static initializeService(service: Product & ServiceAddons<any>) {
        ProductDBOperations._service = service;
        ProductDBOperations._model = service.Model;
    }

    /**
     * Get data.
     * @param dbQuery - Db fields related query.
     * @param specifiedQuery - Any other specified query like $sort, $limit etc.
     * @param params - Feathers params object from context.
     */
    static async getDataWithPagination({
        dbQuery,
        specifiedQuery = {},
        params = {},
    }: {
        dbQuery: Query;
        specifiedQuery?: any;
        params?: Params;
    }) {
        console.log("test ", dbQuery, specifiedQuery, params);
        return await ProductDBOperations._service
            ._find({
                query: {
                    ...dbQuery,
                    ...specifiedQuery,
                    ...params,
                },
            })
            .then((res) => {
                return res as Data;
            });
    }

    /**
     * Get data.
     * @param dbQuery - Db fields related query.
     * @param specifiedQuery - Any other specified query like $sort, $limit etc.
     * @param params - Feathers params object
     */
    static async getDataWithoutPagination({
        dbQuery,
        specifiedQuery = {},
        params = {},
    }: {
        dbQuery: Query;
        specifiedQuery?: any;
        params?: Params;
    }) {
        console.log("test ", dbQuery, specifiedQuery, params);
        return await ProductDBOperations._service
            ._find({
                query: {
                    ...dbQuery,
                    ...specifiedQuery,
                    ...params,
                },
                paginate: false,
            })
            .then((res) => {
                return res as Array<Datum>;
            });
    }

    /**
     * Get details.
     * @param id - Id of the data.
     * @param dbQuery - Db fields a related query.
     * @param specifiedQuery - Any other specified query like $sort, $limit etc.
     * @param params - Feathers params object
     */
    static async getDetails({
        id,
        dbQuery,
        specifiedQuery = {},
        params = {},
    }: {
        id: number;
        dbQuery: Query;
        specifiedQuery?: any;
        params?: Params;
    }) {
        return await ProductDBOperations._service
            ._get(id, {
                query: {
                    ...dbQuery,
                    ...specifiedQuery,
                    ...params,
                },
                paginate: false,
            })
            .then((res) => {
                return res as Datum;
            });
    }

    /**
     * create data.
     * @param dbBody - Body of the request.
     * @param dbQuery - Query related to fields.
     * @param specifiedQuery - Any other specified query like $sort, $limit etc.
     * @param params - Feathers params object
     */
    static async createDatum({
        dbBody,
        dbQuery = {},
        specifiedQuery = {},
        params = {},
    }: {
        dbBody: Body_POST;
        dbQuery?: any;
        specifiedQuery?: any;
        params?: Params;
    }) {
        return await ProductDBOperations._service
            .create(
                {
                    ...dbBody,
                },
                {
                    ...params,
                    query: {
                        ...dbQuery,
                        ...specifiedQuery,
                    },
                    provider: 'server',
                },
            )
            .then((res) => {
                return res as Datum;
            })
            .catch((e) => {
                throw e;
            });
    }

    /**
     * create data.
     * @param dbBody - Body of the request.
     * @param dbQuery - Query related to fields.
     * @param specifiedQuery - Any other specified query like $sort, $limit etc.
     * @param params - Feathers params object
     */
    static async createData({
        dbBody,
        dbQuery = {},
        specifiedQuery = {},
        params = {},
    }: {
        dbBody: Array<Body_POST>;
        dbQuery?: any;
        specifiedQuery?: any;
        params?: Params;
    }) {
        return await ProductDBOperations._service
            .create(dbBody, {
                ...params,
                query: {
                    ...dbQuery,
                    ...specifiedQuery,
                    $limit: dbBody.length,
                },
                provider: 'server',
            })
            .then((res) => {
                return res as Array<Datum>;
            });
    }

    /**
     * Modify data.
     * @param id - datum id.
     * @param dbBody - Body of the request.
     * @param dbQuery - Query of the request.
     * @param specifiedQuery - Any other specified query like $sort, $limit etc.
     * @param params - Feathers params object
     */
    static async modifyDatum({
        id,
        dbBody,
        dbQuery = {},
        specifiedQuery = {},
        params = {},
    }: {
        id: string | null;
        dbBody: Body_Patch;
        dbQuery?: Query;
        specifiedQuery?: any;
        params?: Params;
    }) {
        return await ProductDBOperations._service
            .patch(
                id,
                {
                    ...dbBody,
                },
                {
                    ...params,
                    query: {
                        ...dbQuery,
                        ...specifiedQuery,
                    },
                    provider: 'server',
                },
            )
            .then((res) => {
                if (id) {
                    return res as Datum;
                } else {
                    return res as Array<Datum>;
                }
            });
    }

    /**
     * Delete data.
     * @param id - datum id.
     * @param dbQuery - Query of the request.
     * @param specifiedQuery - Any other specified query like $sort, $limit etc.
     * @param params - Feathers params object
     */
    static async deleteDatum({
        id,
        dbQuery = {},
        specifiedQuery = {},
        params = {},
    }: {
        id: number;
        dbQuery?: Query;
        specifiedQuery?: any;
        params?: Params;
    }) {
        return await ProductDBOperations._service
            .remove(id, {
                ...params,
                query: {
                    ...dbQuery,
                    ...specifiedQuery,
                },
                provider: 'server',
            })
            .then((res) => {
                return res as Datum;
            });
    }
}
