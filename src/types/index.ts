export type Entry<T extends StandardEntryFields> = {
    uid: string;
    created_by: string;
    updated_by: string;
    created_at: Date;
    updated_at: Date;
    _version: number;
    _in_progress: boolean;
    tags: string[];
    locale: string;
    url: string;
    _content_type_uid?: string;
} & T;

export interface StandardEntryFields {
    /** Title */
    title: string;
}

export interface StandardPageEntryFields {
    /** Url */
    url: string;
}

export type ComponentProps = { _content_type_uid: string; uid: string;[key: string]: unknown; };
export interface PageFields extends StandardEntryFields, StandardPageEntryFields {
    /** Components */
    components: ComponentProps[]
}
