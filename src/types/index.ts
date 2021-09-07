import type { Entry } from "contentful"
export interface PageFields {
    title: string;
    components?: Entry<unknown>[]
}
