import type { Entry } from "contentful"
import type { QueryMap } from "../graphql/queries";
export interface PageFields {
    title: string;
    slug: string;
    components?: Entry<unknown>[]
}

export interface PageProps {
    pageCollection: {
        items: {
            title: string;
            slug: string;
            __typename: string;
            componentsCollection: {
                items: {
                    __typename: keyof typeof QueryMap;
                    sys: {
                        id: string;
                        __typename: string;
                    }
                }[]
            }
        }[]
    }
}