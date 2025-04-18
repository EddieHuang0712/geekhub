"use client";
import {useEffect, useState} from "react";
import {Search} from "@/apis/search";
import Pagination from "@/app/users/components/Pagination";

export default function Users({params}: any) {
    const [page, setPage] = useState<number>(1);
    const [total_count, setTotalCount] = useState<number>(0);
    const [items, setItems] = useState<any[]>([]);

    const { query } = params;

    useEffect(() => {
        const fetchData = async () => {
            const res = await Search({
                query: params.query,
                page_num: page,
                page_size: 10,
                search_type: "user"
            });
            setItems(res.items);
            setTotalCount(res.total_count);
        }
        fetchData().then();
    }, []);

    const handlePageChange = (page: number) => {
        setPage(page);
        const fetchData = async () => {
            const res = await Search({
                query: query,
                page_num: page,
                page_size: 10,
                search_type: "user"
            });
            setItems(res.items);
            setTotalCount(res.total_count);
        }
        fetchData().then();
    }

    return (
        <div>
            <div className="mockup-frame">
                <div className="flex flex-col h-full bg-slate-50">
                    <header className="glass-morphism sticky top-0 z-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16 items-center">
                                <div className="flex items-center">
                                    <a href="/" className="flex-shrink-0 flex items-center">
                                        <i className="ti ti-code text-2xl text-primary-600 mr-2"></i>
                                        <span
                                            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600">GeekHub</span>
                                    </a>
                                </div>
                                <div className="flex-1 max-w-2xl mx-auto">
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <i className="ti ti-search text-slate-400"></i>
                                        </div>
                                        <input type="text" value={query}
                                               className="w-full pl-10 pr-10 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-slate-800 shadow-sm text-sm"/>
                                        <div className="absolute inset-y-0 right-0 flex items-center">
                                            <div className="border-l border-slate-200 h-5 mx-2"></div>
                                            <div className="flex items-center pr-3">
                                                <button className="text-slate-400 hover:text-primary-600">
                                                    <i className="ti ti-selector text-lg"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <a href="#"
                                       className="text-slate-600 hover:text-primary-600 px-3 py-2 text-sm rounded-lg hover:bg-slate-100">
                                        <i className="ti ti-bulb text-lg"></i>
                                    </a>
                                    <a href="#"
                                       className="text-slate-600 hover:text-primary-600 px-3 py-2 text-sm rounded-lg hover:bg-slate-100">
                                        <i className="ti ti-chart-bar text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className="flex-grow p-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="bg-white rounded-xl shadow-soft p-4 mb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h1 className="text-xl font-semibold text-slate-800">搜索结果: <span
                                            className="text-primary-600">{query}</span></h1>
                                        <p className="text-slate-500 text-sm mt-1">找到 {total_count} 个匹配的用户</p>
                                    </div>
                                    <div className="flex">
                                        <div className="flex border border-slate-200 rounded-lg">
                                            <button className="px-4 py-2 bg-primary-500 text-white rounded-l-lg">
                                                <div className="flex items-center">
                                                    <i className="ti ti-users text-sm mr-1"></i>
                                                    <span className="text-sm">用户</span>
                                                </div>
                                            </button>
                                            <button
                                                className="px-4 py-2 text-slate-500 hover:text-slate-700 rounded-r-lg">
                                                <div className="flex items-center">
                                                    <i className="ti ti-package text-sm mr-1"></i>
                                                    <span className="text-sm">仓库</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {
                                    items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-xl shadow-soft p-4 hover:shadow-md transition duration-300">
                                            <div className="flex items-start">
                                                <a href={`/user/${item.login}`} className="flex-shrink-0">
                                                    <img className="h-14 w-14 rounded-full object-cover ring-2 ring-primary-100"
                                                         src={item.avatar_url}
                                                         alt="User"/>
                                                </a>
                                                <div className="ml-4 flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <a href={`/user/${item.login}`}
                                                               className="text-lg font-semibold text-slate-800 hover:text-primary-600">{item.login}</a>
                                                            <p className="text-slate-500 text-sm">@{item.login}</p>
                                                        </div>
                                                        <a
                                                            href={item.html_url}
                                                            target={"_blank"}
                                                            className="px-3 py-1 bg-primary-50 text-primary-600 rounded-lg text-sm hover:bg-primary-100 transition duration-150">
                                                            查看
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex items-center justify-between mt-6 bg-white rounded-xl shadow-soft p-4">
                                <Pagination
                                    currentPage={page}
                                    totalPages={Math.ceil(total_count / 10)}
                                    onPageChange={(page) => handlePageChange(page)}
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
