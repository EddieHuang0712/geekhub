
export default function Home() {
    return (
        <>
            <div className="mockup-frame">
                <span className="bg-primary-200">11111</span>
                <div className="flex flex-col h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
                    <header className="glass-morphism z-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16 items-center">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 flex items-center">
                                        <i className="ti ti-code text-2xl text-primary-600 mr-2"></i>
                                        <span
                                            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600">GeekHub</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <a href="#" className="text-slate-600 hover:text-primary-600 px-3 py-2 text-sm">
                                        <i className="ti ti-bulb text-lg mr-1"></i>
                                        探索
                                    </a>
                                    <a href="#" className="text-slate-600 hover:text-primary-600 px-3 py-2 text-sm">
                                        <i className="ti ti-chart-bar text-lg mr-1"></i>
                                        趋势
                                    </a>
                                    <a href="#" className="text-slate-600 hover:text-primary-600 px-3 py-2 text-sm">
                                        <i className="ti ti-help-circle text-lg mr-1"></i>
                                        帮助
                                    </a>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main
                        className="flex-grow flex flex-col items-center px-4 sm:px-6 lg:px-8 pb-12 pt-8 max-h-[calc(100%-4rem)] overflow-hidden">
                        <div className="max-w-5xl w-full space-y-8">
                            <div className="text-center pt-6 pb-2">
                                <div className="inline-flex items-center mb-3 bg-white p-2 rounded-full shadow-soft">
                                    <i className="ti ti-code-circle text-3xl text-primary-600"></i>
                                </div>
                                <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600 mb-2">GeekHub</h1>
                                <p className="text-lg text-slate-600">探索开源世界，连接全球开发者</p>
                            </div>
                            <div className="bg-white rounded-2xl shadow-soft overflow-hidden transition duration-300">
                                <div className="flex border-b">
                                    <button
                                        className="w-1/2 py-3 text-center font-medium text-primary-600 border-b-2 border-primary-500 transition duration-150">
                                        <i className="ti ti-users text-lg mr-1"></i>
                                        搜索用户
                                    </button>
                                    <button
                                        className="w-1/2 py-3 text-center font-medium text-slate-500 hover:text-slate-700 transition duration-150">
                                        <i className="ti ti-folder text-lg mr-1"></i>
                                        搜索仓库
                                    </button>
                                </div>
                                <div className="p-5">
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <i className="ti ti-search text-slate-400"></i>
                                        </div>
                                        <input type="text" placeholder="输入关键词搜索用户..."
                                               className="w-full pl-10 pr-12 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-slate-800 shadow-sm transition duration-150"/>
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                            <button
                                                className="bg-primary-500 hover:bg-primary-600 text-white rounded-lg px-4 py-1.5 text-sm font-medium transition duration-150">
                                                搜索
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span
                                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                                            <i className="ti ti-tag text-slate-500 mr-1"></i>
                                            JavaScript
                                        </span>
                                        <span
                                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                                            <i className="ti ti-tag text-slate-500 mr-1"></i>
                                            Python
                                        </span>
                                        <span
                                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                                            <i className="ti ti-tag text-slate-500 mr-1"></i>
                                            React
                                        </span>
                                        <span
                                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                                            <i className="ti ti-tag text-slate-500 mr-1"></i>
                                            前端开发
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div
                                    className="bg-white rounded-2xl shadow-soft overflow-hidden transition duration-300">
                                    <div className="flex border-b">
                                        <button
                                            className="w-1/2 py-3 text-center font-medium text-slate-500 hover:text-slate-700 transition duration-150">
                                            <i className="ti ti-package text-lg mr-1"></i>
                                            仓库排行
                                        </button>
                                        <button
                                            className="w-1/2 py-3 text-center font-medium text-primary-600 border-b-2 border-primary-500">
                                            <i className="ti ti-users text-lg mr-1"></i>
                                            用户排行
                                        </button>
                                    </div>
                                    <div className="p-4 overflow-auto max-h-[360px]">
                                        <ul className="space-y-3">
                                            <li className="border-b border-slate-100 pb-3">
                                                <a href="/user/torvalds"
                                                   className="flex items-center hover:bg-slate-50 p-2 rounded-lg transition duration-150 card-hover">
                                                    <div className="flex-shrink-0 relative">
                                                        <img
                                                            className="h-12 w-12 rounded-full object-cover border-2 border-primary-100"
                                                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                                                            alt="User"/>
                                                        <span
                                                            className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-primary-500 text-white rounded-full text-xs font-bold">1</span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-sm font-semibold text-slate-800">Linus
                                                            Torvalds</p>
                                                        <div className="flex items-center">
                                                            <i className="ti ti-git-fork text-slate-400 mr-1 text-xs"></i>
                                                            <p className="text-xs text-slate-500">Linux内核创始人</p>
                                                        </div>
                                                    </div>
                                                    <div className="ml-auto flex items-center">
                                                        <span
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                                            <i className="ti ti-star-filled text-amber-500 mr-1"></i>
                                                            192.5k
                                                        </span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="border-b border-slate-100 pb-3">
                                                <a href="/user/gvanrossum"
                                                   className="flex items-center hover:bg-slate-50 p-2 rounded-lg transition duration-150 card-hover">
                                                    <div className="flex-shrink-0 relative">
                                                        <img
                                                            className="h-12 w-12 rounded-full object-cover border-2 border-primary-100"
                                                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                                                            alt="User"/>
                                                        <span
                                                            className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-primary-500 text-white rounded-full text-xs font-bold">2</span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-sm font-semibold text-slate-800">Guido van
                                                            Rossum</p>
                                                        <div className="flex items-center">
                                                            <i className="ti ti-code text-slate-400 mr-1 text-xs"></i>
                                                            <p className="text-xs text-slate-500">Python创始人</p>
                                                        </div>
                                                    </div>
                                                    <div className="ml-auto flex items-center">
                                                        <span
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                                            <i className="ti ti-star-filled text-amber-500 mr-1"></i>
                                                            165.7k
                                                        </span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="border-b border-slate-100 pb-3">
                                                <a href="/user/tj"
                                                   className="flex items-center hover:bg-slate-50 p-2 rounded-lg transition duration-150 card-hover">
                                                    <div className="flex-shrink-0 relative">
                                                        <img
                                                            className="h-12 w-12 rounded-full object-cover border-2 border-primary-100"
                                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                                                            alt="User"/>
                                                        <span
                                                            className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-primary-500 text-white rounded-full text-xs font-bold">3</span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-sm font-semibold text-slate-800">TJ
                                                            Holowaychuk</p>
                                                        <div className="flex items-center">
                                                            <i className="ti ti-brand-javascript text-slate-400 mr-1 text-xs"></i>
                                                            <p className="text-xs text-slate-500">Express.js创建者</p>
                                                        </div>
                                                    </div>
                                                    <div className="ml-auto flex items-center">
                                                        <span
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                                            <i className="ti ti-star-filled text-amber-500 mr-1"></i>
                                                            143.2k
                                                        </span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/user/dhh"
                                                   className="flex items-center hover:bg-slate-50 p-2 rounded-lg transition duration-150 card-hover">
                                                    <div className="flex-shrink-0 relative">
                                                        <img
                                                            className="h-12 w-12 rounded-full object-cover border-2 border-primary-100"
                                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                                                            alt="User"/>
                                                        <span
                                                            className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-primary-500 text-white rounded-full text-xs font-bold">4</span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-sm font-semibold text-slate-800">David
                                                            Heinemeier Hansson</p>
                                                        <div className="flex items-center">
                                                            <i className="ti ti-brand-ruby text-slate-400 mr-1 text-xs"></i>
                                                            <p className="text-xs text-slate-500">Ruby on
                                                                Rails创建者</p>
                                                        </div>
                                                    </div>
                                                    <div className="ml-auto flex items-center">
                                                        <span
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                                            <i className="ti ti-star-filled text-amber-500 mr-1"></i>
                                                            129.8k
                                                        </span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="mt-4 text-center">
                                            <button
                                                className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center justify-center mx-auto">
                                                查看更多
                                                <i className="ti ti-chevron-down ml-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bg-white rounded-2xl shadow-soft overflow-hidden transition duration-300">
                                    <div className="flex border-b">
                                        <button
                                            className="w-1/2 py-3 text-center font-medium text-primary-600 border-b-2 border-primary-500">
                                            <i className="ti ti-package text-lg mr-1"></i>
                                            仓库推荐
                                        </button>
                                        <button
                                            className="w-1/2 py-3 text-center font-medium text-slate-500 hover:text-slate-700 transition duration-150">
                                            <i className="ti ti-users text-lg mr-1"></i>
                                            用户推荐
                                        </button>
                                    </div>
                                    <div className="p-4 overflow-auto max-h-[360px]">
                                        <ul className="space-y-3">
                                            <li className="relative border-b border-slate-100 pb-3">
                                                <a href="/repo/facebook/react"
                                                   className="flex items-center hover:bg-slate-50 p-2 rounded-lg transition duration-150 card-hover">
                                                    <div className="flex-shrink-0">
                                                        <div
                                                            className="h-12 w-12 rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-white">
                                                            <i className="ti ti-brand-react text-xl"></i>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="flex items-center">
                                                            <p className="text-sm font-semibold text-slate-800">react</p>
                                                            <span
                                                                className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                                                热门
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center mt-1">
                                                            <p className="text-xs text-slate-500">
                                                                <span
                                                                    className="font-medium text-slate-700">facebook</span> ·
                                                                用于构建用户界面的 JavaScript 库
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center mt-1 space-x-3">
                                                            <div className="flex items-center text-xs text-slate-500">
                                                                <i className="ti ti-star text-amber-500 mr-1"></i>
                                                                189.5k
                                                            </div>
                                                            <div className="flex items-center text-xs text-slate-500">
                                                                <i className="ti ti-git-fork text-slate-400 mr-1"></i>
                                                                38.4k
                                                            </div>
                                                            <div className="flex items-center text-xs">
                                                                <span
                                                                    className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                                                                JavaScript
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="border-b border-slate-100 pb-3">
                                                <a href="/repo/vuejs/vue"
                                                   className="flex items-center hover:bg-slate-50 p-2 rounded-lg transition duration-150 card-hover">
                                                    <div className="flex-shrink-0">
                                                        <div
                                                            className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center text-white">
                                                            <i className="ti ti-brand-vue text-xl"></i>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="flex items-center">
                                                            <p className="text-sm font-semibold text-slate-800">vue</p>
                                                            <span
                                                                className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                                                流行
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center mt-1">
                                                            <p className="text-xs text-slate-500">
                                                                <span
                                                                    className="font-medium text-slate-700">vuejs</span> ·
                                                                渐进式 JavaScript 框架
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center mt-1 space-x-3">
                                                            <div className="flex items-center text-xs text-slate-500">
                                                                <i className="ti ti-star text-amber-500 mr-1"></i>
                                                                198.3k
                                                            </div>
                                                            <div className="flex items-center text-xs text-slate-500">
                                                                <i className="ti ti-git-fork text-slate-400 mr-1"></i>
                                                                32.7k
                                                            </div>
                                                            <div className="flex items-center text-xs">
                                                                <span
                                                                    className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                                                                JavaScript
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="border-b border-slate-100 pb-3">
                                                <a href="/repo/tensorflow/tensorflow"
                                                   className="flex items-center hover:bg-slate-50 p-2 rounded-lg transition duration-150 card-hover">
                                                    <div className="flex-shrink-0">
                                                        <div
                                                            className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white">
                                                            <i className="ti ti-brain text-xl"></i>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="flex items-center">
                                                            <p className="text-sm font-semibold text-slate-800">tensorflow</p>
                                                            <span
                                                                className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                                                                AI
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center mt-1">
                                                            <p className="text-xs text-slate-500">
                                                                <span
                                                                    className="font-medium text-slate-700">tensorflow</span> ·
                                                                机器学习开源平台
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center mt-1 space-x-3">
                                                            <div className="flex items-center text-xs text-slate-500">
                                                                <i className="ti ti-star text-amber-500 mr-1"></i>
                                                                167.1k
                                                            </div>
                                                            <div className="flex items-center text-xs text-slate-500">
                                                                <i className="ti ti-git-fork text-slate-400 mr-1"></i>
                                                                86.5k
                                                            </div>
                                                            <div className="flex items-center text-xs">
                                                                <span
                                                                    className="w-2 h-2 rounded-full bg-amber-500 mr-1"></span>
                                                                Python
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/repo/microsoft/vscode"
                                                   className="flex items-center hover:bg-slate-50 p-2 rounded-lg transition duration-150 card-hover">
                                                    <div className="flex-shrink-0">
                                                        <div
                                                            className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white">
                                                            <i className="ti ti-code text-xl"></i>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="flex items-center">
                                                            <p className="text-sm font-semibold text-slate-800">vscode</p>
                                                            <span
                                                                className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                                                                工具
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center mt-1">
                                                            <p className="text-xs text-slate-500">
                                                                <span
                                                                    className="font-medium text-slate-700">microsoft</span> ·
                                                                代码编辑器
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center mt-1 space-x-3">
                                                            <div className="flex items-center text-xs text-slate-500">
                                                                <i className="ti ti-star text-amber-500 mr-1"></i>
                                                                135.6k
                                                            </div>
                                                            <div className="flex items-center text-xs text-slate-500">
                                                                <i className="ti ti-git-fork text-slate-400 mr-1"></i>
                                                                24.3k
                                                            </div>
                                                            <div className="flex items-center text-xs">
                                                                <span
                                                                    className="w-2 h-2 rounded-full bg-purple-500 mr-1"></span>
                                                                TypeScript
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="mt-4 text-center">
                                            <button
                                                className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center justify-center mx-auto">
                                                查看更多
                                                <i className="ti ti-chevron-down ml-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
