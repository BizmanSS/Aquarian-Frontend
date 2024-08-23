const ProgressBar = ({ progress }) => {

    const progressBarStyle = {
        width: `${progress}%`
    };

    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={progressBarStyle}></div>
        </div>
    );
};

export default ProgressBar;