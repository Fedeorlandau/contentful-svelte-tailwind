import type { PageFields } from 'src/types';
import type { Entry, EntryCollection } from 'contentful';
import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'https://cdn.contentful.com'
})

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_TOKEN;

const getEntries = <T>(config: AxiosRequestConfig) => {
  return api.get<EntryCollection<T>>(`/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}`, config)
}

export const getPageBySlug = async (slug: string)
    : Promise<Entry<PageFields>> => {
    const entries = await getEntries<PageFields>({
      params: {
        'content_type': 'page',
        'fields.slug': slug,
        'include': '10'
      }
    })

    const entry = entries.data.items[0];
    entry.fields.components = entries.data.includes.Entry
    return entry;
};