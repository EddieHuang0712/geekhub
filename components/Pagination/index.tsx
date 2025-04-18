
export default function Pagination ({ currentPage, totalPages, onPageChange }: { currentPage: number, totalPages: number, onPageChange: (page: number) => void }) {
    // 生成页码数组
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 3; // 最多显示3个页码（不包括首尾）

        if (totalPages <= maxVisiblePages + 2) {
            // 总页数较少，显示所有页码
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // 总页数较多，添加省略号逻辑
            pages.push(1); // 总是显示第一页

            // 计算中间页码范围
            let start = Math.max(2, currentPage - 1);
            let end = Math.min(totalPages - 1, currentPage + 1);

            if (currentPage <= maxVisiblePages) {
                // 当前页靠近左侧
                end = maxVisiblePages + 1;
            } else if (currentPage >= totalPages - maxVisiblePages) {
                // 当前页靠近右侧
                start = totalPages - maxVisiblePages;
            }

            // 添加左侧省略号
            if (start > 2) {
                pages.push('...');
            }

            // 添加中间页码
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            // 添加右侧省略号
            if (end < totalPages - 1) {
                pages.push('...');
            }

            pages.push(totalPages); // 总是显示最后一页
        }

        return pages;
    };

    const handlePageClick = (page: any) => {
        if (page !== '...' && page !== currentPage) {
            onPageChange(page);
        }
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="w-full flex justify-between">
            <button
                className="flex items-center text-slate-600 text-sm hover:text-primary-600"
                disabled={currentPage === 1}
                onClick={() => handlePageClick(currentPage - 1)}
            >
                <i className="ti ti-chevron-left mr-1"></i>
                上一页
            </button>

            <div className="flex items-center space-x-2">
                {pageNumbers.map((page, index) => (
                    <button
                        key={index}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                            page === currentPage ? 'bg-primary-600 text-white' : 'text-slate-600 hover:text-primary-600'
                        }`}
                        onClick={() => handlePageClick(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                className="flex items-center text-slate-600 text-sm hover:text-primary-600"
                disabled={currentPage === totalPages}
                onClick={() => handlePageClick(currentPage + 1)}
            >
                下一页
                <i className="ti ti-chevron-right ml-1"></i>
            </button>
        </div>
    );
};
