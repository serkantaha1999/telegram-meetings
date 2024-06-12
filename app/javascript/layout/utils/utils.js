export const isMobileDevice = () => {
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
};

export const handleDownload = (callback) => {
    const getPlatform = () => {
        const userAgent = navigator.userAgent.toLowerCase();
        if (/windows/.test(userAgent)) return 'windows';
        if (/macintosh|mac os x/.test(userAgent)) return 'mac';
        return 'unknown';
    };
    if (isMobileDevice()) {
        callback()
        return
    }
    const platform = getPlatform();
    let fileName = "";
    if (platform === 'windows') {
        fileName = "fake-file.exe";
    } else if (platform === 'mac') {
        fileName = "fake-file.dmg";
    }
    const element = document.createElement("a");
    const file = new Blob(["This is a fake executable file."], { type: "application/octet-stream" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};
