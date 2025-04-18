import {get, post} from "@/utils/APIUtils";

export interface RepoType {
    incr_id: number
    node_id: string
    full_name: string
    url: string
    owner: Record<string, string>
    fork_count: number
    stargazers_count: number
    watchers_count: number
    open_issues_count: number
    contributors_count: number
    language: string
    description: string
    created_at: string
    updated_at: string
    pushed_at: string
}

export interface UserType {
    login: string
    avatar_url: string
    html_url: string
    geekhub_url: string
}

/**
 * 搜索
 * @param {string} query
 * @param {string} search_type
 * @return {number} total_count
 */
export const Search = get<{
    query: string
    search_type: string
}, {
    total_count: number
    items: RepoType[] | UserType[]
}>("/search/:search_type")

