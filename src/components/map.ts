import Banner from './Banner/Banner.svelte';

export interface MapProps {
    [key: string]: unknown
}

export const Map: MapProps = {
    'banner': Banner,
}