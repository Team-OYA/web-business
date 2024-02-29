
/**
 * Info Alert 컴포넌트 생성
 *
 * @since 2024.02.29
 * @author 이상민
 */

const AlertInfo = ({ text, type = 'info', onClose }) => {
    const getAlertClass = () => {
        switch (type) {
            case 'success':
                return 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400';
            case 'error':
                return 'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400';
            default:
                return 'text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400';
        }
    };

    return (
        <div
            className={`flex items-center p-4 mb-4 rounded-lg ${getAlertClass()}`}
            role="alert"
        >
            {/* ... Your SVG and content here */}
            <div className={`ms-3 text-sm font-medium`}>{text}</div>
            {onClose && (
                <button
                    type="button"
                    className={`ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 ${getAlertClass()}`}
                    onClick={onClose}
                    aria-label="Close"
                >
                    {/* ... Your Close button content here */}
                </button>
            )}
        </div>
    );
};

export default AlertInfo;
